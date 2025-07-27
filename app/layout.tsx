// Global styles and CSS imports
import "./globals.css";

// Next.js and React imports
import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

// Font configuration - Inter font for the entire application
const inter = Inter({ subsets: ["latin"] });

// Main layout metadata - controls SEO, social media cards, and browser behavior
export const metadata = {
  title: "Hazli Johar's blog",
  description:
    "Hazli Johar is a software engineer and developer passionate about web development, technology, and sharing knowledge through writing.",
  openGraph: {
    title: "Hazli Johar's blog",
    description:
      "Hazli Johar is a software engineer and developer passionate about web development, technology, and sharing knowledge through writing.",
    url: "https://hazlijohar.com",
    siteName: "Hazli Johar's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hazlijohar95",
    creator: "@hazlijohar95",
  },
  metadataBase: new URL("https://hazlijohar.com"),
};

// Enhanced viewport configuration for mobile-native experience
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "transparent",
  viewportFit: 'cover',
};

// Root layout component - wraps all pages and provides the main structure
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        {/* Client-side scripts for theme switching and fun effects */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
        {/* Mobile-native meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hazli Johar" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body className="dark:text-vercel-white dark:bg-vercel-black max-w-2xl m-auto touch-manipulation">
        {/* Main content container with mobile-native responsive padding */}
        <main className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-6 min-h-screen">
          {/* Site header with navigation */}
          <Header />
          {/* Page content - this is where individual pages render */}
          {children}
        </main>

        {/* Site footer */}
        <Footer />
        {/* Analytics tracking */}
        <Analytics />
      </body>
    </html>
  );
}
