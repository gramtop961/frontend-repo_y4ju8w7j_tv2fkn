import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4mUeODmY7kxU7nQy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Live Preview
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl text-neutral-900 dark:text-white">
              Build beautiful apps fast
            </h1>
            <p className="mt-4 text-lg leading-7 text-neutral-700 dark:text-neutral-300">
              A modern Vite + React + Tailwind template with delightful UI components to kickstart your next project.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/80 px-5 py-3 text-neutral-900 ring-1 ring-black/10 hover:bg-white dark:bg-neutral-900/80 dark:text-white dark:ring-white/10 dark:hover:bg-neutral-900 transition">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80"></div>
    </section>
  );
}
