# MITANSH TOUR & TRAVELS

A premium taxi and tour services website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI/UX**: Premium design inspired by Uber, Airbnb, and MakeMyTrip
- **Responsive Design**: Perfect on desktop, laptop, tablet, and mobile
- **SEO Optimized**: Complete SEO with metadata, sitemap, robots.txt, and Schema.org
- **Fast Performance**: Optimized for Lighthouse scores (95+ Performance, 100 SEO)
- **Booking System**: Complete booking form with validation and email notifications
- **Tour Packages**: Curated pilgrimage and tour packages
- **Fleet Display**: Showcase of vehicles with detailed information
- **Blog System**: SEO-optimized blog with travel guides
- **Contact Form**: With Google Maps integration
- **Animations**: Smooth Framer Motion animations throughout

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Email**: Nodemailer

## 📁 Project Structure

```
mitansh-tour-travels/
├── app/
│   ├── about/
│   ├── api/
│   │   ├── bookings/
│   │   └── contact/
│   ├── blog/
│   ├── contact/
│   ├── faq/
│   ├── fleet/
│   ├── gallery/
│   ├── privacy-policy/
│   ├── routes/
│   ├── services/
│   ├── terms/
│   ├── tour-packages/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   └── sitemap.ts
├── components/
│   ├── home/
│   ├── layout/
│   └── ui/
├── lib/
│   ├── constants/
│   ├── seo/
│   ├── types/
│   └── utils/
├── public/
│   ├── robots.txt
│   └── og-image.jpg
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mitansh-tour-travels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your values:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=jeetubaghel91@gmail.com
   WHATSAPP_PHONE=919027264612
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The project is optimized for Vercel deployment with automatic SSL, CDN, and edge caching.

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: "#0B1F4D",
    light: "#1A3A6E",
    dark: "#051028",
  },
  gold: {
    DEFAULT: "#C99A2E",
    light: "#D4AA4D",
    dark: "#A67D20",
  },
  // ...
}
```

### Content

Edit `lib/constants/index.ts` to update:
- Fleet information
- Tour packages
- Popular routes
- Services
- Testimonials
- FAQs
- Blog posts

### Contact Information

Update `SITE_CONFIG` in `lib/constants/index.ts` with your business details.

## 📧 Email Configuration

For email notifications to work, configure Nodemailer:

1. For Gmail, create an App Password:
   - Go to Google Account > Security
   - Enable 2FA
   - Generate App Password
   - Use it as `EMAIL_PASSWORD`

2. For other providers, update the SMTP settings in `.env`.

## 🗺️ Google Maps

To use Google Maps:

1. Get an API key from [Google Cloud Console](https://console.cloud.google.com)
2. Enable Maps JavaScript API
3. Add the API key to `.env` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
4. Update the map iframe in components with your location coordinates

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type check

## 📱 Pages

- **Home**: Hero, booking form, services, fleet, packages, routes, gallery, testimonials, FAQ, blog, contact
- **About**: Company story, values, team
- **Services**: Airport taxi, local taxi, outstation, corporate, wedding, tempo traveller
- **Tour Packages**: Brij Darshan, Mathura local, Vrindavan local, and more
- **Fleet**: Vehicle showcase with details
- **Routes**: Popular routes with pricing
- **Gallery**: Image gallery
- **FAQ**: 28+ frequently asked questions
- **Blog**: Travel guides and tips
- **Contact**: Contact form with map
- **Privacy Policy**: Privacy policy
- **Terms**: Terms of service

## 🎯 SEO Features

- Complete metadata for all pages
- Open Graph tags
- Twitter Cards
- Canonical URLs
- XML Sitemap
- robots.txt
- Schema.org structured data:
  - LocalBusiness
  - FAQPage
  - BreadcrumbList
  - Product

## 🚀 Performance

- Image optimization with Next.js Image
- Code splitting
- Lazy loading
- Font optimization
- CSS optimization
- Server components where appropriate

## 📄 License

This project is proprietary software for MITANSH TOUR & TRAVELS.

## 👨‍💻 Support

For support, contact:
- Email: jeetubaghel91@gmail.com
- Phone: +91 9027264612

---

Built with ❤️ for MITANSH TOUR & TRAVELS
