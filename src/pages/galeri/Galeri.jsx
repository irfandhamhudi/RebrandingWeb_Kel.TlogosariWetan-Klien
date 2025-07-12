import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { getAllPhoto } from "../../utils/data/PhotoAPI";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Error404 from "../error/errorPage";

const Galeri = () => {
  const navigate = useNavigate();
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null); // State untuk item yang dipilih
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State untuk indeks gambar saat ini

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllPhoto();
        setBerita(result.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk membuka modal
  const openModal = (item, index = 0) => {
    setSelectedItem(item);
    setCurrentImageIndex(index);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  // Fungsi untuk navigasi gambar
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedItem.images.length) % selectedItem.images.length
    );
  };

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
            <h1 className="lg:w-[250px] border border-gray-300 bg-white p-4 mb-4">
              Total{" "}
              <span className="font-semibold text-font1">{berita.length}</span>{" "}
              Gambar ditemukan
            </h1>
          )}
          {berita.length === 0 ? (
            <Error404 />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {berita.map((item, index) => (
                <div
                  key={item._id || index}
                  className="cursor-pointer border border-gray-300 bg-white p-4 transition-all duration-300 hover:scale-105 animate-fade-in"
                  onClick={() => openModal(item)}
                >
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={item.images[0]}
                      alt={`Gambar ${item.title}`}
                      className="lg:w-full lg:h-56 object-cover rounded transition-all duration-300 hover:scale-110 hover:brightness-75"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-semibold mt-2 md:mt-6">{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal untuk menampilkan gambar */}
      {selectedItem && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4"
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
            {/* Tombol Tutup */}
            {/* <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 z-10"
            >
              <X size={20} />
            </button> */}

            {/* Tombol Navigasi (jika ada lebih dari satu gambar) */}
            {selectedItem.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Gambar */}
            <img
              src={selectedItem.images[currentImageIndex]}
              alt={`Gambar ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => (e.target.src = "/path/to/placeholder.jpg")}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Galeri;
