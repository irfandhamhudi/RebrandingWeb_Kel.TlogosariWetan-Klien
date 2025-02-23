// src/pages/Home.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { data } from "../components/data/data"; // Impor data layanan
import { news } from "../components/data/news"; // Impor data berita

const Home = () => {
  const navigate = useNavigate();

  const truncate = (str, n = 150) => {
    return str.length > n ? str.substring(0, n) + "..." : str;
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <Hero />

        {/* Bagian Layanan */}
        <div className="flex flex-col items-center text-font1 py-10 space-y-12">
          <div className="bg-primary px-4 lg:px-10 py-3 rounded text-white text-center text-md capitalize">
            <p>Layanan Kelurahan Tlogosari</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center space-y-5 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(item.link, "_blank")} // Buka link di tab baru
              >
                <div className="bg-white rounded w-44 h-44 flex items-center justify-center shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <p className="text-md font-semibold text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Berita */}
        <div className="flex flex-col items-center text-font1 py-10 space-y-12 px-4 md:px-0 ">
          <div className="bg-primary lg:px-10 px-5 py-3 rounded text-white text-center text-md capitalize">
            <p>Berita & Pengumuman Terbaru</p>
          </div>

          <div className="flex flex-col lg:flex-row w-full mx-auto space-y-6 lg:space-y-0 lg:space-x-6 px-5 md:px-28 justify-center">
            <div className="w-full lg:w-1/2 space-y-1 bg-bg1 shadow rounded p-7 sm:p-4">
              <img
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-auto rounded"
              />
              <div className="py-2 space-y-5 sm:space-y-4">
                <div className="lg:flex lg:justify-between flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 text-xs ">
                  <p className="bg-primary text-white py-1 px-2 rounded">
                    {news[0].bidang}
                  </p>
                  <p>
                    {news[0].date} / {news[0].time} WIB
                  </p>
                </div>
                <div className="space-y-2 ">
                  <h1
                    onClick={() => navigate(`/detail-berita/${news[0].title}`)}
                    className="sm:text-md text-lg font-semibold cursor-pointer hover:underline sm:text-left "
                  >
                    {news[0].title}
                  </h1>
                  <p className="text-sm sm:text-left ">
                    {truncate(news[0].description, 200)}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-5 ">
              {news.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 bg-bg1 shadow rounded p-7 sm:p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full sm:w-40 h-40 rounded"
                  />
                  <div className="flex flex-col space-y-4 sm:space-y-4">
                    <div className="lg:flex lg:justify-between flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 text-xs ">
                      <p className="bg-primary text-white py-1 px-2 rounded">
                        {item.bidang}
                      </p>
                      <p>
                        {item.date} / {item.time} WIB
                      </p>
                    </div>

                    <div className="space-y-2  w-full">
                      <h1
                        onClick={() => navigate(`/detail-berita/${item.title}`)}
                        className="sm:text-[16px] text-lg font-semibold cursor-pointer hover:underline sm:text-left "
                      >
                        {item.title}
                      </h1>
                      <p className="text-sm sm:text-left ">
                        {truncate(item.description, 90)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
