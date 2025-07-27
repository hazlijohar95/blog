"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap font-bold text-gray-900 dark:text-vercel-white">
      {pathname === "/" ? (
        <span className="cursor-default pr-2 lg:pr-4">Hazli Johar</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-gray-200 dark:hover:bg-vercel-gray-800 active:bg-gray-300 dark:active:bg-vercel-gray-700 p-2 lg:p-3 rounded-md -ml-2 lg:-ml-3 transition-[background-color] touch-manipulation hover-lift"
        >
          Hazli Johar
        </Link>
      )}
    </span>
  );
}
