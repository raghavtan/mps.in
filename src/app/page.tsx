import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
            RT
          </div>
          <h1 className="text-4xl font-bold text-center">
            Welcome to MPS.in
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl">
            Personal website and portfolio of Raghav Tan. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/about"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            View Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">🚀 Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js App Router for optimal performance and SEO.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">🎨 Beautiful</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Styled with Tailwind CSS for a modern and responsive design.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">⚡ Modern</h3>
            <p className="text-gray-600 dark:text-gray-400">
              TypeScript for type safety and better developer experience.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">📱 Responsive</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Optimized for all devices and screen sizes.
            </p>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/raghavtan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/raghavtan"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  )
}