export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 dark:border-white/10 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Vibe Starter. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Privacy</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Terms</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
