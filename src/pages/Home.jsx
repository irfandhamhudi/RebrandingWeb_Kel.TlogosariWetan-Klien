// src/pages/Home.js
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { data } from "../components/data/data"; // Impor data layanan
import { getAllData } from "../utils/data/dataNewsAPI"; // Impor fungsi untuk mengambil data berita
import { formatTitleForURL } from "../utils/formatTitle";
import { User, Building2, Building, Map } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await getAllData();
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();

    return () => {
      setNewsData([]);
    };
  }, []);

  const truncateText = (text, maxLength) => {
    if (!text) return ""; // Jika text undefined atau null, kembalikan string kosong
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <Hero />

        {/* Kependudukan */}
        <div className="flex flex-col items-center text-font1 py-10 space-y-12">
          <div className="lg:text-md border  border-gray-300 bg-white py-2 px-7 lg:px-10">
            <p>Kependudukan Kelurahan </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 md:px-28">
            <div className="relative border  border-gray-300 bg-white p-10 lg:p-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-primary p-2 rounded-full">
                <User />
              </div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">9080</p>
                <p className="text-xs">Jumlah Penduduk</p>
              </div>
            </div>

            <div className="relative border  border-gray-300 bg-white p-10 lg:p-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-primary p-2 rounded-full">
                <User />
              </div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">4550</p>
                <p className="text-xs">Jumlah Penduduk Laki-laki</p>
              </div>
            </div>

            <div className="relative border  border-gray-300 bg-white p-10 lg:p-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-primary p-2 rounded-full">
                <User />
              </div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">4550</p>
                <p className="text-xs">Jumlah Penduduk Perempuan</p>
              </div>
            </div>

            <div className="relative border  border-gray-300 bg-white p-10 lg:p-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-primary p-2 rounded-full">
                <Building2 />
              </div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">46</p>
                <p className="text-xs">Jumlah RT</p>
              </div>
            </div>
            <div className="relative border  border-gray-300 bg-white p-10 lg:p-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-primary p-2 rounded-full">
                <Building />
              </div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">4</p>
                <p className="text-xs">Jumlah RW</p>
              </div>
            </div>
            <div className="relative border  border-gray-300 bg-white p-10 lg:p-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white bg-primary p-2 rounded-full">
                <Map />
              </div>
              <div className="text-center mt-5">
                <p className="font-semibold text-2xl">± 125,515 Ha</p>
                <p className="text-xs">Luas Wilayah </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Berita */}
        <div className="flex flex-col items-center text-font1 py-10 space-y-5 px-4 md:px-0 ">
          <div className="lg:flex lg:justify-between items-center lg:w-full lg:px-28 flex ">
            <p className="lg:text-md border border-gray-300 bg-white py-2 px-7 lg:px-5">
              Berita & Pengumuman Terbaru
            </p>
            <p
              onClick={() => navigate("/berita")}
              className="cursor-pointer hover:underline hidden lg:block"
            >
              Lihat semua
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full mx-auto space-y-6 lg:space-y-0 lg:space-x-6 px-5 md:px-28 justify-center">
            <div className="cursor-pointer w-full lg:w-1/2 space-y-1 border  border-gray-300 bg-white p-3 sm:p-4 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="overflow-hidden relative">
                <img
                  src={newsData[0]?.images[0]}
                  alt={newsData[0]?.title}
                  className="w-full h-auto transition-all duration-300 hover:scale-110 hover:brightness-75 "
                />
              </div>
              <div className="py-2 space-y-5 sm:space-y-4">
                <div className="lg:flex lg:justify-between flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 text-xs ">
                  <p className="bg-red-100 text-primary py-1 px-2 ">
                    {newsData[0]?.bidang.name}
                  </p>
                  <p>
                    {newsData[0]?.date} - {newsData[0]?.time} WIB
                  </p>
                </div>
                <div className="space-y-2 ">
                  <h1
                    onClick={() =>
                      navigate(
                        `/detail-berita/${formatTitleForURL(
                          newsData[0]?.title
                        )}`
                      )
                    }
                    className="sm:text-md text-lg font-semibold cursor-pointer hover:underline sm:text-left "
                  >
                    {truncateText(newsData[0]?.title, 100)}
                  </h1>
                  <p className="text-sm sm:text-left ">
                    {truncateText(newsData[0]?.description, 100)}{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-5 ">
              {newsData.slice(1, 4).map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 border  border-gray-300 bg-white  p-3 lg:p-4  transition-all duration-300 hover:scale-105 animate-fade-in"
                >
                  <div className="relative lg:w-1/2 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="object-cover w-full h-52 lg:w-full lg:h-40 transition-all duration-300 hover:scale-110 hover:brightness-75"
                    />
                  </div>
                  <div className="flex flex-col space-y-4 sm:space-y-4">
                    <div className="lg:justify-between flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 text-xs ">
                      <p className="bg-red-100 text-primary py-1 px-2 ">
                        {item.bidang.name}
                      </p>
                      <p>
                        {item.date} - {item.time} WIB
                      </p>
                    </div>

                    <div className="space-y-2 w-full">
                      <h1
                        onClick={() =>
                          navigate(
                            `/detail-berita/${formatTitleForURL(item.title)}`
                          )
                        }
                        className="sm:text-[16px] text-lg font-semibold cursor-pointer hover:underline sm:text-left "
                      >
                        {truncateText(item.title, 100)}
                      </h1>
                      <p className="text-sm sm:text-left ">
                        {truncateText(item.description, 100)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian Layanan */}
        <div className="flex flex-col items-center text-font1 py-10 space-y-10">
          <div className="lg:text-md border  border-gray-300 bg-white py-2 px-4 lg:px-10">
            <p>Layanan Kelurahan Tlogosari</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 md:px-0">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center space-y-5 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(item.link, "_blank")} // Buka link di tab baru
              >
                <div className="border border-gray-300 bg-white w-64 h-64 lg:w-46 lg:h-44 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="lg:w-24 lg:h-24 w-36 h-36 object-contain"
                  />
                </div>
                <p className="text-sm text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
