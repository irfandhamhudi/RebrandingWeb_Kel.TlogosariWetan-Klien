import errorImage from "../../assets/error404.png"; // Pastikan Anda memiliki gambar error 404 di direktori assets

const ErrorNews = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <img src={errorImage} alt="Error 404" className="w-72 h-72 mb-8" />
        <div className="text-center ">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Tidak ada berita untuk bidang ini.
          </h1>
          <p className="text-gray-600 mb-8">
            Silakan cek kembali nanti atau pilih bidang lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorNews;
