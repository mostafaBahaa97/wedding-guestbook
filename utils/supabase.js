import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

// اختبار بسيط للتأكد إن القيم موجودة
if (!supabaseUrl || !supabaseKey) {
  console.error("خطأ: بيانات Supabase مش موجودة في ملف .env.local")
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseKey || ''
)