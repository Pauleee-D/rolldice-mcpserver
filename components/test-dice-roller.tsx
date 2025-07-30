"use client"

import { useState, useEffect } from "react"
import { Dice1, RefreshCw, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { rollDice as rollDiceAction, listTools } from "@/app/actions/mcp-actions"

export function TestDiceRoller() {
  const [sides, setSides] = useState(6)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking')

  // Check server status on component mount
  useEffect(() => {
    checkServerStatus()
  }, [])

  const checkServerStatus = async () => {
    setServerStatus('checking')
    try {
      // Use server action to check if MCP tools are available
      const result = await listTools()
      if (result.success) {
        setServerStatus('online')
      } else {
        setServerStatus('offline')
      }
    } catch {
      setServerStatus('offline')
    }
  }

  const rollDice = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // Use server action to call MCP dice rolling logic
      const result = await rollDiceAction(sides)
      
      if (result.success && result.result) {
        setResult(result.result.content[0].text)
      } else if (result.error) {
        setError(result.error.message || 'An error occurred')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dice1 className="h-5 w-5" />
            <span>MCP Server Interface</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-sm">
              {serverStatus === 'checking' && (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span className="text-muted-foreground">Checking...</span>
                </>
              )}
              {serverStatus === 'online' && (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">Server Online</span>
                </>
              )}
              {serverStatus === 'offline' && (
                <>
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-red-600 dark:text-red-400">Server Offline</span>
                </>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={checkServerStatus}
              disabled={serverStatus === 'checking'}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          Test the dice rolling functionality using server actions that call the same logic as the MCP handler at /api/[transport].
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {serverStatus === 'offline' && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Server Not Running</h4>
            <p className="text-sm text-red-600 dark:text-red-400">
              Make sure you have started the development server with <code className="bg-red-500/10 px-1 rounded">npm run dev</code>
            </p>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="sides" className="block text-sm font-medium mb-2">
              Number of sides (minimum 2):
            </label>
            <div className="flex space-x-2">
              <Input
                id="sides"
                type="number"
                min="2"
                max="1000"
                value={sides}
                onChange={(e) => setSides(parseInt(e.target.value) || 2)}
                className="w-32"
              />
              <div className="flex space-x-1">
                {[2, 4, 6, 8, 10, 12, 20, 100].map((presetSides) => (
                  <Button
                    key={presetSides}
                    variant={sides === presetSides ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSides(presetSides)}
                  >
                    d{presetSides}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={rollDice}
            disabled={loading || serverStatus !== 'online' || sides < 2}
            className="w-full"
            size="lg"
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Rolling...
              </>
            ) : (
              <>
                <Dice1 className="h-4 w-4 mr-2" />
                Roll d{sides}
              </>
            )}
          </Button>

          {result && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Result:</h4>
              <p className="text-lg font-mono text-green-600 dark:text-green-400">{result}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Error:</h4>
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Test Different Scenarios:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSides(6)
                setTimeout(rollDice, 100)
              }}
              disabled={loading || serverStatus !== 'online'}
            >
              Quick d6
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSides(20)
                setTimeout(rollDice, 100)
              }}
              disabled={loading || serverStatus !== 'online'}
            >
              Quick d20
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSides(2)
                setTimeout(rollDice, 100)
              }}
              disabled={loading || serverStatus !== 'online'}
            >
              Coin Flip
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSides(100)
                setTimeout(rollDice, 100)
              }}
              disabled={loading || serverStatus !== 'online'}
            >
              d100
            </Button>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>This interface uses server actions that call the same dice logic as the MCP server.</p>
          <p>The MCP server endpoint is at /api/[transport] for Claude Desktop connections.</p>
        </div>
      </CardContent>
    </Card>
  )
}
