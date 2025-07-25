import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { Code, GitBranch, BrainCircuit } from 'lucide-react';

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
        <header className="flex justify-start py-6">
          <RevealOnScroll>
            <Logo />
          </RevealOnScroll>
        </header>

        <section className="py-20 text-center sm:py-28 md:py-32">
          <RevealOnScroll>
            <h1 className="font-headline text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Code <span className="text-accent">3.0</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="mt-4 text-2xl text-muted-foreground">coming soon</p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Sawbay proposes to build its own Code 3.0 framework, applying it to our outsourcing products for a new era of self-adapting software.
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
