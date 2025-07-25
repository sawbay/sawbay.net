import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { Code, GitBranch, BrainCircuit, Github, Linkedin } from 'lucide-react';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.79 0 3.48-.46 4.94-1.29a.5.5 0 0 0 .17-.4V17.5a1 1 0 0 0-.5-.87c-1.2-.7-2.52-1.13-3.92-1.13-2.43 0-4.42.93-5.94 2.5a.5.5 0 0 1-.7-.04C4.61 16.48 4 14.33 4 12.11c0-2.45 1.5-4.5 3.5-5.32a.5.5 0 0 1 .6.38c.1.6.26 1.2.46 1.76a.5.5 0 0 1-.16.54C7.38 9.91 7 10.93 7 12c0 1.55 1.14 2.82 2.62 3a3.53 3.53 0 0 0 1.38-.25 a1 1 0 0 0 .5-.86v-1.1a1 1 0 0 1 .76-.97c1.33-.36 2.24-1.58 2.24-2.83 0-1.63-1.34-2.95-3-2.95s-3 1.32-3 2.95c0 .02 0 .04.0.06a.5.5 0 0 1-.5.5H8.5a.5.5 0 0 1-.5-.5C8 10.27 9.34 9 11 9c1.66 0 3 1.34 3 3 0 .83-.34 1.58-.88 2.12a.5.5 0 0 0-.08.43v.68a.5.5 0 0 0 .42.49c.8.19 1.53.29 2.21.29 1.55 0 2.94-.47 4.14-1.27a1 1 0 0 0 .5-.87v-2.07a.5.5 0 0 0-.17-.4C18.52 2.46 16.79 2 15 2Z" />
    <path d="M9 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path d="M15 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);


export default function Home() {
  const stages = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Code 1.0",
      description: "Humans write all the logic by hand using traditional programming.",
    },
    {
      icon: <GitBranch className="h-8 w-8 text-accent" />,
      title: "Code 2.0",
      description: "AI learns the logic from data using models like neural networks.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-accent" />,
      title: "Code 3.0",
      description: "AI systems improve themselves through self-learning and adaptation.",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      {/* Blurry Background Effect */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 h-full w-full select-none"
      >
        <div className="absolute -top-1/4 left-0 h-1/2 w-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-1/4 right-0 h-1/2 w-1/2 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <RevealOnScroll>
            <Logo />
          </RevealOnScroll>
           <RevealOnScroll>
            <div className="flex items-center gap-4">
              <a href="https://github.com/sawbay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-foreground transition-colors hover:text-accent" />
                 <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/company/sawbaysolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-foreground transition-colors hover:text-accent" />
                 <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://discord.gg/6rYwUM2kGT" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <DiscordIcon className="h-6 w-6 text-foreground transition-colors hover:text-accent" />
                 <span className="sr-only">Discord</span>
              </a>
            </div>
          </RevealOnScroll>
        </header>

        <section className="py-20 text-center sm:py-28 md:py-32">
          <RevealOnScroll>
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Code <span className="text-accent">3.0</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="mt-4 text-base font-medium">
              <span className="animate-pulse bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                (coming soon)
              </span>
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              At Sawbay, we're not just waiting for the future, we're building it. Our proprietary Code 3.0 framework will power a new generation of outsourcing products—software that learns, adapts, and evolves on its own.
            </p>
          </RevealOnScroll>
        </section>

        <section className="py-16 sm:py-20">
          <RevealOnScroll>
            <h2 className="font-headline text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Evolution of Programming
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {stages.map((stage, index) => (
              <RevealOnScroll key={stage.title} delay={200 * (index + 1)}>
                <Card className="flex h-full flex-col border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {stage.icon}
                    <CardTitle className="font-headline text-2xl font-bold text-foreground">
                      {stage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        
        <footer className="py-16 text-center text-muted-foreground">
          <RevealOnScroll>
            <p>&copy; {new Date().getFullYear()} Sawbay. All rights reserved.</p>
          </RevealOnScroll>
        </footer>
      </main>
    </div>
  );
}
