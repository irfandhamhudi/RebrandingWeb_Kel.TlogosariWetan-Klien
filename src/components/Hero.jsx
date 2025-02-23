import { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Impor ikon dari Lucide
import baner1 from "../assets/baner1.jpeg";
import baner2 from "../assets/baner2.png";

const images = [baner1, baner2];

const Hero = () => {
  const navigationPrevRef = useRef(null); // Ref untuk tombol prev
  const navigationNextRef = useRef(null); // Ref untuk tombol next

  return (
    <div className="relative px-4 lg:px-10 lg:py-5 py-2 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current, // Tombol prev kustom
          nextEl: navigationNextRef.current, // Tombol next kustom
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full aspect-[16/9] rounded-md"
        onBeforeInit={(swiper) => {
          // Assign ref ke Swiper instance
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
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
