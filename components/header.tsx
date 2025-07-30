import { Dice1, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dice1 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Roll Dice MCP Server</h1>
            <p className="text-muted-foreground text-sm">Model Context Protocol for Claude Desktop</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/gocallum/rolldice-mcpserver" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
