import type { ReactNode } from 'react';

export type TagColor = 'rose' | 'violet' | 'bleu';

const colorClasses: Record<TagColor, string> = {
  rose: 'text-rose bg-tag-rose-background',
  violet: 'text-violet bg-tag-violet-background',
  bleu: 'text-bleu bg-tag-bleu-background',
};

type TagProps = {
  color: TagColor;
  children: ReactNode;
};

export default function Tag({ color, children }: TagProps) {
  return (
    <p className={`w-fit px-[5px] ${colorClasses[color]} rounded-[4px] font-bold text-[12px]`}>
      {children}
    </p>
  );
}
