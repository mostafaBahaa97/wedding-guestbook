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
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex flex-col items-center justify-center p-4 text-center dir-rtl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 space-y-6 relative z-10 border border-rose-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="text-6xl"
        >
          🤍
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-extrabold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent"
        >
          شكرًا ليك{name ? ` يا ${name}` : ''} 🌹
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          كلامك فرّحنا جداً، ونتمنى تتبسط معانا النهارده.<br/>
          وجودك نوّر يومنا 🌸
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-4"
        >
          <p className="text-rose-600 font-semibold text-lg">
            دعواتكم لينا بالتيسير و السعادة ❤️
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/">
            <button className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 transition-all duration-300">
              العودة للصفحة الرئيسية
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}