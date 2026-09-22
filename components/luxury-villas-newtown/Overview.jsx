'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../../lib/luxury-villas-newtown/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #FDFBF7;
        overflow: hidden;
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      
      {/* Section Header - Spanning across top */}
      <div className="mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-gray-900" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>Vinayak 21 Acres Villa</h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-start mt-1 mb-3">
          <div className="w-16 h-[1px] bg-[#9B1B22]"></div>
          <div className="w-2 h-2 rounded-full bg-[#9B1B22] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#9B1B22]"></div>
        </div>
        <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Premium Villas at Action Area 3 New Town, Kolkata</h3>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
        
        {/* Left Side: Content Box (Paragraph + 3 Info Boxes) */}
        <div className="w-full lg:w-[60%] xl:w-7/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000">
          <div 
            className="relative p-6 sm:p-7 xl:p-8 rounded-2xl shadow-[0_12px_36px_rgba(65,32,17,0.22)] overflow-hidden flex-1 flex flex-col justify-between" 
            style={{ background: '#412011' }}
          >
            <div>
              <p style={{ fontSize: '15.5px', fontFamily: '"Poppins", sans-serif', color: '#E5EDDC', textAlign: 'justify', lineHeight: '1.85', margin: 0 }}>
                
                <span 
                  style={{ 
                    float: 'left', 
                    fontSize: '3.6rem', 
                    lineHeight: '0.8', 
                    fontWeight: '800', 
                    color: '#9B1B22', 
                    marginRight: '12px', 
                    marginTop: '4px',
                    fontFamily: "var(--font-jost), Montserrat, sans-serif" 
                  }}
                >
                  W
                </span>
                <span style={{ fontWeight: '700', color: '#FFFFFF' }}>elcome to Vinayak 21 Acres Villa</span> — a premium villa development by Vinayak Group Kolkata, nestled in the heart of New Town, Kolkata. Launched in July 2024, this thoughtfully designed community offers spacious 3 &amp; 4 BHK villas spread across 21 acres of lush, well-planned land, with possession commencing July 2029. Strategically located in New Town — Kolkata&apos;s most sought-after modern township — the project enjoys seamless connectivity to Rajarhat, Salt Lake, and the international airport.
                <span className="lg:inline hidden">
                  {" "}With thoughtfully crafted villas ranging from 3,035 to 3,366 sq ft of useable area and an attractive average price of ₹7908K/sq.ft, Vinayak 21 Acres Villa is a new availability offering exceptional value in New Town&apos;s premium villa landscape.
                </span>

                {/* Mobile text toggle */}
                <span className="lg:hidden">
                  {!isExpanded ? '... ' : ' '}
                  {isExpanded && (
                    <span>
                      With thoughtfully crafted villas ranging from 3,035 to 3,366 sq ft of useable area and an attractive average price of ₹7908K/sq.ft, Vinayak 21 Acres Villa is a new availability offering exceptional value in New Town&apos;s premium villa landscape.
                    </span>
                  )}
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    type="button"
                    className="text-[#9B1B22] hover:text-[#B7272F] font-bold inline-flex items-center gap-1 transition-colors cursor-pointer ml-1 select-none focus:outline-none"
                    style={{ fontSize: '15px' }}
                  >
                    <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </span>
              </p>
            </div>

            {/* Info Boxes inside the background container - 3 boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xl:gap-3 mt-6 sm:mt-8 pt-6 border-t border-[#9B1B22]/30 w-full">
              
              {/* Box 1: Acres Total Area */}
              <div className="flex items-center justify-start sm:justify-center gap-3.5 sm:gap-2 xl:gap-2.5 px-4 sm:px-3 py-3.5 sm:py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-[#9B1B22]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c-4.97-4.97-8-8.58-8-12a8 8 0 1 1 16 0c0 3.42-3.03 7.03-8 12z" />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </div>
                <div className="flex flex-row sm:flex-col items-baseline sm:items-start gap-2.5 sm:gap-0 min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[12px] md:text-[13.5px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] font-extrabold text-[#412011] leading-tight uppercase whitespace-nowrap">
                    21
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[11.5px] sm:text-[8.5px] md:text-[9px] xl:text-[9.5px] text-gray-600 font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
                    Acres Total Area
                  </span>
                </div>
              </div>

              {/* Box 2: Amenities */}
              <div className="flex items-center justify-start sm:justify-center gap-3.5 sm:gap-2 xl:gap-2.5 px-4 sm:px-3 py-3.5 sm:py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-[#9B1B22]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
                    <path d="M9 8h2" />
                    <path d="M13 8h2" />
                    <path d="M9 12h2" />
                    <path d="M13 12h2" />
                    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </div>
                <div className="flex flex-row sm:flex-col items-baseline sm:items-start gap-2.5 sm:gap-0 min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[12px] md:text-[13.5px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] font-extrabold text-[#412011] leading-tight uppercase whitespace-nowrap">
                    50+
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[11.5px] sm:text-[8.5px] md:text-[9px] xl:text-[9.5px] text-gray-600 font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
                    Amenities
                  </span>
                </div>
              </div>

              {/* Box 3: Avg Price / sq.ft */}
              <div className="flex items-center justify-start sm:justify-center gap-3.5 sm:gap-2 xl:gap-2.5 px-4 sm:px-3 py-3.5 sm:py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-0">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-5 sm:h-5 xl:w-6 xl:h-6 text-[#9B1B22]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="flex flex-row sm:flex-col items-baseline sm:items-start gap-2.5 sm:gap-0 min-w-0">
                  <span style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }} className="text-[17px] sm:text-[12px] md:text-[13.5px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[16px] font-extrabold text-[#412011] leading-tight uppercase whitespace-nowrap">
                    7908K
                  </span>
                  <span style={{ fontFamily: "var(--font-sans), Open Sans, sans-serif" }} className="text-[11.5px] sm:text-[8.5px] md:text-[9px] xl:text-[9.5px] text-gray-600 font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
                    Avg. Price/Sq.Ft
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Image starting at the exact same height */}
        <div className="w-full lg:w-[40%] xl:w-5/12 flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-2xl shadow-lg border border-[#9B1B22]/30 bg-white flex-1 min-h-[380px] sm:min-h-[480px]">
            <Image
              src={overviewImage}
              alt="Vinayak 21 Acres Villa - Overview"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Overview
