# 🤍 Wedding Guestbook

A beautiful, modern wedding guestbook application built with Next.js, React, Framer Motion, and Supabase.

## ✨ Features

- 🎨 **Modern UI Design** - Gradient backgrounds, smooth animations, and mobile-optimized interface
- 🤍 **Bilingual Support** - Built-in RTL (Right-to-Left) support for Arabic
- 💬 **Guest Messages** - Guests can leave blessings and memories
- 📸 **Couple Photo** - Featured couple photo with floating animations
- 🎯 **Custom Favicon** - Branded with couple's photo
- 📱 **Mobile-First** - Fully responsive with touch-friendly animations
- 🔐 **Secure Database** - Supabase backend for secure data storage
- 🚀 **Fast & Optimized** - Built on Next.js with Turbopack for lightning-fast builds
- ⚡ **Production Ready** - GitHub Actions CI/CD pipeline included

## 🛠 Tech Stack

- **Frontend**: Next.js 16.2.1, React 19, TypeScript
- **UI/Animation**: Tailwind CSS 4, Framer Motion
- **Backend**: Supabase
- **Deployment**: Vercel, GitHub
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- GitHub account (for version control)
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/wedding-guestbook.git
cd wedding-guestbook
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
wedding-guestbook/
├── app/
│   ├── page.tsx                    # Main guestbook form
│   ├── layout.tsx                  # Root layout with metadata & favicon
│   ├── globals.css                 # Global styles & animations
│   ├── thank-you/
│   │   └── page.jsx               # Personalized thank you page
│   └── quotes/
│       ├── page.jsx               # Admin quotes dashboard
│       └── quotes-guest-view.jsx  # Guest view component
├── public/
│   └── couple2.png                # Couple photo (favicon & featured image)
├── utils/
│   └── supabase.js                # Supabase client configuration
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions CI/CD pipeline
├── vercel.json                     # Vercel deployment configuration
├── tailwind.config.js              # Tailwind CSS customization
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

## 📊 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint and check code quality |

## 🗄️ Database Setup

Create the following table in your Supabase database:

```sql
CREATE TABLE memories (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Optional: Row Level Security (RLS)

For production, enable RLS on the table:

```sql
ALTER TABLE memories ENABLE ROW LEVEL SECURITY;

-- Allow public to insert
CREATE POLICY "Allow public insert"
ON memories FOR INSERT
TO public
WITH CHECK (true);

-- Allow public to select
CREATE POLICY "Allow public select"
ON memories FOR SELECT
TO public
USING (true);
```

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main guestbook form where guests leave messages |
| `/thank-you` | Thank You | Personalized thank you confirmation page |
| `/quotes` | Guest View | Guest-facing thank you message display |
| `/quotes?admin=m_n_2026_secret` | Admin Dashboard | Admin view to see all guest messages |

## 🎨 Customization

### Update Wedding Details

Edit `app/page.tsx`:
```typescript
// Lines 56-58: Change couple names and date
"محمد & ندى"  // Change to your names
"❤️ 6 / 4 / 2026 ❤️"  // Change to your date
```

### Modify Admin Secret

Edit `app/quotes/page.jsx` (line 9):
```javascript
const isAdmin = searchParams.admin === 'your_new_secret_code'
```

### Change Colors & Theme

Edit `tailwind.config.js`:
- Modify the rose color palette
- Add custom gradients
- Adjust spacing and sizing

### Update Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Wedding | Date",
  description: "Your custom description",
  icons: {
    icon: "/your-image.png",  // Update favicon
  },
};
```

## 🚀 Deployment

### GitHub Setup

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: wedding guestbook"
```

2. Create repository on [GitHub](https://github.com/new)

3. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/wedding-guestbook.git
git branch -M main
git push -u origin main
```

### Vercel Deployment

#### Option 1: Automatic (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click "Deploy"

#### Option 2: Manual with Vercel CLI

```bash
npm install -g vercel
vercel login
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel
```

### Environment Variables

Set these in your Vercel project settings:

**Production:**
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

✅ Runs linting on every push  
✅ Builds the project to check for errors  
✅ Runs TypeScript type checking  
✅ Auto-deploys to Vercel on `main` branch push  

### Setting Up CI/CD

1. Add GitHub Secrets in your repository settings:
   - `VERCEL_TOKEN` - Get from [Vercel Account Settings](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

2. Push to main branch to trigger automated deployment

## 📱 Mobile Optimization

The app is fully optimized for mobile devices:

- **Responsive Design** - Adapts to all screen sizes
- **Touch-Friendly** - Large interactive elements
- **Mobile Animations** - Continuous floating and pulsing effects (not hover-based)
- **Fast Load Times** - Optimized images and lazy loading
- **Offline Support** - Next.js automatic static optimization

## 🔐 Security Features

- **XSS Protection** - Secure content type headers
- **Clickjacking Protection** - X-Frame-Options header
- **Referrer Policy** - Strict origin referrer policy
- **Input Validation** - Supabase client-side validation
- **Environment Variables** - Sensitive data in `.env.local`

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Page Speed**: Sub-second load times with Turbopack
- **Bundle Size**: Minimal with Tailwind CSS 4
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🐛 Troubleshooting

### Tailwind CSS not loading
- Ensure `app/globals.css` is imported in `app/layout.tsx`
- Run `npm install` to install all dependencies
- Clear `.next` folder: `rm -rf .next`

### Supabase connection error
- Check `.env.local` exists with correct credentials
- Verify Supabase project is active
- Check row-level security policies allow public access

### Animations not working on mobile
- Clear browser cache
- Check that `globals.css` has animation definitions
- Verify `animate-float` and `animate-pulse-glow` classes are applied

## 📝 License

MIT License - Feel free to customize for your wedding!

## 🙏 Credits

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animations with [Framer Motion](https://www.framer.com/motion)
- Database by [Supabase](https://supabase.com)
- Hosted on [Vercel](https://vercel.com)

---

**Made with ❤️ for Mohamed & Nada's Wedding - 6/4/2026**
