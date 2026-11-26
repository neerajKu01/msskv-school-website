# Deployment Guide - M S S K V U M V School Website

This guide will help you deploy your modernized school website to Vercel.

## 🚀 Quick Start Deployment

### Step 1: Push Code to GitHub

1. **Initialize Git (if not already done)**
   ```bash
   cd next-app
   git init
   git add .
   git commit -m "Initial commit: Modernized school website with Next.js"
   ```

2. **Create a GitHub repository**
   - Go to github.com and create a new repository
   - Name it: `msskv-school-website`
   - Don't initialize with README (we already have one)

3. **Push your code**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/msskv-school-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up with GitHub (recommended)

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose `msskv-school-website`
   - Click "Import"

3. **Configure Project**
   - **Project Name**: msskv-school-website
   - **Root Directory**: Select `./next-app`
   - **Framework Preset**: Next.js (auto-detected)
   - Leave build settings as default

4. **Add Environment Variables**
   - Scroll down to "Environment Variables"
   - Add all variables from `.env.local`:

   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASSWORD = your-app-password
   SMTP_FROM = noreply@msskv.com
   CONTACT_TO_EMAIL = msskvumv.khwajpurmeerpur.1237@gmail.com
   NEXT_PUBLIC_SCHOOL_PHONE = 9456842609
   NEXT_PUBLIC_SCHOOL_EMAIL = msskvumv.khwajpurmeerpur.1237@gmail.com
   NEXT_PUBLIC_API_URL = https://your-domain.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - You'll get a Vercel URL like: `https://msskv-school-website.vercel.app`

## 🌐 Custom Domain Setup

### Add a Custom Domain

1. **In Vercel Dashboard**
   - Go to your project settings
   - Click "Domains"
   - Click "Add Domain"

2. **Choose Domain Option**
   - Option A: Buy domain through Vercel
   - Option B: Use existing domain (requires DNS changes)

3. **If Using Existing Domain**
   - Add nameservers or CNAME records as shown by Vercel
   - Wait 24-48 hours for DNS propagation
   - Verify domain in Vercel

4. **Example for GoDaddy/Hostinger**
   - Set nameservers to:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

## 📧 Gmail Setup for Contact Form

### Generate App Password

1. **Enable 2-Factor Authentication**
   - Go to https://myaccount.google.com/security
   - Scroll to "2-Step Verification"
   - Follow setup process

2. **Generate App Password**
   - After 2FA is enabled
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google will generate a 16-character password
   - Use this in `SMTP_PASSWORD`

3. **Test the Form**
   - After deployment
   - Visit your website
   - Fill contact form
   - Check email for submission

## 🔄 Automatic Deployments

After connecting GitHub to Vercel:
- Every push to `main` branch triggers automatic deployment
- Automatic preview deployments for pull requests
- No manual deployment needed!

## 🛠️ Troubleshooting

### Contact Form Not Sending?

1. **Check Environment Variables**
   ```bash
   # Verify in Vercel Dashboard
   - Settings → Environment Variables
   - Confirm all SMTP variables are set
   ```

2. **Gmail Authentication Issues**
   ```bash
   # Make sure:
   - 2FA is enabled
   - App password is used (not regular password)
   - App password has no spaces
   ```

3. **Test Locally First**
   ```bash
   cd next-app
   npm run dev
   # Try contact form at http://localhost:3000/contact
   ```

### Deployment Fails?

1. **Check Build Logs**
   - In Vercel, click on failed deployment
   - View build logs at the bottom
   - Look for error messages

2. **Common Issues**
   - Missing dependencies → Run `npm install`
   - TypeScript errors → Check console warnings
   - Env variables not set → Add in Vercel dashboard

3. **Redeploy**
   - Push a new commit to trigger redeploy
   - Or use "Redeploy" button in Vercel

## 📊 Monitoring & Analytics

### Setup Vercel Analytics

1. **In Vercel Dashboard**
   - Go to Settings → Analytics
   - Enable Web Analytics
   - View real-time traffic

### Monitor Performance

- Use Vercel's built-in performance dashboard
- Check Core Web Vitals
- View deployment logs

## 🔐 Security Best Practices

1. **Keep Secrets Safe**
   - Never commit `.env.local` to GitHub
   - Use Vercel environment variables only
   - Rotate passwords regularly

2. **Enable HTTPS**
   - Automatic with Vercel
   - All traffic is encrypted

3. **Regular Updates**
   - Keep dependencies updated
   - Run `npm update` regularly
   - Check for security patches

## 📝 Post-Deployment Checklist

- [ ] Website loads at custom domain
- [ ] Contact form sends emails
- [ ] Mobile responsive on all devices
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Animations smooth on all browsers
- [ ] SEO meta tags present
- [ ] No console errors
- [ ] Google Analytics added (optional)

## 🎯 Next Steps

### Enhance Your Website

1. **Add Google Analytics**
   ```bash
   # Install analytics
   npm install @vercel/analytics @vercel/web-vitals
   ```

2. **Add Student Portal** (Future)
   - Database integration (Firebase/PostgreSQL)
   - Authentication system
   - Student dashboard

3. **Online Admission**
   - Form with file upload
   - Database to store applications
   - Admin dashboard

4. **Email Newsletter**
   - Subscribe form
   - Regular updates to parents

## 📞 Support

For deployment issues:
- Check Vercel docs: https://vercel.com/docs
- Contact Vercel support in dashboard
- Check GitHub issues

## 🎉 Congratulations!

Your school website is now live and accessible to everyone!

Share your website with:
- Parents and students
- School staff
- Social media
- Admission inquiries

---

**Website URL**: `https://your-domain.vercel.app`  
**Deployment Platform**: Vercel  
**Next.js Version**: 14  
**Node.js**: 18+
