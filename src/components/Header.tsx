import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const projetsPersonnelsLinks = [
  { to: '/projetspersonnels', label: 'Graphisme' },
  { to: '/dessin', label: 'Dessin' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projetsPersonnelsOpen, setProjetsPersonnelsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isProjetsPersonnelsActive = projetsPersonnelsLinks.some((g) => location.pathname === g.to);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('header')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative transition-all hover:text-normal/50 hover:cursor-pointer [-webkit-user-drag:none] ${isActive ? 'text-white' : ''
    } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-linear-to-r after:from-rose after:via-violet after:to-bleu after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 flex border-b-2 py-5 w-full items-center justify-center h-16 select-none transition-all duration-300 border-normal/10 bg-background`}
    >
      <div className="w-screen px-8 md:w-[50em] lg:w-[60em] relative">
        <div
          className="transition-all space-y-1.5 md:hidden group/menu hover:cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="transition-all block w-6 h-0.5 bg-normal group-hover/menu:bg-white"></span>
          <span className="transition-all block w-6 h-0.5 bg-normal group-hover/menu:bg-white"></span>
          <span className="transition-all block w-6 h-0.5 bg-normal group-hover/menu:bg-white"></span>
        </div>

        <nav
          className={`${menuOpen ? 'flex flex-col' : 'hidden'
            } pl-8 py-8 md:m-0 md:pl-0 md:flex md:flex-row list-none justify-between absolute bg-background w-full left-0 md:relative md:py-5 gap-y-1 border-b-2 border-normal/10 md:border-0 md:bg-transparent`}
        >
          <li className="hover:text-normal/50 transition-all">
            <NavLink className={linkClass} to="/" onClick={() => setMenuOpen(false)}>
              Présentation
            </NavLink>
          </li>
          <li className="transition-all">
            <NavLink className={linkClass} to="/audiovisuel" onClick={() => setMenuOpen(false)}>
              Audiovisuel
            </NavLink>
          </li>
          <li className="transition-all">
            <NavLink className={linkClass} to="/projetsenentreprise" onClick={() => setMenuOpen(false)}>
              Graphisme
            </NavLink>
          </li>
          <li className="transition-all">
            <NavLink className={linkClass} to="/webdesign" onClick={() => setMenuOpen(false)}>
              Webdesign
            </NavLink>
          </li>
          <li className="transition-all">
            <NavLink className={linkClass} to="/informatique" onClick={() => setMenuOpen(false)}>
              Informatique
            </NavLink>
          </li>
          <li
            className="transition-all"
            onMouseEnter={() => setProjetsPersonnelsOpen(true)}
            onMouseLeave={() => setProjetsPersonnelsOpen(false)}
          >
            <span
              className={`relative hover:text-normal/50 hover:cursor-pointer [-webkit-user-drag:none] pb-[25px] after:absolute after:left-0 after:bottom-[17px] after:h-0.5 after:bg-linear-to-r after:from-rose after:via-violet after:to-bleu after:transition-all after:duration-300 ${isProjetsPersonnelsActive ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
            >
              Projets personnels
            </span>
            <div
              className={`flex flex-col pl-8 py-1 ${projetsPersonnelsOpen ? 'md:flex' : 'md:hidden'
                } md:absolute md:gap-y-2 md:py-3 md:px-3 md:border-2 md:mt-[20px] md:border-card-border md:rounded-md md:bg-[#262538]/90 md:backdrop-blur-md md:shadow-lg`}
            >
              {projetsPersonnelsLinks.map((g) => (
                <NavLink
                  key={g.to}
                  className={linkClass}
                  to={g.to}
                  onClick={() => setMenuOpen(false)}
                >
                  {g.label}
                </NavLink>
              ))}
            </div>
          </li>
        </nav>
      </div>
    </header>
  );
}
