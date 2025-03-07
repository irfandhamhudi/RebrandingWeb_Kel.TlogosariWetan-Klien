import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import logo lokal (sesuaikan path-nya)
import logoLPMK from "../../assets/logo-lpmk.png";
import logoPKK from "../../assets/logo-pkk.png";
import logoFKK from "../../assets/logo-fkk.png";
import logoBKM from "../../assets/logo-bkm.png";

const Kelembagaan = () => {
  const navigate = useNavigate();

  // Data lembaga dengan logo
  const lembagaData = [
    {
      id: 1,
      title: "LPMK Kelurahan Tlogosari Wetan",
      description:
        "Lembaga Pemberdayaan Masyarakat Kelurahan (LPMK) adalah lembaga yang bertujuan untuk memberdayakan masyarakat di tingkat kelurahan. LPMK Tlogosari Wetan aktif dalam berbagai kegiatan sosial dan pembangunan.",
      logo: logoLPMK, // Path ke logo LPMK
    },
    {
      id: 2,
      title: "PKK Kelurahan Tlogosari Wetan",
      description:
        "Pemberdayaan dan Kesejahteraan Keluarga (PKK) adalah gerakan yang bertujuan untuk meningkatkan kesejahteraan keluarga. PKK Tlogosari Wetan aktif dalam berbagai program seperti kesehatan, pendidikan, dan ekonomi keluarga.",
      logo: logoPKK, // Path ke logo PKK
    },
    {
      id: 3,
      title: "FKK Kelurahan Tlogosari Wetan",
      description:
        "Forum Kesehatan Kelurahan (FKK) adalah forum yang bertujuan untuk meningkatkan kesadaran dan partisipasi masyarakat dalam bidang kesehatan. FKK Tlogosari Wetan aktif dalam berbagai kegiatan promosi kesehatan dan pencegahan penyakit.",
      logo: logoFKK, // Path ke logo FKK
    },
    {
      id: 4,
      title: "BKM Kelurahan Tlogosari Wetan",
      description:
        "Badan Keswadayaan Masyarakat (BKM) adalah lembaga yang bertujuan untuk meningkatkan kemandirian masyarakat dalam pembangunan. BKM Tlogosari Wetan aktif dalam berbagai program pemberdayaan masyarakat dan pembangunan infrastruktur.",
      logo: logoBKM, // Path ke logo BKM
    },
  ];

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 lg:px-28 py-10 bg-primary">
          <div className="flex items-center space-x-2 text-sm">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white"
            >
              Beranda
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <span
              onClick={() => navigate("/profil-kelurahan")}
              className="text-white cursor-pointer"
            >
              Profil Kelurahan
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <p className="text-white font-semibold">Kelembagaan</p>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10 min-h-screen space-y-5">
          <div className="lg:text-md border lg:w-[240px] border-font1 border-opacity-50 bg-bg1 py-2 px-7 lg:px-5">
            <p>Kelembagaan Kelurahan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lembagaData.map((lembaga) => (
              <div
                key={lembaga.id}
                className="border border-font1 border-opacity-50 bg-bg1 p-6 lg:p-8 text-justify flex flex-col items-center"
              >
                {/* Logo Lembaga */}
                <img
                  src={lembaga.logo}
                  alt={`Logo ${lembaga.title}`}
                  className="w-24 h-24 mb-4 object-contain"
                />
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {lembaga.title}
                </h2>
                <p className="text-gray-700">{lembaga.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Kelembagaan;
