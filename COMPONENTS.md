# Components Documentation

Complete guide to all components in the M S S K V U M V school website.

## 📁 Component Structure

```
src/components/
├── Header.tsx          # Navigation header
├── Footer.tsx          # Footer section
└── pages/
    ├── Hero.tsx        # Homepage hero section
    ├── About.tsx       # About section
    ├── Features.tsx    # Why choose us section
    └── Facilities.tsx  # Facilities section
```

## 🔧 Core Components

### Header Component
**File**: `src/components/Header.tsx`

**Features**:
- Sticky navigation bar
- Contact info top bar
- Desktop menu with dropdowns
- Mobile responsive hamburger menu
- Smooth transitions

**Props**: None (uses internal state)

**Usage**:
```tsx
import Header from "@/components/Header"

export default function Layout() {
  return <Header />
}
```

**States**:
- `isOpen`: Mobile menu visibility
- `openDropdown`: Dropdown menu state

**Customization**:
```tsx
// Change logo text (line 31)
<Link href="/">M S S K V U M V</Link>

// Add/remove navigation items (lines 50-70)
<NavLink href="/new-page">New Page</NavLink>
```

---

### Footer Component
**File**: `src/components/Footer.tsx`

**Features**:
- Contact information
- Quick links
- Gallery links
- Social media links
- Copyright notice

**Props**: None

**Usage**:
```tsx
import Footer from "@/components/Footer"

export default function Layout() {
  return <Footer />
}
```

**Customization**:
```tsx
// Update social links (lines 60-80)
<a href="https://facebook.com/yourpage">
  <FiFacebook size={20} />
</a>
```

---

## 🏠 Homepage Components

### Hero Component
**File**: `src/components/pages/Hero.tsx`

**Features**:
- Gradient background
- Welcome message
- Call-to-action buttons
- Statistics cards
- Smooth animations
- Wave SVG decoration

**Props**: None

**Usage**:
```tsx
import Hero from "@/components/pages/Hero"

export default function Home() {
  return <Hero />
}
```

**Customization**:
```tsx
// Change heading (line 25)
<h1>Welcome to M S S K V U M V</h1>

// Update stats (lines 50-55)
<StatCard number="500+" label="Students" />
```

**Sub-component: StatCard**
```tsx
<StatCard 
  number="500+" 
  label="Students" 
/>
```

---

### About Component
**File**: `src/components/pages/About.tsx`

**Features**:
- Section heading
- Core values cards
- Mission statement
- Vision statement
- Hover effects

**Props**: None

**Usage**:
```tsx
import About from "@/components/pages/About"

export default function Home() {
  return <About />
}
```

**Update Values**:
```tsx
const values = [
  {
    icon: FiAward,
    title: "Your Title",
    description: "Your description",
  },
  // Add more
]
```

---

### Features Component
**File**: `src/components/pages/Features.tsx`

**Features**:
- Feature cards grid
- Icon display
- Hover animations
- Responsive layout

**Props**: None

**Update Features**:
```tsx
const features = [
  {
    icon: FiZap,
    title: "Feature Name",
    description: "Feature description",
  },
]
```

---

### Facilities Component
**File**: `src/components/pages/Facilities.tsx`

**Features**:
- Facility cards with emojis
- Hover scale animation
- 3-column responsive grid
- Icon-based design

**Props**: None

**Update Facilities**:
```tsx
const facilities = [
  {
    id: 1,
    name: "Facility Name",
    description: "Facility description",
    icon: "📚",
  },
]
```

---

## 📄 Page Components

### Contact Page
**File**: `src/app/contact/page.tsx`

**Features**:
- Contact form with validation
- Contact information cards
- Google Maps embed
- Error/success messages
- Loading state

**Form Fields**:
- Name (required)
- Email (required, validated)
- Phone (optional)
- Subject (required)
- Message (required, textarea)

**Form Data**:
```tsx
{
  name: string
  email: string
  phone: string
  subject: string
  message: string
}
```

**API Endpoint**: `/api/contact` (POST)

---

### Teachers Page
**File**: `src/app/teachers/page.tsx`

**Features**:
- Teacher cards grid
- Avatar placeholder
- Experience display
- Bio section
- Responsive layout

**Update Teachers**:
```tsx
const teachers = [
  {
    id: 1,
    name: "Teacher Name",
    subject: "Subject",
    experience: "10 years",
    bio: "Bio text",
  },
]
```

---

### Gallery Pages

