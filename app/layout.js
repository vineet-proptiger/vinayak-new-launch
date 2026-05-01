import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'Vinayak New Launch | Premium 2 & 3 BHK Apartments in New Town Kolkata — Price Starting ₹72 Lacs*',
  description: 'Vinayak New Launch by Vinayak Group Kolkata — Premium 2 & 3 BHK residences in New Town, Kolkata. Price starting @ ₹72 Lacs*. 186 apartments across 2 acres. Possession July 2029.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
