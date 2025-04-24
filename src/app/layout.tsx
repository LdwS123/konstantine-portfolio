import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Konstantine | Fintech Innovator',
  description: 'Shaping the Future of Fintech with AI, Blockchain & Vision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-background pt-16">
          {children}
        </main>
        <ThemeToggle />
      </body>
    </html>
  )
} 