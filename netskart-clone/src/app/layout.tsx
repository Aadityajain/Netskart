import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Netskart — Premium Protective Netting Solutions | ProNet®',
  description: 'India\'s #1 D2C protective netting brand. Bird nets, monkey nets, safety nets, shade nets and cricket nets — factory direct, BIS certified, installed across 15+ cities.',
  keywords: 'bird net, monkey net, safety net, shade net, cricket net, balcony net, pigeon net, anti bird net India',
  openGraph: {
    title: 'Netskart — Premium Protective Netting',
    description: 'Factory direct ProNet® netting solutions delivered and installed across India.',
    type: 'website',
    url: 'https://netskart.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
