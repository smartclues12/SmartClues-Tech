import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"] });
const _openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Smartclues Technologies',
  description: 'Smartclues Technologies LLP - Building secure, intelligent solutions in Cyber Security, Digital Forensics, IT Services, and U.S. Healthcare Revenue Cycle Management since 2020.',
  metadataBase: new URL('https://smartcluestech.com'),
  icons: {
    icon: [
      { url: '/logo2026.jpeg', sizes: '32x32', type: 'image/png' },
      { url: '/logo2026.jpeg', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: ['/logo2026.jpeg'],
    apple: [
      { url: '/logo2026.jpeg', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Smartclues Technologies',
    description: 'Smartclues Technologies LLP - Building secure, intelligent solutions in Cyber Security, Digital Forensics, IT Services, and U.S. Healthcare Revenue Cycle Management since 2020.',
    url: 'https://smartcluestech.com',
    siteName: 'Smartclues Technologies',
    images: [
      {
        url: '/logo2026.jpeg',
        width: 1200,
        height: 630,
        alt: 'Smartclues Technologies Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smartclues Technologies ',
    description: 'Smartclues Technologies LLP - Building secure, intelligent solutions in Cyber Security, Digital Forensics, IT Services, and U.S. Healthcare Revenue Cycle Management since 2020.',
    images: ['/logo2026.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_montserrat.className} ${_openSans.className}`}>
        {children}
        
      </body>
    </html>
  )
}
