import errorImage from "../../assets/error404.png"; // Pastikan Anda memiliki gambar error 404 di direktori assets

const ErrorNews = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl flex flex-col justify-center items-center px-4 sm:px-6 py-10 sm:py-16 md:py-20">
        <img
          src={errorImage}
          alt="Error News"
          className="w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 mb-6 sm:mb-8"
        />
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Tidak ada berita untuk bidang ini.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
            Silakan cek kembali nanti atau pilih bidang lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorNews;
