import './globals.css'
import { cn } from '@/utils'
import { Open_Sans } from 'next/font/google'
import { Header } from '@/components'
import type { Metadata } from 'next'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.tomisiang.com'),
  title: 'Tom Isiang | Blog',
  description: 'Page where Tom shares his thoughts on some stuffs',
  openGraph: {
    images: [
      {
        url: '/assets/me.jpg',
        height: 600,
        width: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(openSans.className, 'bg-appWhite')}>
        <div className='flex flex-col'>
          <Header />
          <main className='pt-6'>{children}</main>
        </div>
      </body>
    </html>
  )
}
