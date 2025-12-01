# 🎨 Modern Portfolio Website

A fully animated portfolio built with **Next.js 13+**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌗 **Dark/Light mode** toggle with `next-themes`
- 🎬 **Smooth animations** with Framer Motion
- 📱 **Fully responsive** design
- 🎯 **Portfolio filtering** by category
- 📝 **Markdown blog** system
- 🧭 **Smart navigation** with active route highlighting
- 🔄 **Scroll-triggered blur effects**

## 📂 Project Structure

```
portfolio-studio/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── blog/
│   ├── clients/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── layout.tsx          # Root layout with Navbar/Footer
│   ├── page.tsx            # Landing page
│   └── providers.tsx       # Theme provider wrapper
├── components/             # Reusable components
│   ├── AnimatedButton.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── MotionWrapper.tsx
│   ├── Navbar.tsx
│   ├── PortfolioFilter.tsx
│   ├── Section.tsx
│   └── ThemeToggle.tsx
├── content/
│   └── posts/              # Markdown blog posts
├── data/
│   └── projects.ts         # Portfolio project data
├── lib/
│   └── posts.ts            # Blog post utilities
├── styles/
│   └── globals.css         # Tailwind + custom styles
└── public/                 # Static assets
```

## 🚀 Getting Started

### 1. Install Dependencies

```powershell
npm install
```

### 2. Run Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```powershell
npm run build
npm start
```

## 🎨 Customization

### Add Your Content

1. **Update project data** in `data/projects.ts`
2. **Add blog posts** in `content/posts/` (Markdown format)
3. **Replace branding** in `components/Navbar.tsx` and `components/Footer.tsx`
4. **Add your CV** as `public/resume.pdf`

### Change Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      accent: '#your-accent'
    }
  }
}
```

### Add More Animations

Use Framer Motion variants in `components/MotionWrapper.tsx` or create custom animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📝 Adding Blog Posts

Create a new `.md` file in `content/posts/`:

```markdown
---
title: "Your Post Title"
description: "Short description"
date: "2025-12-01"
---

# Your Content Here

Write your post content in Markdown...
```

## 🛠️ Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Forms:** React Hook Form
- **Markdown:** gray-matter, remark

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🎉 Next Steps

- Add real project images
- Connect contact form to an email service
- Add more blog posts
- Customize colors and fonts
- Deploy to Vercel or Netlify

---

**Happy coding! 🚀**
