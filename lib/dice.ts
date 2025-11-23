import { z } from "zod"

/**
 * Dice Rolling Logic for MCP Server
 *
 * Provides dice rolling functionality with validation and security
 */

// Shared Zod schemas for validation
export const diceSchema = z.number().int().min(2).max(100)
export const diceCountSchema = z.number().int().min(1).max(20)

export interface DiceRollResult {
  rolls: number[];
  total: number;
  sides: number;
  count: number;
}

/**
 * Roll a single dice with specified number of sides
 */
export function rollDice(sides: number = 6) {
  console.log(`🎲 MCP DICE TOOL CALLED! Rolling a ${sides}-sided die...`)

  const validatedSides = diceSchema.parse(sides)
  const value = 1 + Math.floor(Math.random() * validatedSides)

  console.log(`🎲 MCP TOOL RESULT: Rolled a ${value}!`)

  return {
    type: 'text' as const,
    text: `🎲 Rolled 1d${validatedSides}: **${value}**`
  }
}

/**
 * Roll multiple dice and return detailed results
 */
export function rollMultipleDice(count: number, sides: number = 6) {
  console.log(`🎲 MCP DICE TOOL CALLED! Rolling ${count}d${sides}...`)

  const validatedCount = diceCountSchema.parse(count)
  const validatedSides = diceSchema.parse(sides)

  const rolls: number[] = []
  for (let i = 0; i < validatedCount; i++) {
    rolls.push(1 + Math.floor(Math.random() * validatedSides))
  }

  const total = rolls.reduce((sum, val) => sum + val, 0)

  console.log(`🎲 MCP TOOL RESULT: Rolled ${rolls.join(', ')} = ${total}`)

  const rollsDisplay = rolls.join(', ')
  return {
    type: 'text' as const,
    text: `🎲 Rolled ${validatedCount}d${validatedSides}: ${rollsDisplay}\n**Total: ${total}**`
  }
}

/**
 * Get RPG-style feedback for d20 rolls
 */
export function getD20Feedback(roll: number): string {
  if (roll === 20) return '🎉 Critical Success!';
  if (roll === 1) return '💥 Critical Failure!';
  if (roll >= 17) return '✨ Excellent!';
  if (roll >= 12) return '👍 Good roll!';
  if (roll <= 5) return '😬 Rough...';
  return '';
}

/**
 * Roll a d20 (20-sided die) for RPG gameplay
 */
export function rollD20() {
  console.log(`🎲 MCP D20 TOOL CALLED!`)

  const value = 1 + Math.floor(Math.random() * 20)
  const feedback = getD20Feedback(value)

  console.log(`🎲 MCP D20 RESULT: Rolled a ${value}! ${feedback}`)

  return {
    type: 'text' as const,
    text: `🎲 d20 roll: **${value}**${feedback ? ` ${feedback}` : ''}`
  }
}

/**
 * Roll a d6 (6-sided die) - standard cube die
 */
export function rollD6() {
  console.log(`🎲 MCP D6 TOOL CALLED!`)

  const value = 1 + Math.floor(Math.random() * 6)

  console.log(`🎲 MCP D6 RESULT: Rolled a ${value}!`)

  return {
    type: 'text' as const,
    text: `🎲 d6 roll: **${value}**`
  }
}

// Tool definitions for MCP server
export const rollDiceTool = {
  name: 'roll_dice',
  description: 'Rolls a single die with specified number of sides (default: 6-sided). Use this for custom dice rolls.',
  schema: {
    sides: diceSchema.optional().default(6),
  }
} as const

export const rollMultipleDiceTool = {
  name: 'roll_multiple_dice',
  description: 'Rolls multiple dice of the same type and returns individual results plus total. Perfect for damage rolls, ability scores, etc.',
  schema: {
    count: diceCountSchema,
    sides: diceSchema.optional().default(6),
  }
} as const

export const rollD20Tool = {
  name: 'roll_d20',
  description: 'Rolls a 20-sided die (d20) for RPG gameplay. Returns the result with critical success/failure feedback.',
  schema: {}
} as const

export const rollD6Tool = {
  name: 'roll_d6',
  description: 'Rolls a standard 6-sided cube die (d6). The classic dice roll.',
  schema: {}
} as const
