import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/error404.png"; // Pastikan Anda memiliki gambar error 404 di direktori assets

const Error404 = () => {
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
            <ChevronRight className="w-4 h-4  cursor-pointer text-white" />
            <span className="text-white">Halaman Tidak Ditemukan</span>
          </div>
        </div>

        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <img src={errorImage} alt="Error 404" className="w-72 h-72 mb-8" />
          <div className="text-center ">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-gray-600 mb-8">
              Maaf, halaman yang Anda cari tidak ditemukan.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-white px-6 py-2  hover:bg-secondary transition duration-300"
          >
            Kembali ke Beranda
          </button>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Error404;
