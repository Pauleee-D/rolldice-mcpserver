// app/api/[transport]/route.ts
import { createMcpHandler } from "mcp-handler";
import {
  rollDice,
  rollDiceTool,
  rollMultipleDice,
  rollMultipleDiceTool,
  rollD20,
  rollD20Tool,
  rollD6,
  rollD6Tool,
} from "@/lib/dice";

const handler = createMcpHandler(
  (server) => {
    // Tool 1: Roll custom dice
    server.tool(
      rollDiceTool.name,
      rollDiceTool.description,
      rollDiceTool.schema,
      async ({ sides }) => {
        const result = rollDice(sides);
        return {
          content: [result],
        };
      }
    );

    // Tool 2: Roll multiple dice
    server.tool(
      rollMultipleDiceTool.name,
      rollMultipleDiceTool.description,
      rollMultipleDiceTool.schema,
      async ({ count, sides }) => {
        const result = rollMultipleDice(count, sides);
        return {
          content: [result],
        };
      }
    );

    // Tool 3: Roll d20 for RPG
    server.tool(
      rollD20Tool.name,
      rollD20Tool.description,
      rollD20Tool.schema,
      async () => {
        const result = rollD20();
        return {
          content: [result],
        };
      }
    );

    // Tool 4: Roll d6 standard die
    server.tool(
      rollD6Tool.name,
      rollD6Tool.description,
      rollD6Tool.schema,
      async () => {
        const result = rollD6();
        return {
          content: [result],
        };
      }
    );
  },
  {
    // Optional server options
  },
  {
    // No Redis config - disable Redis requirement
    basePath: "/api", // this needs to match where the [transport] is located.
    maxDuration: 60,
    verboseLogs: true,
  }
);
export { handler as GET, handler as POST };