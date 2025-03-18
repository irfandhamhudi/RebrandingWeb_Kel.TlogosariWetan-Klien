import { X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo-kota-semarang.png";
import { createServiceComplain } from "../data/serviceComplain";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
    images: [],
    // previewImages: [], // Tambahkan ini
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (formData.images.length + files.length > 5) {
      toast.error("Maksimal 5 gambar.");
      return;
    }

    const newFileURLs = files.map((file) => URL.createObjectURL(file));

    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
      previewImages: [...(prevData.previewImages || []), ...newFileURLs], // Pastikan prevData.previewImages ada
    }));
  };

  const removeImage = (index) => {
    setFormData((prevData) => {
      const updatedFiles = prevData.images.filter((_, i) => i !== index);
      const updatedPreviews = (prevData.previewImages || []).filter(
        (_, i) => i !== index
      ); // Pastikan prevData.previewImages ada
      return {
        ...prevData,
        images: updatedFiles,
        previewImages: updatedPreviews,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Membuat FormData untuk mengirim file
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("msg", formData.msg);

      // Menambahkan file ke FormData
      formData.images.forEach((file) => {
        formDataToSend.append(`images`, file);
      });

      // Memanggil fungsi createServiceComplain
      const response = await createServiceComplain(formDataToSend);

      if (response.success) {
        toast.success(response.message);
        setIsModalOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          msg: "",
          images: [],
          // previewImages: [],
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const isMenuActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {isLoading && (
        <div className="h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black bg-opacity-50 w-full flex z-50">
          <HashLoader color="#C0392B" size={50} />
        </div>
      )}
      {/* Navbar */}
      <div className="relative p-4 border-b flex items-center justify-between px-4 md:px-28 bg-bg1">
        <div className="flex gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Kota Semarang"
              className="lg:w-16 lg:h-16 w-12 h-12"
            />
          </Link>
          <div>
            <h1 className="font-semibold lg:text-xl text-font1">Kelurahan </h1>
            <h2 className="font-semibold lg:text-xl text-font1">
              Tlogosari Wetan
            </h2>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          <Menu size={24} className="text-font2" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 capitalize relative">
          <li
            className={`text-sm ${
              isMenuActive("/")
                ? "text-primary font-semibold"
                : "text-font2 font-normal hover:text-primary hover:font-semibold"
            }`}
          >
            <Link to="/">Beranda</Link>
          </li>
          {[
            {
              label: "Profil Kelurahan",
              path: "/profil-kelurahan",
              submenus: [
                { label: "Visi Misi", path: "/visi-misi" },
                {
                  label: "Struktur Pemerintahan",
                  path: "/struktur-pemerintahan",
                },
                { label: "Sarana Prasarana", path: "/sarana-prasarana" },
                { label: "Sumber Daya Manusia", path: "/sumber-daya-manusia" },
                { label: "Regulasi", path: "/regulasi" },
                { label: "Monografi Kelurahan", path: "/monografi" },
              ],
            },
            {
              label: "Kelembagaan",
              path: "/kelembagaan",
              submenus: [
                { label: "Umum", path: "/kelembagaan/Umum" },
                { label: "LPMK", path: "/kelembagaan/LPMK" },
                { label: "PKK", path: "/kelembagaan/PKK" },
                { label: "FKK", path: "/kelembagaan/FKK" },
                { label: "BKM", path: "/kelembagaan/BKM" },
              ],
            },
            {
              label: "Pemberdayaan",
              path: "/pemberdayaan",
              submenus: [
                { label: "Bidang Kamtibmas", path: "/pemberdayaan/Kamtibmas" },
                { label: "Bidang Kesehatan", path: "/pemberdayaan/Kesehatan" },
                {
                  label: "Bidang Pariwisata",
                  path: "/pemberdayaan/Pariwisata",
                },
                {
                  label: "Bidang Pendidikan",
                  path: "/pemberdayaan/Pendidikan",
                },
              ],
            },
          ].map((item, index) => (
            <li
              key={index}
              className={`text-sm relative ${
                isMenuActive(item.path)
                  ? "text-primary font-semibold"
                  : "text-font2 font-normal hover:text-primary hover:font-semibold"
              }`}
              onMouseEnter={() => toggleDropdown(item.label)}
              // onMouseLeave={closeDropdown}
            >
              <Link to={item.path}>{item.label}</Link>
              {openDropdown === item.label && (
                <ul
                  className="absolute left-0 mt-2 w-56 bg-white border border-gray-300 shadow-md p-3"
                  onMouseEnter={() => toggleDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  {item.submenus.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-font2 font-normal text-sm border-b p-2 hover:bg-primary hover:text-white cursor-pointer ${
                        isMenuActive(submenu.path)
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      <Link to={submenu.path}>{submenu.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li
            className={`text-sm ${
              isMenuActive("/galeri")
                ? "text-primary font-semibold"
                : "text-font2 font-normal hover:text-primary hover:font-semibold"
            }`}
          >
            <Link to="/galeri">Galeri</Link>
          </li>
          <li
            className={`text-sm ${
              isMenuActive("/berita")
                ? "text-primary font-semibold"
                : "text-font2 font-normal hover:text-primary hover:font-semibold"
            }`}
          >
            <Link to="/berita">Berita</Link>
          </li>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-secondary text-white py-2 px-4 text-sm "
          >
            Pengaduan Layanan
          </button>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-7 w-full max-w-sm relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-gray-500 hover:text-font2"
              >
                <X size={20} />
              </button>
              <ul className="flex flex-col gap-5 capitalize">
                <li
                  className={`text-sm ${
                    isMenuActive("/")
                      ? "text-primary font-semibold"
                      : "text-font2 font-normal"
                  }`}
                >
                  <Link to="/">Beranda</Link>
                </li>
                {[
                  {
                    label: "Profil Kelurahan",
                    path: "/profil-kelurahan",
                    submenus: [
                      { label: "Visi Misi", path: "/visi-misi" },
                      {
                        label: "Struktur Pemerintahan",
                        path: "/struktur-pemerintahan",
                      },
                      { label: "Sarana Prasarana", path: "/sarana-prasarana" },
                      {
                        label: "Sumber Daya Manusia",
                        path: "/sumber-daya-manusia",
                      },
                      { label: "Regulasi", path: "/regulasi" },
                      { label: "Monografi Kelurahan", path: "/monografi" },
                    ],
                  },
                  {
                    label: "Kelembagaan",
                    path: "/kelembagaan",
                    submenus: [
                      { label: "Umum", path: "/kelembagaan/Umum" },
                      { label: "LPMK", path: "/kelembagaan/LPMK" },
                      { label: "PKK", path: "/kelembagaan/PKK" },
                      { label: "FKK", path: "/kelembagaan/FKK" },
                      { label: "BKM", path: "/kelembagaan/BKM" },
                    ],
                  },
                  {
                    label: "Pemberdayaan",
                    path: "/pemberdayaan",
                    submenus: [
                      {
                        label: "Bidang Kamtibmas",
                        path: "/pemberdayaan/Kamtibmas",
                      },
                      {
                        label: "Bidang Kesehatan",
                        path: "/pemberdayaan/Kesehatan",
                      },
                      {
                        label: "Bidang Pariwisata",
                        path: "/pemberdayaan/Pariwisata",
                      },
                      {
                        label: "Bidang Pendidikan",
                        path: "/pemberdayaan/Pendidikan",
                      },
                    ],
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className={`text-sm relative ${
                      isMenuActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-font2 font-normal"
                    }`}
                  >
                    <Link to={item.path}>{item.label}</Link>
                    {item.submenus && (
                      <ul className="pl-4 mt-2">
                        {item.submenus.map((submenu, subIndex) => (
                          <li
                            key={subIndex}
                            className={`text-font2 font-normal text-sm border-b p-2 hover:bg-primary hover:text-white cursor-pointer ${
                              isMenuActive(submenu.path)
                                ? "bg-primary text-white"
                                : ""
                            }`}
                          >
                            <Link to={submenu.path}>{submenu.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                <li
                  className={`text-sm ${
                    isMenuActive("/galeri")
                      ? "text-primary font-semibold"
                      : "text-font2 font-normal"
                  }`}
                >
                  <Link to="/galeri">Galeri</Link>
                </li>
                <li
                  className={`text-sm ${
                    isMenuActive("/berita")
                      ? "text-primary font-semibold"
                      : "text-font2 font-normal"
                  }`}
                >
                  <Link to="/berita">Berita</Link>
                </li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-secondary text-white py-2 px-4 text-sm "
                >
                  Pengaduan Layanan
                </button>
              </ul>
            </div>
          </div>
        )}

        {/* Modal Pengaduan Layanan */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-0 text-sm px-4">
            <div className="bg-white p-7  w-full max-w-xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-font2"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-semibold text-font1 mb-10 text-center">
                Pengaduan Layanan
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm text-font2">
                    Nama <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-font2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-font2">
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border "
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-font2">
                    Isi Pengaduan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="msg"
                    value={formData.msg}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border "
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-font2">
                    Upload Bukti Pengaduan (Maksimal 5 Gambar){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    name="images"
                    onChange={handleFileChange}
                    className="mt-1 p-2 w-full border text-sm"
                    accept="image/*"
                    multiple
                    disabled={formData.images.length >= 5}
                  />
                </div>
                {formData.previewImages &&
                  formData.previewImages.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-font2">Preview Gambar:</p>
                      <div className="flex gap-2 flex-wrap">
                        {formData.previewImages.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="mt-5 md:w-20 md:h-20 w-20 h-20 object-cover border"
                            />
                            <button
                              onClick={() => removeImage(index)}
                              className="absolute top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-secondary text-white py-2 px-4"
                  >
                    Kirim Pengaduan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
