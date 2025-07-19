"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${isVisible ? "opacity-100" : "opacity-0"} fixed z-10 items-center gap-2 rounded bg-white py-2 pl-4 pr-3 ring-1 ring-zinc-400 transition-all sm:right-8 sm:top-8 sm:flex sm:hover:bg-[#ffeced] dark:bg-blue-primary-dark dark:ring-zinc-500 sm:hover:dark:bg-blue-secondary`}
      >
        Voltar ao topo
        <ArrowUp className="size-4" />
      </button>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${isVisible ? "opacity-100" : "opacity-0"} fixed z-10 items-center gap-2 rounded bg-white p-3 ring-1 ring-zinc-400 transition-all max-sm:bottom-6 max-sm:right-6 max-sm:flex sm:hover:bg-[#ffeced] dark:bg-blue-primary-dark dark:ring-zinc-500 sm:hover:dark:bg-zinc-800`}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
};
