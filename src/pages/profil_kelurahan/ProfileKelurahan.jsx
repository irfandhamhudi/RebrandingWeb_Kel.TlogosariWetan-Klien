import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/kel_tlogosari.jpg"; // Ganti dengan path gambar Anda
import umkm1 from "../../assets/umkm1.jpg";

const ProfilKelurahan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-28 py-10 bg-primary">
          <div className="flex items-center space-x-2 text-sm">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white"
            >
              Beranda
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <p className="text-white font-semibold">Profil Kelurahan</p>
          </div>
        </div>

        {/* Konten Profil Kelurahan */}
        <div className="container mx-auto px-4 lg:px-28 py-10">
          <div className="lg:w-[220px] border border-font1 border-opacity-50 bg-bg1 p-4 mb-4">
            <p>Profil Tlogosari Wetan</p>
          </div>
          <div className="border border-opacity-50 border-font1 bg-bg1 p-3 md:p-5">
            {/* Layout Gambar dan Teks */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              {/* Gambar di sebelah kiri */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img} // Ganti dengan path gambar Anda
                  alt="Kelurahan Tlogosari Wetan"
                  className="w-full h-auto "
                />
              </div>

              {/* Teks di sebelah kanan */}
              <div className="w-full md:w-1/2">
                <div className="text-justify text-sm lg:text-md leading-loose space-y-4">
                  <p className="font-semibold text-lg text-font1">
                    Assalamu{"'"}alaikum Wr. Wb.
                  </p>
                  <p className="text-font1">
                    Sugeng rawuh dateng website{" "}
                    <span className="text-primary font-semibold">
                      Tlogosari Wetan.
                    </span>
                  </p>
                  <p className="text-font1">
                    Kelurahan Tlogosari Wetan merupakan salah satu kelurahan di
                    Kecamatan Pedurungan. Kelurahan Tlogosari Wetan berada di
                    <span className="font-semibold text-primary">
                      {" "}
                      Jl. Wolter Monginsidi Perum Dolog No.1, Kecamatan
                      Pedurungan, Kota Semarang 50196.
                    </span>{" "}
                    Secara Geografis Kelurahan Tlogosari Wetan merupakan dataran
                    rendah, dengan ketinggian antara 0-3 meter dari permukaan
                    air laut dengan curah hujan rata-rata 600mm per tahun.
                    Sebagaian besar wilayahnya terdiri dari tanah kosong dan
                    sebagian untuk pemukiman penduiduk. Letak Wilayah Kelurahan
                    Tlogosari Wetan dipinggiran kota yang berbatasan dengan
                    wilayah Kelurahan Bangetayu Kulon Kecamatan Genuk, tingkat
                    kemajuan daerahnya sangat ketinggalan apa bila dibandingkan
                    dengan kelurahan lain yang ada diwilayah Kecamatan
                    Pedurungan Kota Semarang, ini disebabkan karena masih
                    rendahnya tingkat Sumber Daya Manusia ( SDM ), dan tingkat
                    masyarakat yang kurang.
                  </p>
                  <p className="font-semibold text-lg text-font1">
                    Wassalamu{"'"}alaikum Wr. Wb.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UMKM Unggulan */}
        <div className="container mx-auto px-4 lg:px-28">
          <div className="lg:w-[310px] border border-font1 border-opacity-50 bg-bg1 p-4 mb-4">
            <p>UMKM Unggulan Tlogosari Wetan</p>
          </div>
          <div className="border border-opacity-50 border-font1 bg-bg1 p-3 md:p-7">
            <div className="flex flex-col md:flex-row  items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              {/* Gambar UMKM */}
              <div className="w-full md:w-1/2 flex flex-col  md:flex-row gap-4 md:gap-4">
                <img
                  src={umkm1}
                  alt="UMKM 1"
                  className="w-full md:w-full h-[515px] object-cover"
                />
              </div>

              {/* Teks Deskripsi UMKM */}
              <div className="w-full md:w-1/2">
                <div className="text-justify text-sm md:text-md leading-loose space-y-4">
                  <p className="font-semibold text-font1 text-lg">
                    Bonggol Pisang Khas Tlogosari Wetan
                  </p>
                  <p className="text-font1">
                    Bahan dasar dari Bonggol Pisang merupakan UMKM unggulan dari
                    Kelurahan Tlogosari Wetan. Berawal dari kelompok warga
                    masyarakat yang mayoritas mempunyai usaha kuliner kripik
                    bonggol pisang dan mata pencahariannya sebagaian besar
                    adalah pembuatan makanan, jajanan, souvenir yang terletak di
                    RT.05 RW.04 yang terediri dari 60 Kepala Keluarga. Dengan
                    demikian Kepala Lurah Tlogosari Wetan usaha kuliner dari
                    bonggol pisang di jadikan keunggulannya.
                  </p>
                  <p className="text-font1">
                    Kandungan gizi bonggol pisang terdiri dari energi sebesar 43
                    kilokalori, protein 0,6 gram, karbohidrat 11,6 gram, kalsium
                    15 miligram, fosfor 60 miligram dan zat besi 1 miligram.
                    Selain itu di dalam bonggol pisang juga terkandung vitamin
                    B1 0,01 miligram dan vitamin C 12 miligram. Hal tersebut
                    dari penelitian 100 gram bonggol pisang dengan jumlah yang
                    dimakan sebanyak 100% Sumber : Direktorat Gizi, Depkes RI
                    (1981) dalam Rukmana, R. (2005).
                  </p>
                  <p className="text-font1">
                    Harga kuliner dengan bahan baku bonggol pisang sangat lah
                    terjangkau dari kalangan manapun dengan harga berkisar dari
                    Rp. 2.500,-. Bisa di pesan langsung ke tempat atau lokasi di
                    Tlogosari Wetan RT.05 RW.04 rumah Bp. Tolkah atau bisa
                    menghubungi Bp. Tolkah +62 822-2358-0764.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lokasi Tlogosari Wetan */}
        <div className="container mx-auto px-4 lg:px-28 p-10">
          <div className="lg:w-[230px] border border-font1 border-opacity-50 bg-bg1 p-4 mb-4">
            <p>Lokasi Tlogosari Wetan</p>
          </div>
          <div className="border border-opacity-50 border-font1 bg-bg1 md:p-7">
            {/* Embed Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789012!2d110.4662907!3d-6.9924176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cd8c5fc3715%3A0x9bf8fff6007b754c!2sKantor%20Kelurahan%20Tlogosari%20Wetan!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default ProfilKelurahan;
