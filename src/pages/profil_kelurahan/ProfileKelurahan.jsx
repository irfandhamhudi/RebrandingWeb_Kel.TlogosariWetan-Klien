import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/kel_tlogosari.jpg"; // Ganti dengan path gambar Anda
import img2 from "../../assets/geo.png";
import umkm1 from "../../assets/umkm1.jpg";
import umkm2 from "../../assets/umkm2.jpeg";
import umkm3 from "../../assets/umkm3.jpg";

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
          <div className="text-lg md:text-xl font-semibold capitalize mb-5">
            <p>Profil Kelurahan</p>
          </div>
          <div className="bg-white rounded shadow p-6 md:p-10">
            {/* Layout Gambar dan Teks */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              {/* Gambar di sebelah kiri */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img} // Ganti dengan path gambar Anda
                  alt="Kelurahan Tlogosari Wetan"
                  className="w-full h-auto rounded shadow"
                />
              </div>

              {/* Teks di sebelah kanan */}
              <div className="w-full md:w-1/2">
                <div className="text-justify text-sm md:text-md leading-loose space-y-4">
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
                </div>
              </div>
            </div>

            {/* Kondisi Geografis */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                {/* Gambar di sebelah kiri */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={img2} // Ganti dengan path gambar Anda
                    alt="Kelurahan Tlogosari Wetan"
                    className="w-full h-auto rounded shadow"
                  />
                </div>

                {/* Teks di sebelah kanan */}
                <div className="w-full md:w-1/2">
                  <div className="text-justify text-sm md:text-md leading-loose space-y-2">
                    <p className="font-semibold text-lg text-font1">
                      Kondisi Geografis
                    </p>
                    <p className="text-font1">
                      Luas Wilayah{" "}
                      <span className="font-semibold">
                        {"\u00B1"} 125.515 Ha
                      </span>
                    </p>
                    <p>Batas-batas Wilayah : </p>
                    <p>
                      Sebelah Utara :{" "}
                      <span className="font-semibold">
                        Kelurahan Bangetayu Kulon
                      </span>{" "}
                    </p>
                    <p>
                      Sebelah Timur :{" "}
                      <span className="font-semibold">
                        Kelurahan Tlogomulyo
                      </span>{" "}
                    </p>
                    <p>
                      Sebelah Selatan :{" "}
                      <span className="font-semibold">
                        {" "}
                        Kelurahan Pedurungan Tengah{" "}
                      </span>
                    </p>
                    <p>
                      Sebelah Barat :{" "}
                      <span className="font-semibold">
                        Kelurahan Tlogosari Kulon
                      </span>{" "}
                    </p>
                    <div className="mt-8">
                      <h2 className="font-semibold text-lg text-font1 mb-4">
                        Kondisi Demografi
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Jumlah Penduduk */}
                        <div className="text-sm space-y-2 leading-loose">
                          <p className="font-semibold text-font1 text-md">
                            Jumlah Penduduk (Februari 2024)
                          </p>
                          <p className="text-font1">Total: 9.080 jiwa</p>
                          <p className="text-font1">Laki-laki: 4.550 jiwa</p>
                          <p className="text-font1">Perempuan: 4.530 jiwa</p>
                        </div>

                        {/* Jumlah RW dan RT */}
                        <div className="text-sm space-y-2 leading-loose">
                          <p className="font-semibold text-font1 text-md">
                            Jumlah RW dan RT
                          </p>
                          <p className="text-font1">Jumlah RW: 4</p>
                          <p className="text-font1">
                            - RW I : terdiri dari{" "}
                            <span className="font-semibold">13</span> RT
                          </p>
                          <p className="text-font1">
                            - RW II : terdiri dari{" "}
                            <span className="font-semibold">10</span> RT
                          </p>
                          <p className="text-font1">
                            - RW III : terdiri dari{" "}
                            <span className="font-semibold">12</span> RT
                          </p>
                          <p className="text-font1">
                            - RW IV : terdiri dari{" "}
                            <span className="font-semibold">11</span> RT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UMKM Unggulan */}
        <div className="container mx-auto px-4 lg:px-28">
          <div className="text-lg md:text-xl font-semibold capitalize mb-5">
            <p>UMKM Unggulan Tlogosari Wetan</p>
          </div>
          <div className="bg-white rounded shadow p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              {/* Gambar UMKM */}
              <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 md:gap-0">
                <img
                  src={umkm1}
                  alt="UMKM 1"
                  className="w-full md:w-1/3 h-auto rounded object-cover"
                />
                <img
                  src={umkm2}
                  alt="UMKM 2"
                  className="w-full md:w-1/3 h-auto rounded object-cover"
                />
                <img
                  src={umkm3}
                  alt="UMKM 3"
                  className="w-full md:w-1/3 h-auto rounded object-cover"
                />
              </div>

              {/* Teks Deskripsi UMKM */}
              <div className="w-full md:w-1/2">
                <div className="text-justify text-sm md:text-md leading-loose space-y-4">
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
          <div className="text-lg md:text-xl font-semibold capitalize mb-5">
            <p>Lokasi Tlogosari Wetan</p>
          </div>
          <div className="bg-white rounded shadow p-6 md:p-10">
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

        <Footer />
      </div>
    </div>
  );
};

export default ProfilKelurahan;
