'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { galleryImages, amenityImages } from '../../lib/luxury-villas-newtown/images'

import Navbar from '../../components/luxury-villas-newtown/Navbar'
import Hero from '../../components/luxury-villas-newtown/Hero'

const Overview = dynamic(() => import('../../components/luxury-villas-newtown/Overview'), { ssr: true })
// const Projects = dynamic(() => import('../../components/luxury-villas-newtown/Projects'), { ssr: true })
const Highlights = dynamic(() => import('../../components/luxury-villas-newtown/Highlights'), { ssr: true })
const Amenities = dynamic(() => import('../../components/luxury-villas-newtown/Amenities'), { ssr: true })
const Pricing = dynamic(() => import('../../components/luxury-villas-newtown/Pricing'), { ssr: true })
const Location = dynamic(() => import('../../components/luxury-villas-newtown/Location'), { ssr: true })
const MasterPlan = dynamic(() => import('../../components/luxury-villas-newtown/MasterPlan'), { ssr: true })
// const PaymentPlan = dynamic(() => import('../../components/luxury-villas-newtown/PaymentPlan'), { ssr: true })
const AboutDeveloper = dynamic(() => import('../../components/luxury-villas-newtown/AboutDeveloper'), { ssr: true })
const Footer = dynamic(() => import('../../components/luxury-villas-newtown/Footer'), { ssr: true })

const Gallery = dynamic(() => import('../../components/luxury-villas-newtown/Gallery'), { ssr: false })
// const VirtualTour = dynamic(() => import('../../components/luxury-villas-newtown/VirtualTour'), { ssr: false })
const CarouselSection = dynamic(() => import('../../components/luxury-villas-newtown/CarouselSection'), { ssr: false })
// const ExclusiveAmenities = dynamic(() => import('../../components/luxury-villas-newtown/ExclusiveAmenities'), { ssr: false })
// const Sustainability = dynamic(() => import('../../components/luxury-villas-newtown/Sustainability'), { ssr: false })
// const JapaneseExcellence = dynamic(() => import('../../components/luxury-villas-newtown/JapaneseExcellence'), { ssr: false })
const EnquireModal = dynamic(() => import('../../components/luxury-villas-newtown/EnquireModal'), { ssr: false })
const AosInit = dynamic(() => import('../../components/luxury-villas-newtown/AosInit'), { ssr: false })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-white">
      <AosInit />
      <Navbar setIsOpen={setIsOpen} />
      <Hero setIsOpen={setIsOpen} />
      <Overview setIsOpen={setIsOpen} />
      {/* <Amenities setIsOpen={setIsOpen} /> */}
      <CarouselSection 
        setIsOpen={setIsOpen} 
        title="Where Every View Tells a Story" 
        id="gallery" 
        images={galleryImages} 
      />
      <CarouselSection 
        setIsOpen={setIsOpen} 
        title="Indulge in a Lifestyle Beyond Ordinary" 
        id="amenities" 
        images={amenityImages} 
      />
      {/* <ExclusiveAmenities /> */}
      <Pricing setIsOpen={setIsOpen} />
      <Highlights setIsOpen={setIsOpen} />
      {/* <Gallery setIsOpen={setIsOpen} /> */}
      {/* <Projects setIsOpen={setIsOpen} /> */}
      <Location />
      {/* <Sustainability /> */}
      {/* <JapaneseExcellence /> */}
      <MasterPlan setIsOpen={setIsOpen} />
      {/* <PaymentPlan setIsOpen={setIsOpen} /> */}
      <AboutDeveloper setIsOpen={setIsOpen} />
      {/* <VirtualTour setIsOpen={setIsOpen} /> */}
      {/* <QuickChat /> */}
      <Footer />
      <EnquireModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Floating Vertical Enquire Tab — Desktop only */}
      <div 
        className="hidden lg:flex fixed z-50 cursor-pointer text-white uppercase text-[14px] leading-[20px] font-bold tracking-[0.4px] whitespace-nowrap bg-[#9B1B22] items-center justify-center gap-[6px] hover:bg-[#7D1218] hover:text-white transition-colors duration-300"
        style={{
          top: '50%',
          right: '10px',
          writingMode: 'vertical-rl',
          transform: 'translateY(-50%) rotate(180deg)',
          borderRadius: '50px',
          padding: '18px 11px',
          boxShadow: '0 0 12px 0 rgba(0,0,0,0.15)'
        }}
        onClick={() => setIsOpen(true)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(90deg)' }}>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
        ENQUIRE NOW
      </div>

      {/* Mobile Sticky Bottom Bar with Behavioral Micro-Animations */}
      <style jsx global>{`
        @keyframes phoneRingVibe {
          0%, 100% { transform: rotate(0) scale(1) skew(1deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-15deg) scale(1) skew(1deg); }
          20%, 40%, 60%, 80% { transform: rotate(15deg) scale(1) skew(1deg); }
        }
        .animate-phone-ring-villa {
          animation: phoneRingVibe 1.5s infinite ease-in-out;
          transform-origin: center center;
        }
        .mahindra-theme-btn-villa {
          background: linear-gradient(90deg, #D4AF37 0%, #F9E08A 100%) !important;
          color: #111827 !important;
          border-color: transparent !important;
          font-weight: 800 !important;
          border-radius: 0 !important;
          -webkit-mask: 
            radial-gradient(circle at 0 0, transparent 6px, black 6.5px) top left,
            radial-gradient(circle at 100% 0, transparent 6px, black 6.5px) top right,
            radial-gradient(circle at 0 100%, transparent 6px, black 6.5px) bottom left,
            radial-gradient(circle at 100% 100%, transparent 6px, black 6.5px) bottom right;
          -webkit-mask-size: 51% 51%;
          -webkit-mask-repeat: no-repeat;
        }
      `}</style>
      <div className="sticky-bottom-bar">
        <a
          href="https://wa.me/919337712053?text=Hi%20I%20am%20interested%20in%20Vinayak%2021%20Acres%20Villa"
          target="_blank" rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 !px-0 text-white transition-all"
          style={{ background: '#25D366', fontFamily: 'var(--font-sans)' }}
        >
          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>WhatsApp</span>
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 mahindra-theme-btn-villa !py-2 !px-0 !rounded-none"
        >
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>ENQUIRE</span>
        </button>
        <a
          href="tel:+919337712053"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 !py-2 !px-0 text-white transition-all"
          style={{ background: '#1c6deb' }}
        >
          <svg className="w-5 h-5 animate-phone-ring-villa" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>Call Us</span>
        </a>
      </div>

    <div className="h-10 lg:hidden" />
    </main>
  )
}
