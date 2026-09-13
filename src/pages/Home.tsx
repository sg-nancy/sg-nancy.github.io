import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap, useGSAP } from '../lib/gsap';

export default function Home() {
  const scope = useRef<HTMLDivElement>(null);
  const avatarWrap = useRef<HTMLDivElement>(null);
  const name = useRef<HTMLDivElement>(null);
  const subtitle = useRef<HTMLParagraphElement>(null);
  const intro = useRef<HTMLParagraphElement>(null);
  const cta = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          avatarWrap.current,
          { opacity: 0, scale: 0.7, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        )
          .fromTo(
            name.current,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.35',
          )
          .fromTo(
            subtitle.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.55 },
            '-=0.35',
          )
          .fromTo(
            intro.current,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.55 },
            '-=0.3',
          )
          .fromTo(
            cta.current,
            { opacity: 0, y: 16, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5 },
            '-=0.3',
          );

        gsap.to(avatarWrap.current, {
          y: -10,
          duration: 2.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="h-full mobile:h-[calc(100vh-66px)] my-9 mobile:my-0 flex justify-center items-center mx-10 md:mx-28 lg:mx-40"
    >
      <div className="flex flex-col text-center items-center">
        <div ref={avatarWrap} className="relative mb-9">
          <div className="absolute inset-0 -z-10 scale-150 rounded-full opacity-30 blur-2xl" />
          <img
            className="h-40 rounded-full"
            src="/optimized/ressources/presentation/photo-cv5.webp"
            alt="Nancy"
          />
        </div>

        <div ref={name} className="mb-6">
          <p className="font-bold text-[30px] md:text-[50px]">
            Moi, c'est{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-rose via-violet to-bleu">
              Nancy
            </span>
          </p>
          <p ref={subtitle} className="font-bold text-[19.5px]">
            Passionnée de création et de communication.
          </p>
        </div>

        <p
          ref={intro}
          className="text-normal/70 text-justify mb-9 lg:text-[18px] lg:w-200 [text-align-last:center]"
        >
          Bienvenue ! Parcourez le portfolio pour découvrir la variété dans mes réalisations (:
        </p>

        <div ref={cta} className="flex justify-end">
          <Link to="/audiovisuel">
            <button className="transition-all cursor-pointer font-bold rounded-lg text-white px-5 py-1.25 bg-linear-to-r from-bleu to-violet shadow-md shadow-black/30 hover:opacity-80 hover:scale-[1.01] active:scale-95 flex items-center gap-2">
              Commencer la visite
              <ArrowRight className="w-4.25 h-4.25" strokeWidth={2.8} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
