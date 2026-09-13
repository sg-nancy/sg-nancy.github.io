import type { ReactNode } from 'react';
import Reveal from './Reveal';

type CardProps = {
  children: ReactNode;
  className?: string;
  gap?: string;
  dark?: boolean;
  [key: `data-${string}`]: string | undefined;
};

export default function Card({ children, className = '', gap = 'gap-8', dark = false, ...rest }: CardProps) {
  const bg = dark ? 'bg-black/5' : 'bg-card-background';
  return (
    <Reveal>
      <div
        {...rest}
        className={`flex flex-col ${gap} ${bg} rounded-[15px] border-card-border border-2 p-8 ${className}`}
      >
        {children}
      </div>
    </Reveal>
  );
}
