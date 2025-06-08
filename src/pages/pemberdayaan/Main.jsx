import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDataByBidang } from "../../utils/data/dataNewsAPI";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { HashLoader } from "react-spinners";
import ErrorNews from "../error/errorNews";
import { formatTitleForURL } from "../../utils/formatTitle";

const Pemberdayaan = () => {
  const navigate = useNavigate();
  const { bidang } = useParams(); // Ambil parameter bidang dari URL
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data berdasarkan bidang
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataByBidang(bidang);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [bidang]);

  if (loading) {
    return (
      <div className="h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black bg-opacity-50 w-full flex">
        <HashLoader color="#C0392B" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-xl font-semibold bg-red-500 text-white px-5 py-3 rounded-md">
          Terjadi kesalahan: {error}
        </h1>
      </div>
    );
  }

  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Jika text undefined atau null, kembalikan string kosong
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="flex-grow">
        <div className="container mx-auto px-4 lg:px-28 py-10 bg-primary">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white"
            >
              Beranda
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <span
              onClick={() => navigate("/pemberdayaan")}
              className="text-white cursor-pointer"
            >
              Pemberdayaan
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <span className="text-white">{bidang}</span>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="container mx-auto px-4 lg:px-28 py-10 flex-grow">
          {data.length > 0 && (
            <h1 className="lg:w-[230px] border  border-gray-300 bg-white  p-4 mb-4">
              Total{" "}
              <span className="font-semibold text-font1">{data.length}</span>{" "}
              Berita ditemukan
            </h1>
          )}
          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="border  border-gray-300 bg-white  p-4 transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  {/* Layout Gambar dan Konten */}
                  <div className="lg:flex items-start gap-4">
                    {/* Gambar */}
                    {item.images.length > 0 && (
                      <div className="relative overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={`Gambar ${item.title}`}
                          className="lg:w-36 lg:h-36 object-cover transition-all duration-300 hover:scale-110 hover:brightness-75"
                        />
                      </div>
                    )}

                    {/* Konten (Judul, Deskripsi, dll.) */}
                    <div className="flex-1">
                      <div className="lg:justify-between flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 text-xs lg:mb-2 mt-3 lg:mt-0">
                        <p className="bg-red-100 text-primary py-1 px-2">
                          {item.bidang.name}
                        </p>
                        <p>
                          {item.date} - {item.time} WIB
                        </p>
                      </div>
                      <h1
                        onClick={() =>
                          navigate(
                            `/detail-berita/${formatTitleForURL(item.title)}`
                          )
                        }
                        className="lg:text-lg text-lg font-semibold cursor-pointer hover:underline mt-5 lg:mt-0 transition-all duration-200 hover:text-primary"
                      >
                        {truncateText(item.title, 60)}
                      </h1>
                      <p className="text-gray-700 mb-4 text-sm">
                        {truncateText(item.description, 100)}
                      </p>
                    </div>
                  </div>

                  {/* Gambar Lainnya (Jika Ada) */}
                  {item.images.length > 1 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                      {item.images.slice(1).map((image, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-md"
                        >
                          <img
                            src={image}
                            alt={`Gambar ${index + 2}`}
                            className="w-24 h-24 object-cover rounded-md transition-all duration-300 hover:scale-110 hover:brightness-75"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <ErrorNews />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pemberdayaan;
