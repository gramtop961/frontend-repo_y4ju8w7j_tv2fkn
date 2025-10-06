import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function SectionDivider() {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-12" /></div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About this starter</h2>
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                  This is a clean foundation for building beautiful, responsive apps with Vite, React, Tailwind, and modern UI patterns. Edit components in src/components to customize.
                </p>
                <a id="get-started" href="#features" className="mt-6 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">
                  Learn More
                </a>
              </div>
              <div className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between"><span>Vite + React</span><span className="text-neutral-500">Fast HMR</span></li>
                  <li className="flex items-center justify-between"><span>Tailwind CSS</span><span className="text-neutral-500">Utility-first</span></li>
                  <li className="flex items-center justify-between"><span>Framer Motion</span><span className="text-neutral-500">Animations</span></li>
                  <li className="flex items-center justify-between"><span>Lucide Icons</span><span className="text-neutral-500"> Crisp icons</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
