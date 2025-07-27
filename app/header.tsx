import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

// Main header component - contains logo, navigation, and theme toggle
export function Header() {
  return (
    <header className="flex items-center justify-between mb-6 md:mb-16 px-2">
      {/* Logo/brand name with link to homepage */}
      <Logo />

      {/* Navigation and theme controls */}
      <nav className="flex items-center gap-3 sm:gap-6">
        {/* About page link */}
        <Link
          href="/about"
          className="font-mono text-gray-700 dark:text-vercel-white underline-offset-4 hover:underline focus:underline transition-all cursor-pointer hover:cursor-pointer text-sm sm:text-base px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-vercel-gray-900 active:bg-gray-200 dark:active:bg-vercel-gray-800"
        >
          About
        </Link>

        {/* Social media link (X/Twitter) */}
        <a
          href="https://x.com/hazlijohar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-gray-700 dark:text-vercel-white underline-offset-4 hover:underline focus:underline transition-all cursor-pointer hover:cursor-pointer text-sm sm:text-base px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-vercel-gray-900 active:bg-gray-200 dark:active:bg-vercel-gray-800"
        >
          Follow me
        </a>

        {/* Theme toggle button (light/dark/system) */}
        <ThemeToggle />
      </nav>
    </header>
  );
}

function TweetIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}
