import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfileKelurahan from "./pages/profil_kelurahan/ProfileKelurahan";
import Kelembagaan from "./pages/kelembagaan/Main";
import VisiMisi from "./pages/profil_kelurahan/VisiMisi";
import DetailBerita from "./pages/detailberita/DetailBerita";
import SplashScreen from "./components/SplashScreen";
import SumberDaya from "./pages/profil_kelurahan/SumberDaya";
import Monografi from "./pages/profil_kelurahan/Monografi";
import Struktur from "./pages/profil_kelurahan/Struktur";
import Sarana from "./pages/profil_kelurahan/Sarana";
import Regulasi from "./pages/profil_kelurahan/Regulasi";
import Error from "./pages/error/errorPage";
import Pemberdayaan from "./pages/pemberdayaan/Main";
import Berita from "./pages/berita/Berita";
import Galeri from "./pages/galeri/Galeri";
import KelembagaanPage from "./pages/kelembagaan/Kelembagaan";
import PemberdayaanPage from "./pages/pemberdayaan/Pemberdayaan";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulasi durasi preloader
  }, []);

  return (
    <div>
      <Router>
        {loading ? (
          <SplashScreen onComplete={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil-kelurahan" element={<ProfileKelurahan />} />
            <Route path="/kelembagaan/:bidang" element={<Kelembagaan />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/detail-berita/:title" element={<DetailBerita />} />
            <Route path="/regulasi" element={<Regulasi />} />
            <Route path="/sumber-daya-manusia" element={<SumberDaya />} />
            <Route path="/monografi" element={<Monografi />} />
            <Route path="/struktur-pemerintahan" element={<Struktur />} />
            <Route path="/sarana-prasarana" element={<Sarana />} />
            <Route path="/pemberdayaan/:bidang" element={<Pemberdayaan />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/kelembagaan" element={<KelembagaanPage />} />
            <Route path="/pemberdayaan" element={<PemberdayaanPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
