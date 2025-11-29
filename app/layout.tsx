import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karácsonyi Advent Naptár',
  description: 'Interaktív advent naptár 25 nappal',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  )
}



