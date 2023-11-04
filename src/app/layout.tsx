import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interior',
  description: 'High Quality Furniture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />

        {/* Abel font import */}
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet" />
        <script
          src="./custom.js"
          type="text/javascript"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html >
  )
}
