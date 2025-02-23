import Header from "../components/Header";
import Hero from "../components/Hero";
import ktp from "../assets/ktp.png";
import kk from "../assets/kk.png";
import aktaKelahiran from "../assets/aktakelahiran.jpg";
import aktaKematian from "../assets/aktakematian.jpg";
import bukuNikah from "../assets/bukunikah.png";
import skck from "../assets/skck.png";
import suratPindah from "../assets/suratpindah.png";
import pbb from "../assets/pbb.png";
import img from "../assets/kel_tlogosari.jpg";
import img2 from "../assets/example.jpg";
import img3 from "../assets/example2.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const data = [
    { id: 1, title: "KTP", image: ktp },
    { id: 2, title: "Kartu Keluarga", image: kk },
    { id: 3, title: "Akta Kelahiran", image: aktaKelahiran },
    { id: 4, title: "Akta Kematian", image: aktaKematian },
    { id: 5, title: "Buku Nikah", image: bukuNikah },
    { id: 6, title: "SKCK", image: skck },
    { id: 7, title: "Surat Pindah", image: suratPindah },
    { id: 8, title: "PBB", image: pbb },
  ];

  const news = [
    {
      id: 1,
      title:
        "Pemkot Semarang Respon Cepat Tangani Tanggul Jebol di Kali Plumbon",
      date: "03/02/2025",
      time: "12:00",
      bidang: "Umum",
      description: `Pemerintah kota atau Pemkot Semarang melalui Dinas Pekerjaan Umum (DPU) bergerak cepat dalam menangani tanggul jebol di Kali Plumbon, Jalan Irigasi Utara, Kelurahan Mangunharjo, Kecamatan Tugu. Langkah penanganan darurat pun langsung dilakukan untuk mengurangi potensi kerugian yang lebih besar.Tanggul Kali Plumbon jebol pada Minggu (2/2) sekitar pukul 20.00 WIB akibat tingginya debit air yang berasal dari hujan deras di wilayah hulu, yakni Mijen dan Ngaliyan. Akibatnya terjadilah limpasan air dan tanggul sepanjang 2,5 meter yang mengalami kerusakan sehingga berdampak pada lima rumah warga di RT 4 RW 5 Kelurahan Mangunharjo. Kepala DPU Kota Semarang, Soewarto menjelaskan bahwa selain tanggul yang jebol, beberapa titik di sepanjang aliran Kali Plumbon juga mengalami limpasan air. “Ketika debit terlalu besar, tanggul kritis tidak mampu menahan sehingga terjadi jebol dan beberapa titik lainnya mengalami limpasan,” ujarnya. Setelah menerima laporan kejadian, DPU Kota Semarang langsung melakukan penanganan darurat dengan memasang cerucuk bambu dan sandbag sebagai penguatan sementara. “Pagi ini, 3 Februari, sudah kami lakukan penanganan awal untuk meminimalisir dampak le bih lanjut. Kami juga langsung berkoordinasi dengan BBWS Pemali Juwana mengingat Kali Plumbon berada dalam kewenangan mereka,” ungkap Soewarto. Selain itu, DPU bersama Kecamatan Tugu juga melakukan pembersihan aliran sungai dengan menyingkirkan batang pohon dan ranting yang menghambat laju air Kali Plumbon. “Kami bersihkan menggunakan senso dan menarik material penghambat keluar dari aliran sungai agar air bisa mengalir lancar,” tambahnya. Tak hanya menangani tanggul jebol di Tugu, DPU Kota Semarang juga terus melakukan berbagai upaya guna mengantisipasi banjir di titik-titik rawan genangan lainnya. Beberapa langkah yang dilakukan meliputi pengerukan sedimentasi di saluran air Jalan Untung Suropati, Ngaliyan, pembuatan inlet di Jalan Prof. Hamka, Tambakaji, pengerukan sedimentasi saluran di Bukit Emerald Meteseh, penanganan sampah dan enceng gondok di saluran Anjasmoro Semarang Indah, serta pembersihan sampah dan batang pohon yang menghambat aliran Kali Plumbon. “Penanganan lainnya juga dilakukan di Kaligawe yang masih mengalami genangan. Ini masih kami upayakan untuk terus kita pompa. Baik itu pompa yang posisinya di rumah pompa atau pompa yang mobile,” terangnya. Pihak Pemkot Semarang juga terus berkoordinasi dengan BBWS karena ada kewenangan kementerian untuk penanganan Kaligawe.DPU Kota Semarang berkomitmen untuk terus melakukan pemantauan dan tindakan cepat dalam penanganan banjir guna mencegah dampak lebih luas terhadap masyarakat.`,
      image: img,
    },
    {
      id: 2,
      title:
        "Atasi Genangan di Kali Tenggang, Pemkot Semarang Tambah 2 Unit Pompa Portable",
      date: "04/02/2025",
      time: "07:50",
      bidang: "Sarana Prasarana",
      description: `Menindaklanjuti keluhan masyarakat terkait tidak berfungsinya pompa Kali Tenggang, Pemerintah Kota atau Pemkot Semarang melalui Dinas Pekerjaan Umum (DPU) gerak cepat dengan menempatkan pompa milik BPBD dan pompa Madukoro untuk mempercepat penyedotan genangan air di wilayah Kaligawe.Kepala DPU Kota Semarang, Suwarto, menjelaskan bahwa pompa yang berada di lokasi tersebut sebenarnya berada di bawah kewenangan Balai Besar Wilayah Sungai (BBWS) Pemali Juana. Namun, Pemkot Semarang tetap berinisiatif memberikan bantuan sesuai kapasitas yang dimiliki.
      "Pompa di Kali Tenggang merupakan tanggung jawab BBWS. Namun, kami tetap berkoordinasi dan turut membantu dengan menempatkan pompa milik BPBD di lokasi tersebut serta menyiapkan suplai BBM untuk operasionalnya," ujar Suwarto.
      Lebih lanjut, dirinya menjelaskan jika pompa-pompa tersebut ditempatkan di titik-titik strategis, seperti di Rumah Pompa Tenggang, belakang Terminal Terboyo, Jalan Padi Raya dan kawasan Gebanganom, sebagai upaya guna mempercepat penyedotan genangan air.
      "Meskipun pompa milik BPBD sudah kami tempatkan di sana, tantangan utama tetap ada, yaitu pasokan BBM. Kami terus berkoordinasi dengan BBWS agar solusi yang lebih permanen bisa segera ditemukan," tambahnya.
      Suwarto menegaskan bahwa meski Pemkot Semarang memiliki keterbatasan dalam menangani infrastruktur yang bukan menjadi kewenangannya, koordinasi lintas instansi secara intens terus dilakukan. Pemkot Semarang juga tengah mengupayakan tambahan pompa portable untuk mempercepat proses penanganan banjir.
      Sementara itu, hingga Selasa (4/2) siang ini, kondisi di kawasan Kaligawe terpantau sudah kering berkat upaya penanganan yang terus dilakukan Pemerintah Kota Semarang termasuk optimalisasi pompa. "Alhamdulillah, Kaligawe sudah kering. Kami akan terus memantau situasi di lapangan. Semoga masyarakat bisa kembali beraktivitas seperti biasa," tutup Suwarto.`,
      image: img2,
    },
    {
      id: 3,
      title:
        "Genangan Air di Tlogosari Kulon Cepat Surut, Pemkot Semarang Intens Upayakan Mitigasi",
      date: "05/02/2025",
      time: "12:00",
      bidang: "Umum",
      description: `Kondisi genangan yang sempat terjadi di wilayah Tlogosari Kulon akibat intensitas hujan yang sangat tinggi pada Kamis (1/2) dan Minggu (3/2) lalu kini telah surut sepenuhnya. Hal ini disampaikan Kepala Dinas Pekerjaan Umum Kota Semarang, Suwarto, berdasarkan laporan langsung dari lapangan.
      "Saya sudah berkomunikasi juga dengan Pak Lurah, kondisi di lapangan per kemarin (Senin, 3 Februari) siang sudah kering. Dua lokasi di Jalan Udan Riris II dan Truntum V, yang merupakan titik terendah, sudah kering semua," ujar Suwarto.
      Menurutnya, dibandingkan kondisi sebelumnya, air surut dengan lebih cepat. "Biasanya surut paling lama, sekarang sudah surut. Secara perhitungan cepat surut, genangan yang terjadi Kamis (1/2) dan Jumat (2/2) sudah surut. Kemudian terjadi genangan lagi pada Minggu (3/2) akibat hujan lebat. Sekarang posisi sudah terkendali, surut semua," terang Suwarto.
      Selain laporan dari Dinas PU, Lurah Tlogosari Kulon, Hananto Lesworo, juga telah mengecek langsung ke lapangan, termasuk di dua lokasi yang sebelumnya tergenang, yakni SDN Tlogosari Kulon 6 dan RW 11 Tlogosari Kulon.
      Di Jalan Satrio Manah I dan SDN Tlogosari Kulon 6, kondisi saat ini sudah kering tanpa ada sisa genangan. Hananto memastikan bahwa pihaknya terus berkoordinasi dengan berbagai instansi untuk menangani persoalan genangan air di wilayahnya.
      "Kami telah melakukan pengecekan langsung ke beberapa lokasi yang sebelumnya tergenang. Alhamdulillah, saat ini kondisi sudah surut dan kering. Namun, kami tetap mengantisipasi agar kejadian serupa bisa diminimalisir ke depannya," ungkap Hananto.
      Sebagai upaya mitigasi, pihak kelurahan telah mengajukan surat resmi kepada Dinas PU Kota Semarang untuk pembangunan pintu air guna mengendalikan aliran air dari Sungai Tlogosari Raya ke Saluran Gajah Birowo. "Kami berharap pintu air ini dapat membantu mengurangi risiko genangan, terutama saat curah hujan tinggi," tambahnya.`,
      image: img3,
    },
    {
      id: 4,
      title:
        "Pemkot Semarang Gerak Cepat Lakukan Perbaikan Jalan Kota Terdampak Genangan",
      date: "13/02/2025",
      time: "08:00",
      bidang: "Berita",
      description: `Pemerintah Kota atau Pemkot Semarang melalui Dinas Pekerjaan Umum (DPU) gerak cepat melakukan perbaikan jalan di wilayah kota Semarang yang berlubang akibat genangan beberapa hari terakhir. Kepala DPU Kota Semarang, Soewarto, menegaskan bahwa perbaikan jalan berlubang telah dilakukan dengan berbagai metode, seperti Asphalt Concrete – Wearing Course (AC-WC) serta metode manual lontang-lanting. Langkah ini dilakukan bertahap dan akan terus berlanjut dalam beberapa minggu ke depan untuk memastikan kenyamanan dan keselamatan pengguna jalan.
      Dalam menangani perbaikan jalan, DPU Kota Semarang menerapkan strategi berbasis kondisi cuaca dan jenis perkerasan jalan. Aspal menjadi pilihan utama karena fleksibilitasnya, namun memiliki kelemahan terhadap genangan air. Beton lebih kuat dan tahan lama, tetapi lebih mahal serta kurang nyaman bagi kendaraan di dalam kota. Oleh karena itu, kombinasi aspal dan beton digunakan secara tepat guna menyesuaikan kebutuhan setiap lokasi.
      "Soal perbaikan jalan, tantangan utamanya adalah musim hujan. Aspal mudah rusak kalau sering tergenang air. Makanya, kami prioritaskan perbaikan di musim kemarau agar hasilnya lebih optimal," ujar Soewarto saat diwawancarai di Balaikota, Rabu (12/2).
      Lebih jauh, Soewarto menerangkan beberapa titik yang telah mendapatkan perbaikan antara lain, sebagian Jalan Pandanaran, Jalan Pemuda, Jalan Prof. Hamka, Jalan Piere Tendean, Jalan KH Ahmad Dahlan, Gombel Lama, Simongan dan juga jalan-jalan kecil di berbagai titik seperti Grafika. Selain itu, DPU Kota Semarang juga akan menggelar rapat koordinasi untuk menentukan strategi peningkatan jalan di Gunungpati dan area lain yang sudah didata bersama Badan Perencanaan Pembangunan Daerah (Bappeda) Kota Semarang.
      Anggaran pemeliharaan jalan telah dialokasikan dalam APBD Pemerintah Kota Semarang tahun 2025. Khusus untuk perbaikan rutin, DPU Kota Semarang memastikan bahwa anggaran ini akan digunakan secara optimal untuk perawatan dan peningkatan infrastruktur jalan demi kelancaran mobilitas masyarakat.
      Banyak masyarakat belum memahami bahwa tidak semua jalan di Kota Semarang menjadi tanggung jawab DPU. Soewarto pun menjelaskan mengenai pembagian kewenangan jalan di mana jalan lingkungan menjadi kewenangan Dinas Perumahan dan Permukiman (Disperkim) Kota Semarang.
      "Sementara untuk jalan kota merupakan kewenangan DPU Kota Semarang. Adapun jalan Provinsi merupakan kewenangan Dinas Bina Marga Provinsi Jawa Tengah. Sedangkan jalan nasional menjadi kewenangan Balai Besar Jalan Nasional," ungkap Soewarto.
      Dengan adanya pembagian ini, masyarakat diharapkan dapat melaporkan kondisi jalan ke instansi yang sesuai agar perbaikan dapat dilakukan lebih cepat dan tepat sasaran.
      DPU Kota Semarang berkomitmen untuk terus memperbaiki infrastruktur jalan dengan pendekatan strategis. Perbaikan dilakukan secara bertahap sesuai dengan prioritas, anggaran, dan kondisi lapangan. "Dengan strategi yang tepat, kualitas jalan di Kota Semarang diharapkan terus meningkat, sehingga masyarakat dapat berkendara dengan lebih aman dan nyaman," pungkasnya.`,
      image: img3,
    },
  ];

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

        <div className="flex flex-col items-center text-font1 py-10 space-y-12">
          <div className="bg-primary px-4 lg:px-10 py-3 rounded text-white text-center text-md capitalize">
            <p>Layanan Kelurahan Tlogosari</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center space-y-5 transition-transform duration-300 hover:scale-105 cursor-pointer"
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
