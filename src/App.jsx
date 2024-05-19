import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Character from './pages/Character.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import MapAceh from './pages/kota/aceh/mapAceh.jsx';
import Aceh from './pages/kota/aceh/Aceh.jsx';
import RestoranAceh from './pages/kota/aceh/restoranAceh.jsx';
import MuseumAceh from './pages/kota/aceh/museumAceh.jsx';
import MapMedan from './pages/kota/medan/mapMedan.jsx';
import Medan from './pages/kota/medan/Medan.jsx';
import RestoranMedan from './pages/kota/medan/restoranMedan.jsx';
import MuseumMedan from './pages/kota/medan/museumMedan.jsx';
import MapPadang from './pages/kota/padang/mapPadang.jsx';
import Padang from './pages/kota/padang/Padang.jsx';
import RestoranPadang from './pages/kota/padang/restoranPadang.jsx';
import MuseumPadang from './pages/kota/padang/museumPadang.jsx';
import MapPekanbaru from './pages/kota/pekanbaru/mapPekanbaru.jsx';
import Pekanbaru from './pages/kota/pekanbaru/Pekanbaru.jsx';
import RestoranPekanbaru from './pages/kota/pekanbaru/restoranPekanbaru.jsx';
import MuseumPekanbaru from './pages/kota/pekanbaru/museumPekanbaru.jsx';
import MapPalembang from './pages/kota/palembang/mapPalembang.jsx';
import Palembang from './pages/kota/palembang/Palembang.jsx';
import RestoranPalembang from './pages/kota/palembang/restoranPalembang.jsx';
import MuseumPalembang from './pages/kota/palembang/museumPalembang.jsx';
import MapBangka from './pages/kota/bangka/mapBangka.jsx';
import Bangka from './pages/kota/bangka/Bangka.jsx';
import RestoranBangka from './pages/kota/bangka/restoranBangka.jsx';
import MuseumBangka from './pages/kota/bangka/museumBangka.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/character" element={<Character />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/mapaceh" element={<MapAceh />} />
        <Route path="/aceh" element={<Aceh />} />
        <Route path="/restoranaceh" element={<RestoranAceh />} />
        <Route path="/museumaceh" element={<MuseumAceh />} />
        <Route path="/mapmedan" element={<MapMedan />} />
        <Route path="/medan" element={<Medan />} />
        <Route path="/restoranmedan" element={<RestoranMedan />} />
        <Route path="/museummedan" element={<MuseumMedan />} />
        <Route path="/mappadang" element={<MapPadang />} />
        <Route path="/padang" element={<Padang />} />
        <Route path="/restoranpadang" element={<RestoranPadang />} />
        <Route path="/museumpadang" element={<MuseumPadang />} />
        <Route path="/mappekanbaru" element={<MapPekanbaru />} />
        <Route path="/pekanbaru" element={<Pekanbaru />} />
        <Route path="/restoranpekanbaru" element={<RestoranPekanbaru />} />
        <Route path="/museumpekanbaru" element={<MuseumPekanbaru />} />
        <Route path="/mappalembang" element={<MapPalembang />} />
        <Route path="/palembang" element={<Palembang />} />
        <Route path="/restoranpalembang" element={<RestoranPalembang />} />
        <Route path="/museumpalembang" element={<MuseumPalembang />} />
        <Route path="/mapbangka" element={<MapBangka />} />
        <Route path="/bangka" element={<Bangka />} />
        <Route path="/restoranbangka" element={<RestoranBangka />} />
        <Route path="/museumbangka" element={<MuseumBangka />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;