import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { getAllData } from "../../utils/data/dataNewsAPI";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Galeri = () => {
  const navigate = useNavigate();
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllData();
        setBerita(result.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black bg-opacity-50 w-full flex">
        <HashLoader color="#C0392B" size={50} />
      </div>
    );
  }

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
            <p className="text-white font-semibold">Galeri</p>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10 min-h-screen">
          {berita.length > 0 && (
            <h1 className="lg:w-[250px] border  border-gray-300 bg-white  p-4 mb-4">
              Total{" "}
              <span className="font-semibold text-font1">{berita.length}</span>{" "}
              Gambar ditemukan
            </h1>
          )}
          {berita.length === 0 ? (
            <p>Tidak ada berita yang tersedia.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {berita.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer border  border-gray-300 bg-white  p-4 transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={item.images[0]}
                      alt={`Gambar ${item.title}`}
                      className="lg:w-full lg:h-56 object-cover rounded transition-all duration-300 hover:scale-110 hover:brightness-75"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Galeri;
