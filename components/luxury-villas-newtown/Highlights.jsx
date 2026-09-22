'use client'
import React from 'react'
import { Dumbbell, Trees, Waves, Trophy, Building2 } from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const highlightsData = [
  {
    icon: Building2,
    title: '21 Acres Integrated Township',
    desc: 'Thoughtfully planned gated villa community spanning across 21 acres of lush greenery and modern living in New Town.',
  },
  {
    icon: Dumbbell,
    title: 'Gymnasium & Fitness Centre',
    desc: 'State-of-the-art fitness and cardio equipment designed for health, wellness, and an active everyday lifestyle.',
  },
  {
    icon: Waves,
    title: 'Swimming Pool & Lap Pool',
    desc: 'Expansive sparkling swimming pool with relaxing sundeck and dedicated splash zones for rejuvenation.',
  },
  {
    icon: Trophy,
    title: 'Club & Indoor Leisure Arena',
    desc: 'Grand multipurpose clubhouse featuring indoor games, banquet spaces, reading lounge, and recreational amenities.',
  },
  {
    icon: Trees,
    title: 'Landscape & Open Gardens',
    desc: 'Lush landscaped gardens, manicured walking pathways, and serene open spaces offering tranquility away from the city bustle.',
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section 
      id="highlights" 
      className="about_us pt-12 sm:pt-14 md:pt-16 pb-12 md:pb-16 relative bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('/luxury-villas-newtown/highlights/highlight.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-[#180C06]/75 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        <h2 
          className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-white text-center" 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          style={{ fontFamily: F_JOST, marginBottom: '10px' }}
        >
          PROJECT HIGHLIGHTS &amp; USPS
        </h2>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-10" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1.5px] bg-[#9B1B22]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#9B1B22] mx-3 ring-4 ring-[#9B1B22]/25"></div>
          <div className="w-16 h-[1.5px] bg-[#9B1B22]"></div>
        </div>
        
        {/* 5 Highlights Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {highlightsData.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={idx * 100}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#E8DEC8] shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_36px_rgba(65,32,17,0.22)] hover:border-[#9B1B22] transform transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-default"
              >
                {/* Modern Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FAF3E8] to-[#F5EADB] border border-[#E8DEC8] flex items-center justify-center text-[#9B1B22] mb-5 shadow-xs group-hover:scale-110 group-hover:bg-[#412011] group-hover:text-[#9B1B22] group-hover:border-[#9B1B22] transition-all duration-300">
                  <IconComponent size={30} strokeWidth={1.9} />
                </div>

                {/* Title */}
                <h3 
                  className="text-[18px] sm:text-[19px] font-bold mb-2.5 text-[#412011] tracking-tight group-hover:text-[#9B1B22] transition-colors duration-300" 
                  style={{ fontFamily: F_JOST }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#333333] text-[13.5px] sm:text-[14px] leading-[1.65]"
                  style={{ fontFamily: F_SANS }}
                >
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Highlights
