import '../../app/globals.css'
import './luxury-villas-newtown.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/luxury-villas-newtown/config'
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.vinayak21acresnewtown.com'),
  title: 'Vinayak 21 Acres Villa | 3 & 4 BHK Luxury Villas in New Town',
  description: 'Explore 3 & 4 BHK luxury Villas at Vinayak 21 Acres Villa, New Town with 50+ modern amenities, excellent connectivity and premium lifestyle features from 2.40 Cr*. Enquire now!',
  alternates: {
    canonical: '/luxury-villas-newtown',
  },
  openGraph: {
    title: 'Vinayak 21 Acres Villa | 3 & 4 BHK Luxury Villas in New Town',
    description: 'Explore 3 & 4 BHK luxury Villas at Vinayak 21 Acres Villa, New Town with 50+ modern amenities, excellent connectivity and premium lifestyle features from 2.40 Cr*. Enquire now!',
    url: 'https://www.vinayak21acresnewtown.com/luxury-villas-newtown',
    siteName: 'Vinayak 21 Acres Villa',
    images: [
      {
        url: '/luxury-villas-newtown/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Vinayak 21 Acres Villa at Action Area 3 New Town, Kolkata',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinayak 21 Acres Villa | 3 & 4 BHK Luxury Villas in New Town',
    description: 'Explore 3 & 4 BHK luxury Villas at Vinayak 21 Acres Villa, New Town with 50+ modern amenities, excellent connectivity and premium lifestyle features from 2.40 Cr*. Enquire now!',
    images: ['/luxury-villas-newtown/hero/banner1.webp'],
  },
  icons: {
    icon: '/luxury-villas-newtown/favicon/fav.webp',
  },
}

import SmoothScroll from '../../components/luxury-villas-newtown/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <div className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <Script
        id="json-ld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Vinayak 21 Acres Villa",
            "url": "https://www.vinayak21acresnewtown.com",
            "logo": "https://www.vinayak21acresnewtown.com/luxury-villas-newtown/logo/Logo.webp",
            "image": "https://www.vinayak21acresnewtown.com/luxury-villas-newtown/hero/banner1.webp",
            "description": "Vinayak 21 Acres Villa at Action Area 3 New Town, Kolkata offers premium 3 & 4 BHK villas.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Action Area 3, New Town",
              "addressLocality": "Kolkata",
              "addressRegion": "West Bengal",
              "addressCountry": "IN"
            },
            "telephone": "+919337712053",
            "priceRange": "₹ 2.40 Crore Onwards",
            "sameAs": [
              "https://www.vinayak21acresnewtown.com"
            ]
          })
        }}
      />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
      </Script>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </div>
  )
}
