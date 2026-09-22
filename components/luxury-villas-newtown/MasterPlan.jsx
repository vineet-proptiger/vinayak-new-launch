'use client'
import React, { useState } from 'react'
import { masterplanImages } from '../../lib/luxury-villas-newtown/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const plans = [
  { 
    label: '3 BHK Floor Plan', 
    img: masterplanImages.bhk3,
    details: {
        superBuiltUp: '3035 Sq. Ft.'
    }
  },
  { 
    label: '4 BHK Floor Plan', 
    img: masterplanImages.bhk45,
    details: {
        superBuiltUp: '3366 Sq. Ft.'
    }
  },
]

const MasterPlan = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState('master')

  return (
    <section id="masterplan" className="relative py-20 bg-[#FDFBF7] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2
            className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-tight uppercase tracking-wider text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}
          >
            Floor Plans & Layout
          </h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-2 mb-8">
            <div className="w-16 h-[1px] bg-[#9B1B22]"></div>
            <div className="w-2 h-2 rounded-full bg-[#9B1B22] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#9B1B22]"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center items-center">
            <button 
              onClick={() => setActiveTab('master')}
              className={`px-8 py-3 text-[17px] font-medium transition-all cursor-pointer border border-[#9B1B22] ${activeTab === 'master' ? 'bg-[#9B1B22] text-white' : 'bg-transparent text-[#412011]'}`}
            >
              Master Plan
            </button>
            <button 
              onClick={() => setActiveTab('floor')}
              className={`px-8 py-3 text-[17px] font-medium transition-all cursor-pointer border border-l-0 border-[#9B1B22] ${activeTab === 'floor' ? 'bg-[#9B1B22] text-white' : 'bg-transparent text-[#412011]'}`}
            >
              Floor Plan
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-[1100px] mx-auto">
          {activeTab === 'master' && (
            <div className="w-full max-w-[820px] mx-auto bg-white rounded-md overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] p-4" data-aos="zoom-in" data-aos-duration="1000">
              <a onClick={() => setIsOpen && setIsOpen(true)} className="cursor-pointer block relative overflow-hidden group bg-[#fdfbf7]">
                <img 
                  src={masterplanImages.masterPlan} 
                  alt="Vinayak 21 Acres Villa - Master Plan" 
                  className="w-full h-auto mx-auto filter blur-[6px] group-hover:blur-[3px] transition-all duration-300" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                  <span className="bg-[#9B1B22] group-hover:bg-[#7D1218] text-white px-7 py-4 text-[14px] sm:text-[15px] leading-snug font-semibold uppercase tracking-wider text-center shadow-md transition-colors duration-300">
                    Download<br/>Master Plan
                  </span>
                </div>
              </a>
            </div>
          )}

          {activeTab === 'floor' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[760px] mx-auto">
              {plans.map((plan, idx) => (
                <div key={idx} className="bg-white rounded-md overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={idx * 100}>
                  <a onClick={() => setIsOpen && setIsOpen(true)} className="cursor-pointer block relative h-[260px] overflow-hidden group bg-[#fdfbf7] flex items-center justify-center p-4">
                    <img 
                      src={plan.img} 
                      alt={plan.label} 
                      className="w-full h-full object-contain filter blur-[6px] group-hover:blur-[3px] transition-all duration-300" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-white/20">
                      <span className="bg-[#9B1B22] group-hover:bg-[#7D1218] text-white px-5 py-3 text-[13px] leading-snug font-semibold uppercase tracking-wider text-center transition-colors duration-300">
                        Download<br/>Floor Plans
                      </span>
                    </div>
                  </a>
                  <div className="p-6 text-center border-t border-gray-100 bg-white">
                    <h4 
                      className="text-[22px] text-[#412011] font-bold mb-3"
                      style={{ fontFamily: F_JOST }}
                    >
                      {plan.label}
                    </h4>
                    <p className="text-[13px] text-gray-500 mb-1" style={{ fontFamily: F_SANS }}>
                      <span className="font-semibold text-gray-700 uppercase tracking-wider">Useable Area</span>
                    </p>
                    <div 
                      className="text-[19px] sm:text-[21px] font-extrabold text-[#412011] inline-block leading-tight tracking-tight"
                      style={{ fontFamily: F_JOST }}
                    >
                      {plan.details.superBuiltUp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MasterPlan
