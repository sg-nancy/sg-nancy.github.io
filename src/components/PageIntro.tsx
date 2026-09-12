import type { ReactNode } from 'react';

type PageIntroProps = {
  title: string;
  children: ReactNode;
};

export default function PageIntro({ title, children }: PageIntroProps) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="w-fit font-bold text-[30px] text-white">{title}</h1>
      <div className="text-justify text-normal/70">{children}</div>
    </div>
  );
}
