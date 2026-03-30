# Deployment Guide

Complete step-by-step guide to deploy your Wedding Guestbook to GitHub and Vercel.

## Table of Contents

1. [GitHub Setup](#github-setup)
2. [Vercel Deployment](#vercel-deployment)
3. [Environment Variables](#environment-variables)
4. [CI/CD Automation](#cicd-automation)
5. [Custom Domain](#custom-domain)
6. [Monitoring & Maintenance](#monitoring--maintenance)

---

## GitHub Setup

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `wedding-guestbook`
3. Description: "A beautiful wedding guestbook built with Next.js"
4. Choose visibility: **Public** (recommended) or **Private**
5. Click "Create repository"

### Step 2: Initialize Git & Push Code

```bash
# Navigate to your project directory
cd wedding-guestbook

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: wedding guestbook with Supabase"

# Add remote origin (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/wedding-guestbook.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Verify .gitignore

The `.gitignore` file should already exclude:
- `node_modules/`
- `.env*` (keep environment variables private)
- `.next/`
- `.vercel/`

✅ This is already configured in the project!

### Step 4: Add Collaborators (Optional)

1. Go to your repository settings
2. Click "Collaborators" in left sidebar
3. Click "Add people"
4. Enter GitHub usernames or email

---

## Vercel Deployment

### Option 1: Deploy with Vercel Dashboard (Recommended)

#### Step 1: Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Sign In"
3. Choose "GitHub" for authentication
4. Authorize Vercel to access your GitHub account

#### Step 2: Import Project

1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Find and select `wedding-guestbook`
4. Click "Import"

#### Step 3: Configure Project

1. **Framework**: Next.js (should be auto-detected)
2. **Root Directory**: `./` (leave default)
3. **Build Command**: `npm run build` (auto-detected)
4. **Output Directory**: `.next` (auto-detected)

#### Step 4: Add Environment Variables

1. Scroll down to "Environment Variables"
2. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL = your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
```

3. Select which environments to apply to:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

#### Step 5: Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 2-3 minutes)
3. Once complete, you'll get a live URL: `https://your-project-name.vercel.app`

---

### Option 2: Deploy with Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompt to authenticate with GitHub.

#### Step 3: Set Environment Variables

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Enter your Supabase URL when prompted

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Enter your Supabase anon key when prompted
```

#### Step 4: Deploy

```bash
vercel --prod
```

---

## Environment Variables

### Getting Supabase Credentials

1. Log in to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Local Development

Create `.env.local` in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anonymous_key_here
```

### Production (Vercel)

Set via Vercel Dashboard:

1. Go to your project on [vercel.com](https://vercel.com)
2. Click "Settings"
3. Navigate to "Environment Variables"
4. Add your variables for Production environment

### Testing Variables

Test that your variables are accessible:

```bash
# This should output your Supabase URL
echo $NEXT_PUBLIC_SUPABASE_URL
```

---

## CI/CD Automation

Your project includes GitHub Actions for automated testing and deployment.

### What It Does

- **On every push/PR**: Runs linting and build checks
- **On main branch push**: Auto-deploys to Vercel production

### Setup CI/CD

#### Step 1: Get Vercel Tokens

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Generate a new token (copy it immediately)

#### Step 2: Get Vercel IDs

```bash
# Install Vercel CLI if not already done
npm i -g vercel

# This will output your ORG_ID and PROJECT_ID
vercel link
```

Or from Vercel Dashboard:
1. Go to your project settings
2. Copy Project ID from header

#### Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings"
3. Click "Secrets and variables" → "Actions"
4. Click "New repository secret"

Add these secrets:

| Secret Name | Value |
|------------|-------|
| `VERCEL_TOKEN` | Your Vercel token from Step 1 |
| `VERCEL_ORG_ID` | Your Vercel organization ID |
| `VERCEL_PROJECT_ID` | Your Vercel project ID |

#### Step 4: Test CI/CD

1. Make a small change to your code
2. Commit and push to main branch
3. GitHub Actions will automatically:
   - Run linting
   - Build the project
   - Deploy to Vercel

Check the progress:
1. Go to "Actions" tab in your GitHub repository
2. Click the latest workflow run
3. Watch the build progress

---

## Custom Domain

### Step 1: Buy a Domain

Get a domain from:
- [GoDaddy](https://godaddy.com)
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)

### Step 2: Connect Domain to Vercel

1. Go to your Vercel project
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain name
5. Follow instructions for DNS setup

### Step 3: Update DNS Records

Add these DNS records at your domain provider:

For Vercel:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

And set apex domain (without www) to point to Vercel as needed.

---

## Monitoring & Maintenance

### Monitor Deployment

1. **Vercel Dashboard**:
   - Click your project
   - View deployment history
   - Check logs and analytics

2. **GitHub Actions**:
   - Go to "Actions" tab
   - View workflow runs
   - Check build logs

### View Analytics

1. Vercel project → Analytics
2. Monitor:
   - Page performance
   - Real user metrics
   - Core Web Vitals

### Database Backups

1. Supabase Dashboard → Backups
2. Enable automatic daily backups
3. Download manual backups before important events

### Update Dependencies

Regularly update project dependencies:

```bash
# Check for updates
npm outdated

# Update packages
npm update

# For major updates, test thoroughly before deploying
npm audit
```

### Monitoring Errors

1. **Vercel Logs**:
   - Project → "Deployments"
   - Click a deployment → "Logs"

2. **Supabase Logs**:
   - Project → "Logs"
   - Monitor database queries and errors

---

## Troubleshooting

### Build Fails on Vercel

Check the logs:
1. Vercel Dashboard → Deployments
2. Click failed deployment
3. Scroll to "Build Logs"
4. Fix the error locally and push again

Common issues:
- Missing environment variables → Add to Vercel settings
- TypeScript errors → Run `npm run build` locally to debug
- Dependencies not installed → Check `package.json`

### Environment Variables Not Loading

```bash
# Verify variables are set
vercel env ls

# Re-add variables
vercel env add VAR_NAME
```

### Database Issues

1. Check Supabase status: [status.supabase.com](https://status.supabase.com)
2. Verify credentials in `.env.local`
3. Check network access in Supabase settings

### DNS Not Working

1. Wait 24-48 hours for DNS propagation
2. Check DNS records at [dnschecker.org](https://dnschecker.org)
3. Verify records in your domain provider

---

## Going Live Checklist

Before launching to guests:

- [ ] Test on mobile devices
- [ ] Verify all forms work correctly
- [ ] Check database entries are saving
- [ ] Test admin panel (`/quotes?admin=your_secret`)
- [ ] Verify custom domain works
- [ ] Set up automated backups
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Share deployment URL with guests
- [ ] Monitor performance on deployment day

---

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Happy Deploying! 🚀**

Made with ❤️ for Mohamed & Nada's Wedding
