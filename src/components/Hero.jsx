import { useRef, useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllSlider } from "../utils/data/Slider"; // Pastikan path ini benar

const Hero = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [sliderData, setSliderData] = useState([]); // State untuk menyimpan URL gambar

  // Fetch data slider dari API
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await getAllSlider(); // Panggil fungsi untuk mengambil data slider

        // Ekstrak semua URL gambar dari array `images` di setiap item
        const imageUrls = response.data.flatMap((item) => item.images);

        // Simpan URL gambar ke state
        setSliderData(imageUrls);
      } catch (error) {
        console.error("Gagal mengambil data slider:", error);
      }
    };

    fetchSliderData();
  }, []); // Jalankan sekali saat komponen dimuat

  return (
    <div className="relative mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay diaktifkan
        loop={sliderData.length > 1} // Aktifkan loop hanya jika ada cukup slide
        className="w-full" // Tambahkan tinggi yang tetap
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {sliderData.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imageUrl} // Gunakan URL gambar dari API
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Tombol Navigasi Kustom */}
        <div
          ref={navigationPrevRef}
          className="absolute bottom-4 right-16 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all z-10 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all z-10 cursor-pointer"
        >
          <ChevronRight size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
