import React from 'react';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <Code2 className="h-8 w-8 text-accent" />
      <span className="text-xl font-bold font-headline">Sawbay Solutions</span>
    </div>
  );
}
