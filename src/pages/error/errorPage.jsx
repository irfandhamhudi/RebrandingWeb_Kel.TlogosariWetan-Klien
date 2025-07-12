import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/error404.png"; // Pastikan Anda memiliki gambar error 404 di direktori assets

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray-100 py-10 sm:py-16 md:py-20 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl flex flex-col justify-center items-center px-4 sm:px-6">
          <img
            src={errorImage}
            alt="Error 404"
            className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-6 sm:mb-8"
          />
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Halaman Tidak Ditemukan
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
              Maaf, halaman yang Anda cari tidak ditemukan.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium hover:bg-secondary transition duration-300"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
