import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { getDataByTitle } from "../../utils/data/dataNewsAPI"; // Sesuaikan path-nya
import { HashLoader } from "react-spinners";

const DetailBerita = () => {
  const { title } = useParams(); // Ambil parameter `title` dari URL
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data berdasarkan title
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataByTitle(title); // Panggil fungsi getDataByTitle
        setData(result.data);
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  if (loading) {
    return (
      <div className="h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black bg-opacity-50 w-full flex">
        <HashLoader color="#C0392B" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Data tidak ditemukan.</p>
      </div>
    );
  }

  // Memisahkan deskripsi menjadi paragraf berdasarkan baris baru
  const descriptionParagraphs = data.description
    .split("\n")
    .map((paragraph, index) => (
      <p key={index} className="text-font1 mb-5 text-justify">
        {paragraph}
      </p>
    ));

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
            <p className="text-white font-semibold">Detail Berita</p>
          </div>
        </div>

        <div className="flex items-center justify-center container mx-auto px-4 lg:px-28 py-10">
          <div className="border  border-gray-300 bg-white  p-6 lg:p-7  lg:w-5/6">
            <h1 className="lg:text-2xl text-xl font-medium mb-4">
              {data.title}
            </h1>
            <div className="flex items-center lg:space-x-4 mb-5 text-sm lg:justify-start justify-between">
              <p className="bg-red-100 text-primary py-1 px-2 ">
                {data.bidang.name}
              </p>
              <p>
                {data.date} - {data.time} WIB
              </p>
            </div>
            {data.images.length > 0 && (
              <div className="w-full mb-5">
                <div className="flex flex-col space-y-4">
                  {data.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Gambar ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
            {/* Menampilkan deskripsi sebagai paragraf yang rapi */}
            <div className="text-font2">{descriptionParagraphs}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailBerita;
