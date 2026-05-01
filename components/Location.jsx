'use client'
import React, { useState } from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationCategories = [
  {
    title: 'Commute',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    items: [
      { name: 'DLF 2', time: '0.63 Km' },
      { name: 'Ecospace Bus Stop', time: '0.75 Km' },
      { name: 'Ecospace', time: '0.76 Km' },
    ],
  },
  {
    title: 'Healthcare',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    items: [
      { name: 'Glocal Healthcare Systems', time: '0.86 Km' },
      { name: 'Tata Medical Center (Cancer Hospital)', time: '1.18 Km' },
      { name: 'Tata Medical Center', time: '1.26 Km' },
      { name: 'Sankara Nethralaya Rajarhat', time: '1.31 Km' },
      { name: 'EKO PET-CT & CYCLOTRONE PROJECT', time: '1.45 Km' },
    ],
  },
  {
    title: 'Education',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    items: [
      { name: 'Shemrock Whizkids', time: '1.00 Km' },
      { name: 'Bodhicharya Senior Secondary School', time: '1.21 Km' },
      { name: 'Narayana School Kolkata', time: '1.37 Km' },
    ],
  },
  {
    title: 'Shopping',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    items: [
      { name: 'SPARSH', time: '0.46 Km' },
      { name: 'Kajaris Kitchen', time: '0.52 Km' },
      { name: 'Only Alibaba New Town', time: '0.53 Km' },
      { name: 'Centrus Mall, Tata Housing', time: '0.74 Km' },
      { name: 'Cafe Coffee Day (CCD)', time: '0.82 Km' },
    ],
  },
]

const Location = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>Action Area 1, Newtown, Kolkata</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-gold)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              overflow: 'hidden',
            }}>
              {locationCategories.map((cat, ci) => {
                const isOpen = openIndex === ci
                return (
                  <div key={ci} style={{ borderBottom: ci < locationCategories.length - 1 ? '1px solid #f0f0f0' : 'none' }}>

                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : ci)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        background: isOpen
                          ? 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'
                          : '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.25s ease',
                        borderLeft: isOpen ? '4px solid var(--color-gold)' : '4px solid transparent',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: isOpen ? 'var(--color-gold)' : '#9ca3af', transition: 'color 0.25s' }}>
                          {cat.icon}
                        </span>
                        <span style={{
                          fontFamily: F_JOST, fontSize: '13px', fontWeight: '800',
                          color: isOpen ? '#fff' : '#374151',
                          textTransform: 'uppercase', letterSpacing: '0.06em',
                          transition: 'color 0.25s',
                        }}>
                          {cat.title}
                        </span>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isOpen ? 'var(--color-gold)' : '#9ca3af'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease, stroke 0.25s' }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Accordion Body */}
                    <div style={{
                      maxHeight: isOpen ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                    }}>
                      <div style={{ padding: '4px 20px 12px' }}>
                        {cat.items.map((item, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: i < cat.items.length - 1 ? '1px solid #f8f8f8' : 'none',
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{
                                width: '7px', height: '7px', borderRadius: '50%',
                                background: 'var(--color-gold)', flexShrink: 0,
                              }} />
                              <span style={{
                                fontSize: '13.5px', color: '#4b5563', fontWeight: '500',
                                fontFamily: F_SANS, letterSpacing: '0.01em',
                              }}>{item.name}</span>
                            </div>
                            <span style={{
                              fontSize: '13px', color: 'var(--color-dark)', fontWeight: '800',
                              fontFamily: F_JOST, whiteSpace: 'nowrap', marginLeft: '10px',
                            }}>{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-gold)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9458481931247!2d88.46165347530075!3d22.581128579485707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b04600bf99%3A0x10dffe9f070054e0!2sTOWN%20SQUARE%20-%20Srijan%20Realty!5e0!3m2!1sen!2sin!4v1776667137738!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Action Area 1, Newtown, Kolkata
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
