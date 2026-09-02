import type { ReactNode } from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className="transition-all cursor-pointer font-bold rounded-[8px] text-white px-5 py-[5px] bg-linear-to-r from-bleu to-violet shadow-md shadow-black/30 hover:opacity-80 hover:scale-[1.01] active:scale-95 flex items-center gap-2">
        {children}
        <SquareArrowOutUpRight className="w-4 h-4" strokeWidth={2.5} />
      </button>
    </a>
  );
}