#### Library
**File**: `src/app/gallery/library/page.tsx`
- Library information
- Gallery grid
- Image placeholders

#### Sports
**File**: `src/app/gallery/sports/page.tsx`
- Sports facilities info
- Sports equipment gallery
- Facility descriptions

#### Events
**File**: `src/app/gallery/events/page.tsx`
- School events showcase
- Event descriptions
- Emoji-based visual representation

---

### About Pages

#### Principal's Message
**File**: `src/app/about/principal/page.tsx`
- Welcome message
- School values
- Vision statement
- Inspirational text

#### Manager's Message
**File**: `src/app/about/manager/page.tsx`
- Administrative perspective
- Commitment statement
- Future vision

---

## 🎨 Styling System

### Tailwind CSS Classes

**Common Classes Used**:
```tsx
// Colors
bg-blue-600          // Blue background
text-white           // White text
hover:text-blue-600  // Hover color

// Spacing
px-6                 // Horizontal padding
py-12                // Vertical padding
gap-4                // Gap between items

// Layout
flex                 // Flexbox
grid                 // Grid layout
container-custom     // Max-width container

// Responsive
md:                  // Medium screens and up
lg:                  // Large screens and up
```

### Custom Classes
```css
/* From globals.css */
.container-custom    // Max width + auto margins
.btn-primary         // Primary button style
.btn-secondary       // Secondary button style
.section-padding     // Standard section padding
.fade-in-up          // Fade-in animation
```

---

## 🎬 Animation Components

### Framer Motion Usage

**Motion Div**:
```tsx
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Variants Pattern**:
```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
>
  Content
</motion.div>
```

---

## 🔄 Reusable Patterns

### NavLink Component
```tsx
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-gray-700 hover:text-blue-600 transition"
    >
      {children}
    </Link>
  )
}
```

### StatCard Component
```tsx
function StatCard({ number, label }) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <div className="text-3xl font-bold">{number}</div>
      <div className="text-gray-100">{label}</div>
    </div>
  )
}
```

---

## 🔐 Client vs Server Components

### Client Components
Components using `'use client'`:
- Header
- Footer
- Contact page (form)
- Gallery pages (interactive)

### Server Components
Components without `'use client'`:
- Layouts
- API routes
- Static content pages

---

## 📱 Responsive Breakpoints

**Tailwind Breakpoints**:
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Usage**:
```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive text
</div>
```

---

## 🎯 Component Composition Example

```tsx
// Home page composes multiple components
import Hero from "@/components/pages/Hero"
import About from "@/components/pages/About"
import Features from "@/components/pages/Features"
import Facilities from "@/components/pages/Facilities"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Facilities />
    </div>
  )
}
```

---

## 🚀 Adding New Components

### Step 1: Create Component File
```tsx
// src/components/MyComponent.tsx
'use client'

import { motion } from "framer-motion"

export default function MyComponent() {
  return (
    <motion.div>
      Your content here
    </motion.div>
  )
}
```

### Step 2: Import in Page
```tsx
import MyComponent from "@/components/MyComponent"

export default function Page() {
  return <MyComponent />
}
```

### Step 3: Customize
Add your styles, content, and logic.

---

## 🧪 Component Testing Tips

1. **Check Responsiveness**
   - Desktop: 1920px
   - Tablet: 768px
   - Mobile: 375px

2. **Test Interactions**
   - Hover effects
   - Click events
   - Form submission

3. **Verify Animations**
   - Smooth transitions
   - Proper timing
   - No jank

4. **Cross-browser**
   - Chrome, Firefox, Safari
   - Mobile browsers

---

## 📚 Component API Reference

| Component | Props | State | Features |
|-----------|-------|-------|----------|
| Header | None | isOpen, openDropdown | Navigation, mobile menu |
| Footer | None | None | Links, social, copyright |
| Hero | None | None | Animations, CTA |
| About | None | None | Values grid, mission/vision |
| Features | None | None | Feature cards |
| Facilities | None | None | Facility grid |

---

## 💡 Best Practices

1. **Use `'use client'` only when needed**
2. **Keep components focused and small**
3. **Reuse styling classes**
4. **Use Tailwind utilities**
5. **Add animations thoughtfully**
6. **Test on mobile first**
7. **Keep props minimal**

---

## 🔗 Related Files

- **Styles**: `src/app/globals.css`
- **Config**: `tailwind.config.js`
- **Icons**: React Icons & Lucide React
- **Animations**: Framer Motion

---

For more information on specific components, check their individual files in `src/components/`.
