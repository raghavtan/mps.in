import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of projects',
}

const projects = [
  {
    title: 'Personal Website',
    description: 'This website! Built with Next.js, TypeScript, and Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Live',
    link: 'https://mps.in',
  },
  {
    title: 'Example Project 1',
    description: 'A sample project demonstrating modern web development practices.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    status: 'In Development',
    link: '#',
  },
  {
    title: 'Example Project 2',
    description: 'Another example project showcasing full-stack development skills.',
    tech: ['Next.js', 'Python', 'AWS'],
    status: 'Planning',
    link: '#',
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
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
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of my work and side projects.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span 
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : project.status === 'In Development'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">More Coming Soon</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I&apos;m always working on new projects and experiments. Check back regularly 
            to see what I&apos;ve been building, or follow me on GitHub for the latest updates.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/raghavtan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Follow on GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}