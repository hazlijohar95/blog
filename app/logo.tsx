"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold text-gray-900 dark:text-vercel-white">
      {pathname === "/" ? (
        <span className="cursor-default pr-2">Hazli Johar</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-gray-200 dark:hover:bg-vercel-gray-800 active:bg-gray-300 dark:active:bg-vercel-gray-700 p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          Hazli Johar
        </Link>
      )}
    </span>
  );
}
