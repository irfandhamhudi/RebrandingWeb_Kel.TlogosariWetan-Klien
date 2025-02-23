import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilKelurahan = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 lg:px-28 py-10 bg-primary">
          <div className="flex items-center space-x-2 text-sm">
            {/* <Home className="w-5 h-5 cursor-pointer text-font2" /> */}
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white"
            >
              Beranda
            </span>

            <ChevronRight className="w-4 h-4  cursor-pointer text-white" />
            <p className=" text-white font-semibold">Profil Kelurahan</p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-28 py-10 justify-center items-center flex flex-col">
          <p>Profil Kelurahan</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfilKelurahan;
