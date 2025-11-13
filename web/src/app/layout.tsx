import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sora AI ? Text to Video Demo',
  description: 'A clean, modern UI for prompting and previewing AI-generated videos (mocked).',
  metadataBase: new URL('https://agentic-f436dfd0.vercel.app'),
  openGraph: {
    title: 'Sora AI',
    description: 'Prompt to video (mock) demo UI',
    url: 'https://agentic-f436dfd0.vercel.app',
    siteName: 'Sora AI',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Sora AI' }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
