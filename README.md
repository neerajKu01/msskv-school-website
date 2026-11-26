# M S S K V U M V - School Website

A modern, responsive school website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Stack**: Next.js 14 (App Router), React 18, Tailwind CSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion for engaging user experience
- **Contact Form**: Functional contact form with email notifications (Nodemailer)
- **SEO Optimized**: Metadata, structured data, and performance optimizations
- **Fast Performance**: Image optimization, code splitting, and lazy loading
- **Easy Deployment**: Ready for Vercel deployment

## 📋 Pages

- **Home** - Landing page with hero section, features, and facilities
- **About** - Principal's message and Manager's message
- **Teachers** - Faculty directory with detailed information
- **Gallery** - Library, Sports Ground, and Events galleries
- **Contact** - Contact form with email integration

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: React Icons, Lucide React
- **Email**: Nodemailer
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone or navigate to the project**
```bash
cd next-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your email configuration:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@msskv.com
CONTACT_TO_EMAIL=msskvumv.khwajpurmeerpur.1237@gmail.com
NEXT_PUBLIC_SCHOOL_PHONE=9456842609
NEXT_PUBLIC_SCHOOL_EMAIL=msskvumv.khwajpurmeerpur.1237@gmail.com
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 🔧 Configuration

### Email Setup (Gmail Example)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `SMTP_PASSWORD`

### Environment Variables

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | Email server host |
| `SMTP_PORT` | Email server port |
| `SMTP_USER` | Email username |
| `SMTP_PASSWORD` | Email password/app-specific password |
| `SMTP_FROM` | Sender email address |
| `CONTACT_TO_EMAIL` | School's email to receive contact forms |
| `NEXT_PUBLIC_SCHOOL_PHONE` | School contact number |
| `NEXT_PUBLIC_SCHOOL_EMAIL` | School email address |

## 📂 Project Structure

```
next-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── about/              # About pages
│   │   ├── contact/            # Contact page
│   │   ├── gallery/            # Gallery pages
│   │   ├── teachers/           # Teachers page
│   │   └── api/
│   │       └── contact/        # Contact form API
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Footer
│       └── pages/              # Page components
├── public/                     # Static assets
├── .env.local                  # Environment variables (not committed)
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Dependencies
```

## 🚀 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Adding New Pages

1. Create a new folder under `src/app/`
2. Add a `page.tsx` file
3. Next.js will automatically route it

Example:
```
src/app/news/page.tsx → /news
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',      // Blue
      secondary: '#0f766e',    // Teal
      accent: '#d97706',       // Amber
    },
  },
}
```

### Content
- School name and contact info: Update in components and `.env.local`
- Teacher list: Edit `src/app/teachers/page.tsx`
- Facilities: Edit `src/components/pages/Facilities.tsx`

## 📧 Contact Form

The contact form:
- Collects: Name, Email, Phone, Subject, Message
- Sends email to school with submission details
- Sends confirmation email to user
- Uses Nodemailer with SMTP

## 🌐 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Vercel will automatically detect Next.js and deploy
```

### Environment Variables on Vercel
1. Go to Vercel Project Settings → Environment Variables
2. Add all variables from `.env.local`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ⚡ Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimized
- **Image Optimization**: Automatic with Next.js Image
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- Environment variables protected (never commit `.env.local`)
- Input validation on contact form
- Email validation
- CORS headers properly configured

## 📝 License

This project is for educational purposes.

## 🤝 Support

For issues or questions, contact the school at:
- **Phone**: 9456842609
- **Email**: msskvumv.khwajpurmeerpur.1237@gmail.com

## 🎯 Future Enhancements

- Student portal with login
- Online admission form
- Event calendar
- News & announcements
- Photo gallery with lightbox
- Student achievements showcase
- Parent communication portal
- Online fees payment
