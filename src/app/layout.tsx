import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteMetadata, viewport } from '@/lib/metadata'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = siteMetadata
export { viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}