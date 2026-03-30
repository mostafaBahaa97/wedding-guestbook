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
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center p-4 text-center dir-rtl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-rose-100 relative z-10"
      >
        <h3 className="text-gray-400 text-sm mb-6 tracking-widest font-semibold">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 italic text-sm leading-relaxed mb-8 text-gray-700"
        >
          ​"حُبٌّ بَدَأ.. وَبِالحَلَالِ اسْتَمَر.. دَعَوْنَاكُمْ لِتَشْهَدُوا عَلَى مِيثَاقٍ غَلِيظٍ، سَعِيدٍ مُبَارَكٍ، مَحْفُوفٍ بِالمَوَدَّةِ وَالرَّحْمَةِ." ​"اجْعَلُوا لَنَا نَصِيباً مِنْ دُعَائِكُمْ، لَعَلَّ دَعْوَةً مِنْ قُلُوبِكُمْ تَفْتَحُ لَنَا أَبْوَابَ الْخَيْرِ."🤍


        </motion.p>

        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4"
          >
            محمد & ندى
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 px-6 py-2 rounded-full text-sm font-bold shadow-md"
          >
            ❤️ 6 / 4 / 2026 ❤️
          </motion.span>
        </div>

        {/* صورة العرسان مع Floating Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 overflow-hidden border-4 border-white shadow-xl ring-4 ring-rose-100 animate-float animate-pulse-glow"
        >
          <img src="/couple2.png" alt="Mohamed & Nada" className="w-full h-full object-cover" />
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5 text-right">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -2 }}
          >
            <label className="block text-xs text-gray-500 mb-2 mr-2 font-semibold uppercase tracking-wide">الاسم (اختياري)</label>
            <input
              type="text"
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-rose-200 rounded-xl p-3 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all shadow-md"
              placeholder="اسمك المنور.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
          >
            <label className="block text-xs text-gray-500 mb-2 mr-2 font-semibold uppercase tracking-wide">رسالتك للعروسين</label>
            <textarea
              className="w-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-rose-200 rounded-xl p-3 h-28 resize-none focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all shadow-md"
              placeholder="اكتب كلمة حلوة تفرحنا.. 🤍"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -3 }}
            className="w-full bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
            disabled={loading || !message}
          >
            <span className="relative z-10">{loading ? '✨ جاري الحفظ...' : '💌 سيبلنا ذكرى'}</span>
            {/* Pulse effect on button */}
            {!loading && message && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-300 to-pink-300 opacity-10"
              />
            )}
          </motion.button>
        </form>
      </motion.div>
    </main>
  )
}