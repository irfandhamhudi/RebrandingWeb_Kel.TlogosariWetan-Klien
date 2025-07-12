import imgfooter1 from "../assets/footer_1.png";
import imgfooter2 from "../assets/footer_2.png";
import imgfooter3 from "../assets/footer_3.png";
import imgfooter4 from "../assets/footer_4.png";

const Footer = () => {
  return (
    <div>
      {/* Bagian Gambar */}
      <div className="bg-primary p-4 lg:p-7">
        <div className="flex flex-wrap justify-center sm:gap-10 gap-4 mx-auto">
          <img
            src={imgfooter1}
            onClick={() =>
              window.open("https://v2.semarangkota.go.id/", "_blank")
            }
            alt="Footer 1"
            className="w-44 sm:w-48 cursor-pointer"
          />
          <img
            src={imgfooter2}
            onClick={() =>
              window.open("https://smartcity.semarangkota.go.id/", "_blank")
            }
            alt="Footer 2"
            className="w-24 sm:w-32 cursor-pointer"
          />
          <img
            src={imgfooter3}
            onClick={() =>
              window.open("https://data.semarangkota.go.id/", "_blank")
            }
            alt="Footer 3"
            className="w-24 sm:w-32 cursor-pointer"
          />
          <img
            src={imgfooter4}
            onClick={() =>
              window.open("https://ppid.semarangkota.go.id/", "_blank")
            }
            alt="Footer 4"
            className="w-24 sm:w-32 cursor-pointer"
          />
        </div>
      </div>

      {/* Bagian Teks */}
      <div className="bg-font1 text-white text-center p-2 sm:text-sm text-xs">
        <p>&copy; 2025 Tlogosari Wetan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
