import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="px-4 py-6 sm:px-6 sm:py-8 flex flex-col sm:flex-row text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono gap-2 sm:gap-0">
      <div className="grow text-center sm:text-left">
        Hazli Johar (
        <A target="_blank" href="https://www.linkedin.com/in/hazli-johar/" className="hover:underline touch-manipulation">
          @hazlijohar
        </A>
        )
      </div>
      <div className="text-center sm:text-right">
        <A target="_blank" href="https://github.com/hazlijohar95/blog" className="hover:underline touch-manipulation">
          Source
        </A>
      </div>
    </footer>
  );
}
