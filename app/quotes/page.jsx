import { supabase } from '../../utils/supabase'
import QuotesGuestView from './quotes-guest-view'

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
        <div className="min-h-screen flex items-center justify-center dir-rtl">
          <div className="bg-red-50 p-6 rounded-lg text-red-600 border border-red-200">
            حدث خطأ أثناء جلب البيانات: {error.message}
          </div>
        </div>
      );
    }

    return (
      <main className="min-h-screen bg-[#fffafa] p-6 md:p-12 dir-rtl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-b pb-6 border-rose-100">
            <h1 className="text-3xl font-extrabold text-rose-600">
              💌 لوحة ذكريات الفرح (الأدمن)
            </h1>
            <div className="bg-white px-6 py-2 rounded-full shadow-sm text-rose-500 font-bold border border-rose-100">
               عدد الرسائل: {memories?.length || 0}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories?.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-2xl shadow-md border-r-4 border-rose-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {item.name || 'ضيف مجهول'}
                </h3>
                <p className="text-gray-600 leading-relaxed italic border-t pt-3 border-gray-50">
                  "{item.message}"
                </p>
                <div className="mt-4 text-[10px] text-gray-400">
                  {new Date(item.created_at).toLocaleString('ar-EG')}
                </div>
              </div>
            ))}
          </div>

          {memories?.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              لا توجد رسائل مسجلة بعد. 🌸
            </div>
          )}
        </div>
      </main>
    );
  } catch (err) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        خطأ غير متوقع: {err.message}
      </div>
    );
  }
}