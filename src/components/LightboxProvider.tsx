import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import Lightbox, { type LightboxItem } from './Lightbox';

type LightboxContextValue = {
  open: (items: LightboxItem[], index: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((items: LightboxItem[], index: number) => {
    setItems(items);
    setIndex(index);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const navigate = useCallback((i: number) => setIndex(i), []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Lightbox items={items} index={index} onClose={close} onNavigate={navigate} />
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within a LightboxProvider');
  return ctx;
}
