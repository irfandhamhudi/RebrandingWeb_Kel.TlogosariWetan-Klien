import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ChevronRight } from "lucide-react";
import { getAllServiceComplain } from "../../utils/data/serviceComplain";
import userImg from "../../assets/user.png";
import ErrorNews from "../error/errorNews";

const LihatPengaduan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const complaintsPerPage = 6; // Number of complaints per page

  // Fetch complaints function
  const fetchComplaints = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getAllServiceComplain();
      setComplaints(data); // Assuming data is an array of complaints
      setLoading(false);
    } catch (err) {
      setError("Gagal memuat pengaduan: " + err.message);
      setLoading(false);
    }
  }, []);

  // Fetch complaints when component mounts or when newComplaint is in state
  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints, location.state?.newComplaint]);

  // Calculate total pages
  const totalPages = Math.ceil(complaints.length / complaintsPerPage);

  // Get current complaints for the page
  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = complaints.slice(
    indexOfFirstComplaint,
    indexOfLastComplaint
  );

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const createDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    };
    return (
      date.toLocaleString("id-ID", options).replace(" pukul ", " - ") + " WIB"
    );
  };

  // Function to truncate message to first three lines
  const truncateMessage = (msg) => {
    if (!msg) return "";
    const lines = msg.split("\n").filter((line) => line.trim() !== "");
    const firstThreeLines = lines.slice(0, 3).join("\n");
    return lines.length > 3 ? `${firstThreeLines}...` : firstThreeLines;
  };

  // Function to open modal with selected complaint
  const openModal = (complaint) => {
    setSelectedComplaint(complaint);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedComplaint(null);
  };

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
              Lihat Pengaduan
            </span>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10 min-h-screen space-y-5">
          <div className="lg:text-md border lg:w-[200px] border-gray-300 bg-white py-2 px-7 lg:px-5">
            <p>Semua Pengaduan</p>
          </div>

          {loading && <p className="text-center">Memuat pengaduan...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && complaints.length === 0 && <ErrorNews />}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
            {currentComplaints.map((complaint) => (
              <div
                key={complaint._id}
                className="bg-white p-6 h-max border border-gray-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <img src={userImg} alt="User" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h1 className="text-sm font-semibold">
                        {complaint.name}
                      </h1>
                      <p className="text-xs text-gray-600">
                        ( {complaint.phone} )
                      </p>
                    </div>
                    <p className="text-xs text-gray-400">{complaint.email}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  Melapor pada {createDate(complaint.createdAt)}
                </p>
                <p
                  className="text-font1 font-semibold mt-2 break-words line-clamp-3 text-justify"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {truncateMessage(complaint.title)}
                </p>
                <p
                  className="text-sm text-gray-600 mt-2 truncate line-clamp-3 text-justify"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {truncateMessage(complaint.msg)}
                </p>

                <div className="mt-7 flex justify-end">
                  <button
                    onClick={() => openModal(complaint)}
                    className="bg-primary text-white py-2 px-4 text-xs"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`py-2 px-4 text-sm ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white"
                }`}
              >
                Sebelumnya
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`py-2 px-4 text-sm ${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 border border-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`py-2 px-4 text-sm ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white"
                }`}
              >
                Berikutnya
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>

      {/* Modal */}
      {isModalOpen && selectedComplaint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 max-w-2xl w-[90%] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Detail Pengaduan</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src={userImg} alt="User" className="w-12 h-12" />
                <div>
                  <h3 className="text-md font-semibold">
                    {selectedComplaint.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedComplaint.phone} | {selectedComplaint.email}
                  </p>
                  <p className="text-sm text-gray-400">
                    Melapor pada {createDate(selectedComplaint.createdAt)}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Judul Pengaduan</h4>
                <div className="border border-gray-300 p-4">
                  <p className="text-sm text-gray-600 break-words">
                    {selectedComplaint.title}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Isi Pengaduan</h4>
                <div className="border border-gray-300 p-4">
                  <p
                    className="text-sm text-gray-600 break-words"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {selectedComplaint.msg}
                  </p>
                </div>
              </div>
              {selectedComplaint.images &&
                selectedComplaint.images.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Gambar Pengaduan</h4>
                    <div className="flex flex-wrap  gap-2 mt-2 border border-gray-300 p-4">
                      {selectedComplaint.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Gambar pengaduan ${index + 1}`}
                          className="w-28 h-28 object-cover"
                          onError={(e) =>
                            (e.target.src = "/placeholder-image.jpg")
                          }
                        />
                      ))}
                    </div>
                  </div>
                )}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Balasan Pengaduan</h4>
                <div className="border border-gray-300 p-4">
                  {selectedComplaint.adminResponse ? (
                    <div>
                      <p
                        className="text-sm text-gray-600 break-words text-justify"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {selectedComplaint.adminResponse.responseText}
                      </p>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <strong>Ditanggapi oleh:</strong>{" "}
                          {selectedComplaint.adminResponse.responderName}
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Tanggal:</strong>{" "}
                          {createDate(
                            selectedComplaint.adminResponse.respondedAt
                          )}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-red-600">
                      Mohon maaf, pengaduan Anda saat ini belum ditanggapi.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-primary text-white py-2 px-4 text-sm"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LihatPengaduan;
