'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../utils/supabase'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('memories').insert([{ name: name || 'ضيف مجهول', message }])
    if (error) {
      alert('حدث خطأ، حاول مرة أخرى')
      setLoading(false)
      return
    }
    router.push(`/thank-you?name=${encodeURIComponent(name)}`)
  }

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
          --border: rgba(184, 151, 106, 0.25);
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
          border: 1px solid var(--border);
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

        /* Corner ornaments */
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

        .corner-tl, .corner-br {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: var(--gold);
          border-style: solid;
          opacity: 0.5;
        }
        .corner-tl { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
        .corner-br { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

        .bismillah {
          text-align: center;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1.2rem;
          letter-spacing: 0.2em;
          color: var(--gold);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
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

        .quote-text {
          text-align: center;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1.2rem;
          line-height: 2;
          color: var(--charcoal);
          font-weight: 400;
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .names-block {
          text-align: center;
          margin: 1.5rem 0 1rem;
        }

        .names-heading {
          font-family: 'Playfair Display', serif;
          font-size: 2.6rem;
          font-weight: 400;
          font-style: italic;
          color: var(--charcoal);
          letter-spacing: 0.02em;
          line-height: 1.1;
        }

        .names-arabic {
          display: block;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--charcoal);
          letter-spacing: 0.1em;
          margin-top: 0.15rem;
          font-style: normal;
        }

        .date-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--gold-light);
          color: var(--gold-dark);
          padding: 0.35rem 1.1rem;
          border-radius: 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          margin-top: 0.75rem;
        }

        .photo-ring {
          width: 130px;
          height: 130px;
          margin: 1.5rem auto;
          position: relative;
        }

        .photo-ring-outer {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid var(--gold-light);
          opacity: 0.6;
        }

        .photo-ring-inner {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 1px solid var(--rose-light);
          opacity: 0.7;
        }

        .photo-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--cream);
          box-shadow: 0 4px 20px rgba(44,36,32,0.15);
        }

        .photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .form-section {
          margin-top: 1.5rem;
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .field-label {
          display: block;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 0.68rem;
          color: var(--gold-dark);
          margin-bottom: 0.45rem;
          letter-spacing: 0.12em;
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .field-input,
        .field-textarea {
          width: 100%;
          background: var(--ivory);
          border: 1px solid rgba(184,151,106,0.3);
          border-radius: 1px;
          padding: 0.75rem 1rem;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 0.9rem;
          color: var(--charcoal);
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
          direction: rtl;
          box-shadow: inset 0 1px 3px rgba(44,36,32,0.04);
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: var(--gold-light);
          font-size: 0.85rem;
        }

        .field-input:focus,
        .field-textarea:focus {
          border-color: var(--gold);
          background: #fff;
          box-shadow: inset 0 1px 3px rgba(44,36,32,0.04), 0 0 0 3px rgba(184,151,106,0.08);
        }

        .field-textarea {
          height: 110px;
          resize: none;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-dark) 100%);
          background-size: 200% 200%;
          color: #faf6f0;
          font-family: 'Noto Naskh Arabic', serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          padding: 0.95rem 2rem;
          border: none;
          border-radius: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 12px rgba(138,106,69,0.3), 0 1px 0 rgba(255,255,255,0.1) inset;
          position: relative;
          overflow: hidden;
          margin-top: 0.25rem;
        }

        .submit-btn:hover:not(:disabled) {
          background-position: right center;
          box-shadow: 0 4px 20px rgba(138,106,69,0.4);
          transform: translateY(-1px);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .photo-float {
          animation: float 4s ease-in-out infinite;
        }

        @media (max-width: 480px) {
          .card { padding: 2rem 1.5rem 1.5rem; }
          .names-heading { font-size: 2.1rem; }
        }
      `}</style>

      <div className="page-bg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="card"
        >
          {/* Corner ornaments */}
          <div className="corner-tl" />
          <div className="corner-br" />

          {/* Bismillah */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bismillah"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>

          {/* Top divider */}
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-ornament">✦</span>
            <div className="divider-line" />
          </div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="quote-text"
          >
            فتلاقت الأرواحُ بعد شتاتِها
            وحنَا علينا العُمرُ وابتسمَ القدر..
            </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="quote-text"
            style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}
          >
            "اجْعَلُوا لَنَا نَصِيباً مِنْ دُعَائِكُمْ" 🤍
          </motion.p>

          <div className="divider" style={{ margin: '1.25rem 0' }}>
            <div className="divider-line" />
            <span className="divider-ornament">❧</span>
            <div className="divider-line" />
          </div>

          {/* Names & Date */}
          <div className="names-block">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <p className="names-arabic" style={{ fontSize: '2.75rem' }}>
                محمد <span className='names-heading' style={{ color: 'var(--gold)', fontWeight: 300 }}>&</span> ندى
              </p>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="date-pill" style={{ fontSize: '1.75rem' }}>
                <span style={{ color: 'var(--rose)', fontSize: '1rem' }}>✦</span>
                6 . 4 . 2026
                <span style={{ color: 'var(--rose)', fontSize: '1rem' }}>✦</span>
              </span>
            </motion.div>
          </div>

          {/* Photo — keep original float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="photo-ring"
          >
            <div className="photo-ring-outer" />
            <div className="photo-ring-inner" />
            <div className="photo-circle photo-float">
              <img src="/couple2.png" alt="Mohamed & Nada" />
            </div>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form-section">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="field-label">الاسم (اختياري)</label>
              <input
                type="text"
                className="field-input"
                placeholder="اسمك المنور.."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label className="field-label">رسالتك للعروسين</label>
              <textarea
                className="field-textarea"
                placeholder="اكتب كلمة حلوة تفرحنا.. 🤍"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button
                type="submit"
                className="submit-btn"
                disabled={loading || !message}
              >
                {loading ? '✨ جاري الحفظ...' : '💌 سيبلنا ذكرى'}
              </button>
            </motion.div>
          </form>
        </motion.div>
         <div className="fixed bottom-4 left-0 right-0 text-center">
          <p className={`text-sm text-gray-500 opacity-70`}>
            Made with 🤍 by <a href="https://cv-kappa-khaki-64.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Mostafa Bahaa
            </a>
          </p>
        </div>
      </div>
     
    </>
  )
}