'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MPS.in
        </Link>
        
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}