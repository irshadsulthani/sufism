import { useState, useRef, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { ChevronDown, Download, Maximize } from "lucide-react";

const pdfFiles = [
  { src: "/pdf/sample.pdf", name: "Sample PDF" },
  { src: "/pdf/majlisbaith.pdf", name: "Majlis Baith" },
  { src: "/pdf/sample3.pdf", name: "Sample 3" },
];

const PDFPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pdfName, setPdfName] = useState(pdfFiles[0].name);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const pdfRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectFile = (index) => {
    setActiveTab(index);
    setPdfName(pdfFiles[index].name);
    setShowDropdown(false);
  };

  const openFullScreen = () => {
    if (window.innerWidth <= 768) {
      window.open(pdfFiles[activeTab].src, "_blank");
    } else if (pdfRef.current) {
      setIsFullscreen(true);
      try {
        if (pdfRef.current.requestFullscreen) {
          pdfRef.current.requestFullscreen();
        } else if (pdfRef.current.mozRequestFullScreen) {
          pdfRef.current.mozRequestFullScreen();
        } else if (pdfRef.current.webkitRequestFullscreen) {
          pdfRef.current.webkitRequestFullscreen();
        } else if (pdfRef.current.msRequestFullscreen) {
          pdfRef.current.msRequestFullscreen();
        }
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-slate-50 p-4 md:p-6">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">PDF Document Viewer</h1>

        {/* File selector dropdown */}
        <div className="relative w-full max-w-xs mb-6" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center justify-between transition-all duration-200 shadow-md"
          >
            <span className="truncate max-w-[90%]">{pdfName}</span>
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showDropdown && (
            <ul className="absolute mt-1 w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-50 max-h-60 overflow-y-auto">
              {pdfFiles.map((file, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectFile(index)}
                  className={`py-2 px-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
                    activeTab === index ? "bg-indigo-100 font-medium text-indigo-800" : "text-gray-700"
                  }`}
                >
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* PDF Viewer Container */}
        <div
          ref={pdfRef}
          onClick={openFullScreen}
          className={`relative w-full ${
            isFullscreen ? "fixed inset-0 h-screen w-screen bg-white z-50 overflow-auto" : "h-[70vh] rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          }`}
        >
          {/* Fullscreen Overlay */}
          {!isFullscreen && (
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center transition-all duration-300 z-10">
              <Maximize className="text-white opacity-0 group-hover:opacity-100 h-10 w-10 transition-opacity duration-300" />
            </div>
          )}

          {/* PDF Viewer */}
          <div className="h-full overflow-auto">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl={pdfFiles[activeTab].src} />
            </Worker>
          </div>
        </div>

        {/* Download Button */}
        <a
          href={pdfFiles[activeTab].src}
          download={pdfFiles[activeTab].name}
          className="mt-5 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg inline-flex items-center justify-between transition-all duration-200 shadow-md w-full max-w-xs"
        >
          <span className="flex items-center">
            <Download className="mr-2 h-5 w-5" />
            <span className="truncate max-w-[90%]">Download {pdfName}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default PDFPage;
