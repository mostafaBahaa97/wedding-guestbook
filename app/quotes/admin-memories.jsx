'use client'

import { motion } from 'framer-motion'

export default function AdminMemories({ memories }) {
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
          padding: 3rem 1.5rem;
        }

        .admin-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .admin-header {
          text-align: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 2rem;
        }

        .admin-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--charcoal);
          letter-spacing: 0.02em;
          margin-bottom: 1rem;
        }

        .admin-subtitle {
          font-size: 1.1rem;
          color: var(--muted);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 1rem 0;
          justify-content: center;
        }

        .divider-line {
          flex: 0 0 40px;
          height: 1px;
          background: linear-gradient(to left, transparent, var(--gold-light), transparent);
        }

        .divider-ornament {
          color: var(--gold);
          font-size: 0.65rem;
          opacity: 0.7;
        }

        .memory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .memory-card {
          background: rgba(255, 253, 248, 0.97);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 1.5rem;
          box-shadow:
            0 2px 4px rgba(44,36,32,0.04),
            0 8px 16px rgba(44,36,32,0.06);
          transition: all 0.3s ease;
          border-right: 3px solid var(--rose);
          position: relative;
          overflow: hidden;
        }

        .memory-card:hover {
          box-shadow:
            0 4px 8px rgba(44,36,32,0.08),
            0 16px 32px rgba(44,36,32,0.12);
          transform: translateY(-2px);
        }

        .memory-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to left, transparent, var(--gold-light), transparent);
        }

        .memory-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 0.75rem;
          display: block;
        }

        .memory-divider {
          height: 1px;
          background: linear-gradient(to left, transparent, var(--gold-light), transparent);
          margin: 0.75rem 0;
        }

        .memory-message {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--charcoal);
          font-style: italic;
          margin-bottom: 0.75rem;
        }

        .memory-date {
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.05em;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--muted);
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .admin-title { font-size: 1.8rem; }
          .memory-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-bg">
        <div className="admin-container">
          <div className="admin-header">
            <h1 className="admin-title">💌 لوحة ذكريات الفرح</h1>
            <div className="divider">
              <div className="divider-line" />
              <span className="divider-ornament">✦</span>
              <div className="divider-line" />
            </div>
            <p className="admin-subtitle">
              عدد الرسائل: {memories?.length || 0}
            </p>
          </div>

          {memories?.length > 0 ? (
            <div className="memory-grid">
              {memories?.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="memory-card"
                >
                  <span className="memory-name">
                    {item.name || 'ضيف مجهول'}
                  </span>
                  <div className="memory-divider" />
                  <p className="memory-message">
                    "{item.message}"
                  </p>
                  <div className="memory-date">
                    {new Date(item.created_at).toLocaleString('ar-EG')}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              لا توجد رسائل مسجلة بعد. 🌸
            </div>
          )}
        </div>
      </div>
    </>
  )
}
