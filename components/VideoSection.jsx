'use client'
import React from 'react'

const VideoSection = () => {
  return (
    <section className="py-12 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: 'var(--font-jost), Montserrat, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>Project Walkthrough</span>
          <h2 style={{
            fontFamily: 'var(--font-jost), Montserrat, sans-serif', fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: 0, letterSpacing: '-0.01em',
          }}>
            Experience <span style={{ color: 'var(--color-gold)' }}>The Luxury</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <span style={{
              display: 'block', width: '40px', height: '3px',
              background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
              borderRadius: '2px',
            }} />
          </div>
        </div>
        
        <div className="relative w-full overflow-hidden" style={{ borderRadius: '16px', boxShadow: '0 20px 48px rgba(155, 27, 34, 0.18)' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-auto object-cover"
            style={{ maxHeight: '80vh', border: '2px solid var(--color-gold-light)' }}
          >
            <source src="/images/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
