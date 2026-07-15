import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], display: 'swap' });
const _geistMono = Geist_Mono({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ff6b35',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'ArcTone | Turn Creators Into Authorities',
  description: 'You just film. We handle the rest. Research, strategy, editing & viral hooks. First 3 clients get month 1 at $899.',
  generator: 'v0.app',
  applicationName: 'ArcTone',
  keywords: ['content creation', 'video editing', 'strategy', 'creators', 'authority'],
  authors: [{ name: 'ArcTone' }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: { url: '/apple-icon.png', type: 'image/png' },
  },
  openGraph: {
    title: 'ArcTone | Turn Creators Into Authorities',
    description: 'You just film. We turn you into an authority.',
    type: 'website',
    url: 'https://arctone.com',
    siteName: 'ArcTone',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ArcTone - Content Creation & Authority Building',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcTone | Turn Creators Into Authorities',
    description: 'You just film. We turn you into an authority.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
