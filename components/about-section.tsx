import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About This MCP Server</CardTitle>
        <CardDescription>
          Learn more about the Model Context Protocol and this implementation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">What is MCP?</h4>
          <p className="text-sm text-muted-foreground">
            The Model Context Protocol (MCP) is a standard protocol that enables AI assistants like Claude 
            to securely connect with external data sources and tools. This creates a more powerful and 
            flexible AI experience.
          </p>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="font-semibold mb-2">Features</h4>
          <ul className="text-sm space-y-1">
            <li>• Roll dice with any number of sides (minimum 2)</li>
            <li>• Natural language interface via Claude</li>
            <li>• Built with TypeScript and Next.js</li>
            <li>• Uses mcp-handler for HTTP-based MCP protocol</li>
            <li>• Easy deployment to Vercel or other platforms</li>
            <li>• Open source and MIT licensed</li>
          </ul>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="font-semibold mb-2">Author</h4>
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <a 
              href="https://github.com/gocallum" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              Callum Bir
            </a>
            . This project is open source and available on GitHub for contributions and improvements.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Connect with me on{" "}
            <a 
              href="https://www.linkedin.com/in/callumbir/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              LinkedIn
            </a>
            {" "}for updates and discussions about MCP development.
          </p>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="font-semibold mb-2">Technical Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Protocol:</strong> Model Context Protocol</p>
              <p><strong>Transport:</strong> HTTP with mcp-remote bridge</p>
              <p><strong>Framework:</strong> Next.js 15</p>
            </div>
            <div>
              <p><strong>Language:</strong> TypeScript</p>
              <p><strong>Validation:</strong> Zod schemas</p>
              <p><strong>UI:</strong> shadcn/ui components</p>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex space-x-4">
          <Button variant="outline" asChild>
            <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">
              Learn about MCP
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/gocallum/rolldice-mcpserver" target="_blank" rel="noopener noreferrer">
              View Source Code
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
