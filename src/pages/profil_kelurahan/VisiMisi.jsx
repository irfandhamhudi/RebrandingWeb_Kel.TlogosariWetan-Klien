import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import fto from "../../assets/foto-kantor.jpg";

const VisiMisi = () => {
  const navigate = useNavigate();
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
            <p className="text-white font-semibold">Visi Misi</p>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10">
          <div className="bg-white p-10 rounded shadow w-2/3 flex flex-col justify-center items-center mx-auto">
            {/* Layout Gambar dan Teks */}
            <div className="flex flex-col items-center space-y-8 ">
              {/* Gambar di atas */}
              <div className="flex justify-center">
                <img
                  src={fto}
                  alt="Kelurahan Tlogosari Wetan"
                  className="w-full h-auto rounded shadow"
                />
              </div>

              {/* Teks di bawah gambar */}
              <div className="w-full">
                <div className="text-justify text-sm md:text-md leading-loose space-y-4">
                  <p className="text-font1">
                    Untuk mewujudkan aspirasi di masa yang akan datang, perlu
                    adanya gambaran ruang lingkup kegiatan yang sedang dan akan
                    dilakukan oleh suatu instansi. Hal ini bertujuan untuk
                    mendefinisikan maksud dan tujuan organisasi. Oleh karena
                    itu, ditetapkanlah visi dan misi yang akan dijadikan sebagai
                    pedoman dalam mengimplementasikan kebijakan yang ditetapkan
                    oleh Kelurahan Tlogosari Wetan, Kecamatan Pedurungan, Kota
                    Semarang, sebagai berikut:
                  </p>

                  <p className="text-primary">
                    <span className="font-semibold underline">VISI</span>:{" "}
                    <span className="italic">
                      {'"'}Kota Semarang merupakan kota perdagangan dan jasa
                      yang hebat menuju masyarakat semakin sejahtera.{'"'}
                    </span>
                  </p>

                  <p className="text-primary">
                    <span className="font-semibold underline">MISI</span>:
                  </p>
                  <ul className="list-decimal list-inside text-primary">
                    <li>
                      Mewujudkan kehidupan masyarakat yang berbudaya dan
                      berkualitas.
                    </li>
                    <li>
                      Mewujudkan pemerintahan yang semakin handal untuk
                      meningkatkan pelayanan publik.
                    </li>
                    <li>
                      Mewujudkan kota metropolitan yang dinamis dan berwawasan
                      lingkungan.
                    </li>
                    <li>
                      Memperkuat ekonomi kerakyatan berbasis keunggulan lokasi
                      dan membangun iklim usaha yang kondusif.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default VisiMisi;
