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

// Viewport configuration for mobile responsiveness
export const viewport = {
  themeColor: "transparent",
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
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        {/* Main content container with responsive padding */}
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
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
