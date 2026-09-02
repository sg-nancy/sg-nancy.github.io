import { useState } from 'react';
import type { ReactNode } from 'react';

export default function ReadMore({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <div
          className={`text-justify transition-all duration-300 ease-in-out ${
            open ? 'max-h-[500px]' : 'max-h-[3.5rem] overflow-hidden opacity-60'
          }`}
        >
          {children}
        </div>
        {!open && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#262537] to-transparent pointer-events-none transition-opacity duration-300"></div>
        )}
      </div>
      <p
        onClick={() => setOpen((v) => !v)}
        className="flex justify-end cursor-pointer z-10 text-sm underline"
      >
        {open ? 'Lire moins' : 'Lire plus'}
      </p>
    </div>
  );
}
