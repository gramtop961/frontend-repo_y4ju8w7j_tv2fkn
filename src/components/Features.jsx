import { Flame, Star, Zap } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    description: 'Vite-powered dev server with instant HMR and optimized builds.',
    icon: Zap,
  },
  {
    title: 'Beautiful UI',
    description: 'Tailwind CSS with polished, accessible components.',
    icon: Star,
  },
  {
    title: 'Developer Experience',
    description: 'Pre-configured tooling for a smooth start to any project.',
    icon: Flame,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Everything you need to start
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            A curated stack that puts the essentials at your fingertips.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
