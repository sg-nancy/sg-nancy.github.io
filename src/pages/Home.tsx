import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-full mobile:h-[calc(100vh-66px)] my-9 mobile:my-0 flex justify-center items-center mx-10 md:mx-28 lg:mx-40">
      <div className="flex flex-col text-center items-center">
        <div className="flex flex-col items-center">
          <img
            className="h-40 rounded-full mb-9"
            src="/optimized/ressources/presentation/photo-cv5.webp"
            alt="Nancy"
          />

          <div className="mb-6">
            <p className="font-bold text-[30px] md:text-[50px]">
              Moi, c'est{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-rose via-violet to-bleu">
                Nancy
              </span>
            </p>
            <p className="font-bold text-[19.5px]">Passionnée de création et de communication.</p>
          </div>
        </div>

        <p className="text-normal/70 text-justify mb-9 lg:text-[18px] lg:w-[800px] [text-align-last:center]">
          Bienvenue ! Parcourez le portfolio pour découvrir la variété dans mes réalisations (:
        </p>

        <div className="flex justify-end">
          <Link to="/audiovisuel">
            <button className="transition-all cursor-pointer font-bold rounded-[8px] text-white px-5 py-[5px] bg-linear-to-r from-bleu to-violet shadow-md shadow-black/30 hover:opacity-80 hover:scale-[1.01] active:scale-95 flex items-center gap-2">
              Commencer la visite
              <ArrowRight className="w-[17px] h-[17px]" strokeWidth={2.8} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
