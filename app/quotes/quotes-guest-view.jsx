'use client'
import { motion } from 'framer-motion'

export default function QuotesGuestView() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex items-center justify-center p-6 text-center dir-rtl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 relative z-10 border border-rose-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-6xl mb-4"
        >
          ❤️
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4"
        >
          شكراً لكل كلمة جميلة!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          كلماتكم ودعواتكم هي أجمل هدية لينا في يومنا ده. <br/> 
          فرحتنا مكملتش غير بوجودكم معانا.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-2xl font-extrabold text-transparent bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text"
        >
          محمد & ندى 💕
        </motion.div>
      </motion.div>
    </main>
  )
}
