# Hazli Johar Blog

A minimal, modern, and personal blog built with Next.js.

## Features

- Minimal, clean design
- Light/dark mode with smooth toggle
- About page with profile photo (light/dark support)
- Posts organized by year
- Social and contact links (X, LinkedIn, GitHub)
- Fully editable via code (no CMS)

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/hazlijohar95/blog.git
   cd blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing Content

- **About page**: Edit `app/about/page.mdx`
- **Profile photo**: Place `hazli-profile.jpg` (color) and `hazli-profile-gray.jpg` (gray) in `public/images/`
- **Blog posts**: Edit or add files in `app/(post)/[year]/[slug]/page.mdx`
- **Navigation**: Edit `app/header.tsx`
- **Footer**: Edit `app/footer.tsx`
- **Site metadata**: Edit `app/layout.tsx`

## Customization

- **Hide/show posts by year**: See the filter in `app/posts.tsx`
- **Change social links**: Update URLs in `header.tsx` and `footer.tsx`
- **Change fonts/colors**: Edit Tailwind config and CSS files

## Deployment

- Deploy to [Vercel](https://vercel.com/) for best results.
- Or use any platform that supports Next.js.

## License

MIT
# Force Vercel deployment - Sun Jul 27 12:37:04 JST 2025
