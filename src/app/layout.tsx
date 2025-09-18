import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MPS.in',
    template: '%s | MPS.in',
  },
  description: 'Personal website of Raghav Tan',
  keywords: ['portfolio', 'developer', 'web development'],
  authors: [{ name: 'Raghav Tan' }],
  creator: 'Raghav Tan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mps.in',
    title: 'MPS.in',
    description: 'Personal website of Raghav Tan',
    siteName: 'MPS.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MPS.in',
    description: 'Personal website of Raghav Tan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}