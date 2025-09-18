import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Raghav Tan',
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-8">
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Home
        </Link>
      </nav>

      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Software developer passionate about building modern web applications.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to my personal website! I&apos;m a software developer with a passion for 
              creating efficient, scalable, and user-friendly web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This website is built with modern technologies including Next.js, TypeScript, 
              and Tailwind CSS, showcasing my commitment to using cutting-edge tools and 
              best practices in web development.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 
              'Node.js', 'Python', 'HTML/CSS', 'Tailwind CSS',
              'Git', 'AWS', 'Docker', 'PostgreSQL'
            ].map((skill) => (
              <div 
                key={skill}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I&apos;m always interested in connecting with fellow developers and exploring 
            new opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/raghavtan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/raghavtan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}