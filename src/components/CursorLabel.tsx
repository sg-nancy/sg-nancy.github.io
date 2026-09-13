import { useEffect, useRef, useState } from 'react';

export default function CursorLabel() {
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-cursor-label]') as HTMLElement | null;
      if (target) {
        setLabel(target.dataset.cursorLabel ?? '');
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white px-4 py-1.5 font-bold text-black whitespace-nowrap transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transform: `translate(${position.x + 20}px, ${position.y + 14}px)` }}
    >
      {label}
    </div>
  );
}
