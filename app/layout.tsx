import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from './components/ClientLayout'

export const metadata: Metadata = {
  title: 'AG Youth Sabah 2025 - Kingdom Awakening',
  description: 'AG Youth Sabah 2025 Conference - Awaken your purpose. Equip your passion.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  )
}
