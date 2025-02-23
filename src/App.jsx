import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfileKelurahan from "./pages/profil_kelurahan/ProfileKelurahan";
import Kelembagaan from "./pages/kelembagaan/Kelembagaan";
import VisiMisi from "./pages/profil_kelurahan/VisiMisi";
import DetailBerita from "./pages/detailberita/DetailBerita";
import SplashScreen from "./components/SplashScreen";
import SaranaPrasarana from "./pages/regulasi/Regulasi";
import SumberDaya from "./pages/sumber daya/SumberDaya";
import Monografi from "./pages/monografi/Monografi";
import Struktur from "./pages/struktur/Struktur";
import Sarana from "./pages/sarana prasarana/Sarana";

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
            <Route path="/kelembagaan" element={<Kelembagaan />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/detail-berita/:title" element={<DetailBerita />} />
            <Route path="/regulasi" element={<SaranaPrasarana />} />
            <Route path="/sumber-daya-manusia" element={<SumberDaya />} />
            <Route path="/monografi" element={<Monografi />} />
            <Route path="/struktur-pemerintahan" element={<Struktur />} />
            <Route path="/sarana-prasarana" element={<Sarana />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
