'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const GOLD = 'var(--color-gold)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const slides = [heroImages.banner, heroImages.banner2]

const BRAND = 'var(--color-primary)'
const BRAND_DARK = 'var(--color-primary-dark)'

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="!pt-[82px] !pb-0 bg-[var(--color-bg)]">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT — Image Carousel */}
        <div className="w-full lg:w-[62%] relative h-[250px] sm:h-[350px] lg:h-auto lg:min-h-[calc(100vh-82px)]"
          data-aos="fade-right">

          {/* Carousel — outline draws 10px inside, not clipped by overflow-hidden */}
          <div className="overflow-hidden" style={{ position: 'absolute', inset: 0, border: '5px solid var(--color-gold)', zIndex: 1, borderRadius: '10px' }}>
            <div
              className="flex h-full"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${(current * 100) / slides.length}%)`,
                transition: 'transform 0.7s cubic-bezier(0.77,0,0.18,1)',
                height: '100%',
              }}
            >
              {slides.map((src, idx) => (
                <div key={idx} style={{ width: `${100 / slides.length}%`, flexShrink: 0, position: 'relative' }}>
                  <Image src={src} alt={`Vinayak New Launch ${idx + 1}`} fill className="object-cover"
                    priority={idx === 0} sizes="(max-width: 1024px) 100vw, 62vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)}
                style={{
                  width: current === idx ? '36px' : '10px', height: '4px', background: GOLD,
                  opacity: current === idx ? 1 : 0.5, border: 'none',
                  borderRadius: '2px', cursor: 'pointer', transition: 'all 0.4s ease'
                }} />
            ))}
          </div>
        </div>

        {/* RIGHT — Premium Info Card */}
        <div className="w-full lg:w-[38%] flex flex-col bg-white border-l border-gray-100 shadow-[-8px_0_32px_rgba(0,0,0,0.06)]" data-aos="fade-left">

          {/* ── Top Banner ── */}
          <div style={{
            background: `linear-gradient(135deg, ${BRAND_DARK} 0%, ${BRAND} 100%)`,
            color: '#fff',
            textAlign: 'center',
            padding: '11px 16px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* shimmer line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            }} />
            <p style={{
              fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
              letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'rgba(255,255,255,0.6)' }} />
              Unlock Elite Ownership Advantages
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'rgba(255,255,255,0.6)' }} />
            </p>
          </div>

          <div className="p-4 flex flex-col gap-3">
            {/* ── New Launch Badge ── */}
            <div className="flex justify-center -mt-2 mb-1" data-aos="zoom-in" data-aos-delay="400">
              <span style={{
                background: 'var(--color-gold-bg)',
                color: 'var(--color-gold)',
                padding: '4px 14px',
                borderRadius: '50px',
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: '1px solid var(--color-gold-light)',
                boxShadow: '0 2px 8px rgba(181,135,40,0.12)',
                fontFamily: F_JOST
              }}>
                New Launch
              </span>
            </div>

            {/* ── Project Identity ── */}
            <div style={{ textAlign: 'center', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
              <h1 style={{
                fontFamily: F_JOST, fontWeight: '800', fontSize: '24px',
                color: 'var(--color-dark)', lineHeight: 1.2, margin: '0 0 6px',
                letterSpacing: '-0.01em'
              }}
                data-aos="fade-up" data-aos-delay="200">
                Vinayak New Launch
              </h1>
              <p style={{
                fontFamily: F_SANS, fontSize: '12px', color: '#6b7280', margin: '0 0 8px',
                letterSpacing: '0.01em', lineHeight: 1.5
              }}
                data-aos="fade-up" data-aos-delay="280">
                Configuration: 2 & 3 BHK · New Town, Kolkata
              </p>
              {/* ── Google Rating ── */}
              {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                data-aos="fade-up" data-aos-delay="320">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4" />
                  <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">G</text>
                </svg>
                <span style={{ display: 'flex', gap: '2px' }}>
                  {[1, 2, 3, 4].map(s => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC04"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                  <svg width="12" height="12" viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stopColor="#FBBC04" /><stop offset="50%" stopColor="#e5e7eb" /></linearGradient></defs><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half)" /></svg>
                </span>
                <span style={{ fontFamily: F_SANS, fontSize: '12px', color: '#374151', fontWeight: '700' }}>4.7</span>
                <span style={{ fontFamily: F_SANS, fontSize: '11px', color: '#9ca3af' }}>Stars 83 Reviews</span>
              </div> */}
            </div>

            {/* ── Project Specs ── */}
            <div style={{
              background: 'var(--color-gold-bg)',
              borderRadius: '12px',
              border: '1px solid var(--color-gold-light)',
              padding: '12px 8px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
            }} data-aos="fade-up" data-aos-delay="360">
              {[
                { value: '2', label: 'Acres Total Area' },
                { value: '50+', label: 'Amenities' },
                { value: '186', label: 'Total Apartments' },
                { value: '8.1K', label: 'Avg. Price/sq.ft' },
              ].map((s, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '8px 6px',
                  borderRight: i % 2 === 0 ? '1px solid var(--color-gold-light)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--color-gold-light)' : 'none',
                }}>
                  <p style={{
                    fontFamily: F_JOST, fontSize: '24px', fontWeight: '800',
                    color: 'var(--color-dark)', margin: '0 0 2px', lineHeight: 1,
                  }}>{s.value}</p>
                  <p style={{
                    fontFamily: F_SANS, fontSize: '9px', color: 'var(--color-gold-dark)',
                    margin: 0, textTransform: 'uppercase', letterSpacing: '0.07em', lineHeight: 1.35,
                    fontWeight: '700',
                  }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* ── Privileged Launch Advantages ── */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)',
              borderRadius: '10px',
              padding: '8px 14px',
              border: '2px dashed rgba(255,255,255,0.45)',
              boxShadow: '0 6px 20px var(--color-shadow-inner)',
            }} data-aos="fade-up" data-aos-delay="400">
              <p style={{
                fontFamily: F_JOST, fontSize: '10px', color: 'rgba(255,255,255,0.75)',
                margin: '0 0 4px', fontWeight: '700', letterSpacing: '0.14em',
                textTransform: 'uppercase', textAlign: 'center',
              }}>
                Privileged Launch Advantages
              </p>
              {[
                'Premium 2 & 3 BHK Residences',
                'Price Starting @ ₹ 72 Lacs*',
                'Possession: July 2029',
                'Total Launched: 186 Apartments',
              ].map((item, i, arr) => (
                <div key={i}>
                  <p style={{
                    fontFamily: F_JOST, fontSize: '12px', color: '#fff',
                    margin: 0, fontWeight: '600', letterSpacing: '0.01em',
                    padding: '5px 0', textAlign: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  }}>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', flexShrink: 0, display: 'inline-block' }} />
                    {item}
                  </p>
                  {i < arr.length - 1 && (
                    <div style={{ borderTop: '1px dashed rgba(255,255,255,0.25)' }} />
                  )}
                </div>
              ))}
              <p style={{
                fontFamily: F_JOST, fontSize: '10px', color: 'rgba(255,255,255,0.6)',
                margin: '6px 0 2px', fontWeight: '600', letterSpacing: '0.08em',
                textAlign: 'center', textTransform: 'uppercase',
              }}>
                Reserved for a select few · An exclusive release with limited availability
              </p>
            </div>

            {/* ── BHK & Pricing ── */}
            <div style={{
              textAlign: 'center',
              background: 'var(--color-bg-muted)',
              borderRadius: '10px',
              padding: '12px 16px',
            }} data-aos="fade-up" data-aos-delay="480">
              <p style={{
                fontFamily: F_SANS, fontSize: '13px', color: '#374151',
                margin: '0 0 2px', fontWeight: '600',
              }}>
                2 & 3 BHK Residences
              </p>
              <p style={{
                fontFamily: F_SANS, fontSize: '11px', color: '#9ca3af',
                margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600'
              }}>
                Price Starting At
              </p>
              <span className="blink-price" style={{
                fontSize: '28px', fontWeight: '800',
                color: 'var(--color-gold)',
                fontFamily: F_JOST, lineHeight: 1, display: 'block',
              }}>
                ₹ 72 Lacs*
              </span>
            </div>

            {/* ── CTA Button ── */}
            <button onClick={() => setIsOpen(true)}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '14px', letterSpacing: '0.1em' }}
              data-aos="fade-up" data-aos-delay="560">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Brochure
            </button>

            {/* ── Trust Badges ── */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              borderTop: '1px solid #f0f0f0',
              paddingTop: '10px', gap: '4px',
            }}>
              {[
                { icon: '🎧', label: 'Instant Call Back' },
                { icon: '🚗', label: 'Free Site Visit' },
                { icon: '🏷️', label: 'Best Price Assurance' },
              ].map((b, i) => (
                <div key={i} style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '3px',
                  padding: '8px 4px',
                  borderRadius: '10px',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                }}>
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>{b.icon}</span>
                  <span style={{
                    fontSize: '10px', color: '#6b7280', fontFamily: F_SANS,
                    fontWeight: '600', textAlign: 'center', letterSpacing: '0.02em'
                  }}>{b.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
