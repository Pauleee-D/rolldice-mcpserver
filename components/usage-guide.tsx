import { Dice1 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function UsageGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Dice1 className="h-5 w-5" />
          <span>How to Roll Dice with Claude</span>
        </CardTitle>
        <CardDescription>
          Once configured, you can ask Claude to roll dice in natural language.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3">Example Commands:</h4>
          <div className="grid gap-4">
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">Basic dice roll:</p>
              <p className="text-muted-foreground italic">&quot;Roll a 6-sided die&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🎲 You rolled a 4!</p>
            </Card>
            
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">D&amp;D style:</p>
              <p className="text-muted-foreground italic">&quot;Roll a d20 for me&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🎲 You rolled a 17!</p>
            </Card>
            
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">Custom dice:</p>
              <p className="text-muted-foreground italic">&quot;Can you roll a 100-sided die?&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🎲 You rolled a 73!</p>
            </Card>
            
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">In conversation:</p>
              <p className="text-muted-foreground italic">&quot;I need to make a decision. Roll a coin (2-sided die)&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🎲 You rolled a 1!</p>
            </Card>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Supported Dice Types:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[2, 4, 6, 8, 10, 12, 20, 100].map((sides) => (
              <Badge key={sides} variant="outline" className="justify-center py-2">
                d{sides}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            + Any custom number of sides (minimum 2)
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Use Cases:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Tabletop Gaming:</strong> Roll dice for D&D, Pathfinder, or other RPGs</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Decision Making:</strong> Use dice to make random choices</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Probability Teaching:</strong> Demonstrate random number generation</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Game Development:</strong> Test random mechanics and balance</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
