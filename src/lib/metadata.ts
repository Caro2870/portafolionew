import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const siteMetadata: Metadata = {
  title: 'Carolina Villegas | Desarrolladora Full Stack',
  description: 'Portafolio profesional de Carolina Villegas, desarrolladora Full Stack especializada en crear experiencias web innovadoras y escalables.',
  keywords: ['desarrollo web', 'full stack', 'react', 'next.js', 'typescript', 'portafolio'],
  authors: [{ name: 'Carolina Villegas' }],
  creator: 'Carolina Villegas',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://carolinavillegas.com',
    title: 'Carolina Villegas | Desarrolladora Full Stack',
    description: 'Portafolio profesional de Carolina Villegas, desarrolladora Full Stack especializada en crear experiencias web innovadoras y escalables.',
    siteName: 'Carolina Villegas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carolina Villegas | Desarrolladora Full Stack',
    description: 'Portafolio profesional de Carolina Villegas',
    creator: '@carolinavillegas',
  },
  robots: {
    index: true,
    follow: true,
  },
}