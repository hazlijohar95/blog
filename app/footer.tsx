import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left">
        Hazli Johar (
        <A target="_blank" href="https://www.linkedin.com/in/hazli-johar/">
          @hazlijohar
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/hazlijohar95/blog">
          Source
        </A>
      </div>
    </footer>
  );
}
