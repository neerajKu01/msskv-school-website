# Quick Start Guide - M S S K V U M V School Website

Get your modern school website up and running in 5 minutes!

## 🚀 5-Minute Setup

### 1. Navigate to Project (1 min)
```bash
cd next-app
```

### 2. Install Dependencies (2 min)
```bash
npm install
```

### 3. Configure Email (Optional, can skip for testing)
```bash
cp .env.local.example .env.local
# Edit .env.local with your email details
```

### 4. Start Development Server (1 min)
```bash
npm run dev
```

### 5. Open in Browser (1 min)
Visit: http://localhost:3000

## 📱 Test the Website

### Pages to Check
- ✅ Homepage: http://localhost:3000
- ✅ About → Principal: http://localhost:3000/about/principal
- ✅ About → Manager: http://localhost:3000/about/manager
- ✅ Teachers: http://localhost:3000/teachers
- ✅ Gallery → Library: http://localhost:3000/gallery/library
- ✅ Gallery → Sports: http://localhost:3000/gallery/sports
- ✅ Gallery → Events: http://localhost:3000/gallery/events
- ✅ Contact: http://localhost:3000/contact

### Test Contact Form
- Fill in the contact form
- Click "Send Message"
- Form validates and shows success message
- (Email sending requires SMTP configuration)

## 🎨 Customize Your Website

### Quick Customizations

#### 1. Change School Name
File: `src/components/Header.tsx` (line 31)
```typescript
M S S K V U M V
```
Change to your school name

#### 2. Update Contact Info
File: `.env.local`
```
NEXT_PUBLIC_SCHOOL_PHONE=your-phone-number
NEXT_PUBLIC_SCHOOL_EMAIL=your-email@school.com
```

#### 3. Change Colors
File: `tailwind.config.js`
```javascript
colors: {
  primary: '#1e40af',      // Blue
  secondary: '#0f766e',    // Teal
  accent: '#d97706',       // Amber
}
```

#### 4. Update Teacher List
File: `src/app/teachers/page.tsx` (line 10-30)
```typescript
const teachers = [
  { name: "Your Teacher", subject: "Subject", ... },
  // Add more teachers
]
```

## 📧 Email Setup (Optional)

### For Gmail Users

1. **Enable 2-Factor Authentication**
   - Visit: https://myaccount.google.com/security
   - Turn on 2-Step Verification

2. **Generate App Password**
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password

3. **Update .env.local**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-password
   SMTP_FROM=noreply@yourschool.com
   CONTACT_TO_EMAIL=contact@yourschool.com
   ```

## 🔨 Build & Test

### Create Production Build
```bash
npm run build
```

### Test Production Build Locally
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

## 🚀 Deploy to Vercel

### One-Click Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/msskv.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **Done!** 🎉
   - Your website is live!
   - Vercel will give you a URL
   - Custom domain can be added

## 📂 File Structure

```
next-app/
├── src/
│   ├── app/              # Pages & routes
│   │   ├── page.tsx      # Home
│   │   ├── contact/      # Contact page
│   │   ├── teachers/     # Teachers page
│   │   ├── about/        # About pages
│   │   ├── gallery/      # Gallery pages
│   │   └── api/          # API routes
│   └── components/       # Reusable components
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind config
└── next.config.js        # Next.js config
```

## 🎯 Development Workflow

### Edit & Save
1. Edit any file in `src/`
2. Save the file
3. Browser auto-refreshes (Hot Reload)
4. See changes immediately

### Add New Page
1. Create folder: `src/app/my-page/`
2. Add file: `src/app/my-page/page.tsx`
3. Write your content
4. Visit: http://localhost:3000/my-page

### Add New Component
1. Create file: `src/components/MyComponent.tsx`
2. Write your component
3. Import and use in pages

## 🐛 Troubleshooting

### Port Already in Use?
```bash
# Kill existing process or use different port
npm run dev -- -p 3001
```

### Module Not Found?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Fails?
```bash
# Check for errors
npm run build
# Fix any TypeScript errors
```

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev

## ⚡ Performance

Automatic optimizations included:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Caching
- ✅ Compression

## 🎉 You're All Set!

Your modern school website is ready to go!

**Next Steps:**
1. ✅ Customize with your school info
2. ✅ Test all pages and features
3. ✅ Set up email (optional)
4. ✅ Deploy to Vercel
5. ✅ Share with your community!

---

**Questions?** Check README.md or DEPLOYMENT_GUIDE.md for detailed information.

Happy coding! 🚀
