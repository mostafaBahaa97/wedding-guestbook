import { supabase } from '../../utils/supabase'
import QuotesGuestView from './quotes-guest-view'
import AdminMemories from './admin-memories'

// السطرين دول مهمين جداً عشان فيرسيل ميعملش كاش للصفحة ويقرأ الـ URL Parameters كل مرة
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Quotes({ searchParams }) {
  // خطوة الـ await دي هي "السر" في النسخ الجديدة من Next.js
  const params = await searchParams;
  const adminKey = params.admin;

  // التحقق من كلمة السر
  const isAdmin = adminKey === 'm_n_2026_secret';

  // لو مش أدمن، اعرض صفحة الشكر للضيوف
  if (!isAdmin) {
    return <QuotesGuestView />;
  }

  // لو أدمن، ابدأ استدعاء البيانات من سوبابيز
  try {
    const { data: memories, error } = await supabase
      .from('memories')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center dir-rtl bg-[#faf6f0]">
          <div style={{
            backgroundColor: '#faf6f0',
            padding: '2rem',
            borderRadius: '2px',
            color: '#a06b69',
            border: '1px solid rgba(160, 107, 105, 0.25)',
            fontFamily: "'Noto Naskh Arabic', serif",
            maxWidth: '400px'
          }}>
            حدث خطأ أثناء جلب البيانات: {error.message}
          </div>
        </div>
      );
    }

    return <AdminMemories memories={memories} />;
  } catch (err) {
    return (
      <div className="min-h-screen flex items-center justify-center dir-rtl" style={{ backgroundColor: '#faf6f0' }}>
        <div style={{
          backgroundColor: '#faf6f0',
          padding: '2rem',
          borderRadius: '2px',
          color: '#a06b69',
          border: '1px solid rgba(160, 107, 105, 0.25)',
          fontFamily: "'Noto Naskh Arabic', serif",
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          خطأ غير متوقع: {err.message}
        </div>
      </div>
    );
  }
}