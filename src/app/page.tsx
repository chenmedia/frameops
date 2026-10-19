import { ArrowRightIcon, Layers3Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-6 py-20">
      <section className="w-full max-w-3xl rounded-2xl border bg-card p-8 shadow-sm sm:p-12">
        <div className="mb-10 inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Layers3Icon className="size-5" aria-hidden="true" />
        </div>

        <div className="space-y-5">
          <p className="text-sm font-medium text-muted-foreground">
            FrameOps starter
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            The UI foundation is ready.
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Next.js, Tailwind CSS, Radix primitives, and shadcn/ui are installed
            and configured for the first product workflow.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">
                Verify the stack
                <ArrowRightIcon aria-hidden="true" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Everything is connected</DialogTitle>
                <DialogDescription>
                  This dialog uses a Radix primitive, shadcn/ui conventions,
                  and Tailwind design tokens.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button size="lg" variant="outline" asChild>
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
              Read the UI docs
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
