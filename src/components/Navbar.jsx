import { useState } from 'react';
import { Menu, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">Vibe Starter</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Features</a>
            <a href="#about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">About</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-neutral-900 px-3.5 py-2 text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">Get Started</a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Features</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">About</a>
              <a href="#contact" className="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Contact</a>
              <a href="#get-started" className="rounded-md bg-neutral-900 px-3 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
