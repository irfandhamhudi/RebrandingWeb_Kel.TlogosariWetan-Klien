import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sarana = () => {
  const navigate = useNavigate();

  // Data sarana dan prasarana dengan penjelasan
  const saranaData = [
    {
      id: 1,
      category: "SARANA",
      items: [
        {
          name: "Fukuda (Pengangkut Sampah)",
          description:
            "Kendaraan pengangkut sampah yang digunakan untuk mengumpulkan dan mengangkut sampah dari lingkungan kelurahan ke tempat pembuangan akhir.",
        },
        {
          name: "Mesin Potong Rumput",
          description:
            "Alat yang digunakan untuk memotong rumput di area publik seperti taman dan lapangan agar tetap rapi dan terawat.",
        },
        {
          name: "Meja",
          description:
            "Meja kantor yang digunakan oleh pegawai kelurahan untuk mendukung aktivitas administrasi dan pelayanan masyarakat.",
        },
        {
          name: "Kursi",
          description:
            "Kursi kantor yang nyaman untuk digunakan oleh pegawai dan tamu yang berkunjung ke kantor kelurahan.",
        },
        {
          name: "Lemari Arsip",
          description:
            "Lemari penyimpanan dokumen dan arsip penting kelurahan untuk memastikan keamanan dan kerapian administrasi.",
        },
        {
          name: "Telepon",
          description:
            "Alat komunikasi yang digunakan untuk berkoordinasi dengan instansi lain dan melayani masyarakat.",
        },
        {
          name: "Komputer",
          description:
            "Perangkat komputer yang digunakan untuk mendukung pekerjaan administrasi, pengolahan data, dan pelayanan publik.",
        },
        {
          name: "Printer",
          description:
            "Alat cetak dokumen yang digunakan untuk mencetak surat, laporan, dan dokumen resmi kelurahan.",
        },
        {
          name: "TV",
          description:
            "Televisi yang digunakan untuk keperluan presentasi, sosialisasi program, atau hiburan di ruang tunggu.",
        },
        {
          name: "Kulkas",
          description:
            "Lemari pendingin yang digunakan untuk menyimpan bahan makanan atau minuman di kantor kelurahan.",
        },
        {
          name: "Dispenser",
          description:
            "Alat penyedia air minum yang digunakan untuk menyediakan air minum bagi pegawai dan tamu.",
        },
        {
          name: "Proyektor LCD",
          description:
            "Alat presentasi yang digunakan untuk menampilkan materi dalam rapat, pelatihan, atau sosialisasi program.",
        },
      ],
    },
    {
      id: 2,
      category: "PRASARANA",
      items: [
        {
          name: "Gedung Kantor",
          description:
            "Bangunan utama kantor kelurahan yang digunakan sebagai pusat administrasi dan pelayanan masyarakat.",
        },
        {
          name: "Rumah Dinas",
          description:
            "Fasilitas perumahan yang disediakan untuk pegawai kelurahan yang bertugas di wilayah tersebut.",
        },
        {
          name: "Balai Pertemuan",
          description:
            "Tempat pertemuan yang digunakan untuk rapat, pelatihan, atau kegiatan kemasyarakatan lainnya.",
        },
      ],
    },
  ];

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
            <p className="text-white font-semibold">Sarana dan Prasarana</p>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10 min-h-screen space-y-5">
          <div className="lg:text-md border lg:w-[240px] border-font1 border-opacity-50 bg-bg1 py-2 px-7 lg:px-5">
            <p>Sarana dan Prasarana</p>
          </div>

          {/* Deskripsi Sarana dan Prasarana */}
          <div className="text-justify">
            <p>
              Kelurahan Tlogosari Wetan mempunyai fasilitas pendukung yang dapat
              memudahkan aktivitas pegawai dalam bekerja dan kegiatan
              kemasyarakatan.
            </p>
          </div>

          {/* Daftar Sarana dan Prasarana */}
          <div className="space-y-6">
            {saranaData.map((data) => (
              <div key={data.id} className="space-y-4">
                <h2 className="text-xl font-semibold">{data.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.items.map((item, index) => (
                    <div
                      key={index}
                      className="border border-font1 border-opacity-50 bg-bg1 p-7 lg:p-7"
                    >
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Sarana;
