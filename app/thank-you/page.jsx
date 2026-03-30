'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ThankYou() {
  const [name, setName] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const queryName = params.get('name')
    if (queryName) setName(queryName)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        :root {
          --ivory: #faf6f0;
          --cream: #f5ede0;
          --gold: #b8976a;
          --gold-light: #d4b896;
          --gold-dark: #8a6a45;
          --rose: #c9908e;
          --rose-light: #e8c4c2;
          --rose-dark: #a06b69;
          --charcoal: #2c2420;
          --muted: #8a7a74;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: var(--ivory);
          font-family: 'Noto Naskh Arabic', serif;
          direction: rtl;
        }

        .page-bg {
          min-height: 100vh;
          background-color: var(--ivory);
          background-image:
            radial-gradient(ellipse 80% 60% at 20% 10%, rgba(201,144,142,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 90%, rgba(184,151,106,0.10) 0%, transparent 55%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8976a' fill-opacity='0.035'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .card {
          max-width: 420px;
          width: 100%;
          background: rgba(255, 253, 248, 0.97);
          border: 1px solid rgba(184, 151, 106, 0.25);
          border-radius: 2px;
          padding: 2.5rem 2rem 2rem;
          box-shadow:
            0 2px 4px rgba(44,36,32,0.04),
            0 8px 32px rgba(44,36,32,0.08),
            0 32px 64px rgba(44,36,32,0.06),
            inset 0 1px 0 rgba(255,255,255,0.9);
          position: relative;
          overflow: hidden;
        }

        .card::before,
        .card::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: var(--gold);
          border-style: solid;
          opacity: 0.5;
        }
        .card::before {
          top: 12px; right: 12px;
          border-width: 1px 1px 0 0;
        }
        .card::after {
          bottom: 12px; left: 12px;
          border-width: 0 0 1px 1px;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 1.25rem 0;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to left, transparent, var(--gold-light), transparent);
        }
        .divider-ornament {
          color: var(--gold);
          font-size: 0.65rem;
          opacity: 0.7;
        }

        .title-text {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 400;
          color: var(--charcoal);
          letter-spacing: 0.02em;
          line-height: 1.1;
          margin-bottom: 1rem;
          font-style: italic;
        }

        .subtitle-text {
          text-align: center;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--muted);
          font-weight: 400;
        }

        .message-icon {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .dua-box {
          background: transparent;
          border: 1px solid var(--gold-light);
          padding: 1.25rem;
          border-radius: 2px;
          margin: 1.25rem 0;
          text-align: center;
        }

        .dua-text {
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 0.95rem;
          color: var(--charcoal);
          line-height: 1.8;
          font-weight: 500;
        }

        .button-container {
          margin-top: 1.5rem;
        }

        .home-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-dark) 100%);
          background-size: 200% 200%;
          color: #faf6f0;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(138,106,69,0.3), 0 1px 0 rgba(255,255,255,0.1) inset;
          position: relative;
          overflow: hidden;
        }

        .home-btn:hover {
          background-position: right center;
          box-shadow: 0 4px 20px rgba(138,106,69,0.4);
          transform: translateY(-1px);
        }

        .home-btn:active {
          transform: translateY(0);
        }

        .home-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        @media (max-width: 480px) {
          .card { padding: 2rem 1.5rem 1.5rem; }
          .title-text { font-size: 1.8rem; }
        }
      `}</style>

      <div className="page-bg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="card"
        >
          <div className="card::before" />
          <div className="card::after" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="message-icon"
          >
            🤍
          </motion.div>

          <div className="divider">
            <div className="divider-line" />
            <span className="divider-ornament">✦</span>
            <div className="divider-line" />
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="title-text"
          >
            شكرًا لَك{name ? ` يا ${name}` : ''}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="subtitle-text"
          >
            كلماتك ودعاؤك فرّح قلبينا جداً.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="subtitle-text"
            style={{ marginTop: '0.75rem' }}
          >
            وجودك نوّر يومنا الجميل
          </motion.p>

          <div className="divider" style={{ margin: '1.25rem 0' }}>
            <div className="divider-line" />
            <span className="divider-ornament">❧</span>
            <div className="divider-line" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="dua-box"
          >
            <p className="dua-text">
              دعواتكم لينا بالتيسير والسعادة والحفظ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ textAlign: 'center', marginTop: '1rem' }}
          >
            <p style={{ 
              fontFamily: "'Noto Naskh Arabic', serif",
              fontSize: '1.2rem',
              color: 'var(--charcoal)',
              fontWeight: '600',
              letterSpacing: '0.05em'
            }}>
              محمد & ندى 💕
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="button-container"
          >
            <Link href="/">
              <button className="home-btn">
                العودة للصفحة الرئيسية
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}