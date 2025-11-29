import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karácsonyi Advent Naptár',
  description: 'Interaktív advent naptár 25 nappal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  )
}



