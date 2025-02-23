import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners"; // Import spinner

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          navigate("/"); // Redirect setelah preloader selesai
          return 100;
        }
        return oldProgress + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center text-primary z-50">
      {/* Spinner dari react-spinners */}
      <div className="flex flex-col items-center z-10">
        <HashLoader color="#C0392B" loading={progress < 100} size={60} />{" "}
        {/* Spinner */}
      </div>
    </div>
  );
};

export default Preloader;
