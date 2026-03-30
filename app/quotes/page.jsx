import { supabase } from '../../utils/supabase'
import { motion } from 'framer-motion'
import QuotesGuestView from './quotes-guest-view'

export const revalidate = 0 

export default async function Quotes({ searchParams }) {
  // الكود السري بتاعك
  const isAdmin = searchParams.admin === 'm_n_2026_secret'

  if (!isAdmin) {
    return <QuotesGuestView />
  }

  // لو أدمن.. هات البيانات
  const { data: memories } = await supabase
    .from('memories')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6 md:p-12 dir-rtl relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
          <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text border-r-4 border-rose-500 pr-4">
            لوحة ذكريات الفرح 
          </h1>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold text-rose-600 border border-rose-100"
          >
            💕 {memories?.length || 0} رسالة
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories?.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border border-rose-50 hover:border-rose-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-300 group-hover:w-2 transition-all"></div>
              
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-bold text-rose-600 mb-3 flex items-center gap-2 text-lg"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></span>
                {item.name || 'ضيف مجهول'}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-gray-700 leading-relaxed italic text-sm"
              >
                "{item.message}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400"
              >
                {new Date(item.created_at).toLocaleString('ar-EG')}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {(!memories || memories.length === 0) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">لا توجد رسائل حتى الآن 💌</p>
          </motion.div>
        )}
      </div>
    </main>
  )
}