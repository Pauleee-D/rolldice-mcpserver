export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>Built with Next.js, shadcn/ui, and the Model Context Protocol</p>
        <p className="mt-1">
          Created by{" "}
          <a 
            href="https://github.com/gocallum" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            Callum Bir
          </a>
          {" "}• Open source on{" "}
          <a 
            href="https://github.com/gocallum/rolldice-mcpserver" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          {" "}• Connect on{" "}
          <a 
            href="https://www.linkedin.com/in/callumbir/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}
