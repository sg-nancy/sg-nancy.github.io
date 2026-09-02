import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { LightboxProvider } from './components/LightboxProvider';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Audiovisuel from './pages/Audiovisuel';
import Webdesign from './pages/Webdesign';
import Informatique from './pages/Informatique';
import Dessin from './pages/Dessin';
import ProjetsEntreprise from './pages/ProjetsEntreprise';
import ProjetsPersonnels from './pages/ProjetsPersonnels';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <LightboxProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/audiovisuel" element={<Audiovisuel />} />
            <Route path="/webdesign" element={<Webdesign />} />
            <Route path="/informatique" element={<Informatique />} />
            <Route path="/dessin" element={<Dessin />} />
            <Route path="/projetsenentreprise" element={<ProjetsEntreprise />} />
            <Route path="/projetspersonnels" element={<ProjetsPersonnels />} />
          </Route>
        </Routes>
      </LightboxProvider>
    </HashRouter>
  );
}
