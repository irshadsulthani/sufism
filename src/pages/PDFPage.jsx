import { useState, useRef, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { ChevronDown, Download, Maximize, ZoomIn, ZoomOut, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const pdfRef = useRef(null);
  const dropdownRef = useRef(null);
  const toolbarPluginInstance = toolbarPlugin();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectFile = (index) => {
    setActiveTab(index);
    setPdfName(pdfFiles[index].name);
    setShowDropdown(false);
    setLoading(true);
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

  const renderToolbar = (toolbarSlot) => {
    return (
      <div className="flex items-center justify-between w-full p-1 bg-gray-100 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <button
            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            onClick={() => setScale(Math.max(0.5, scale - 0.1))}
            aria-label="Zoom out"
          >
            <ZoomOut className="h-5 w-5 text-gray-700" />
          </button>
          <span className="text-sm text-gray-700">{Math.round(scale * 100)}%</span>
          <button
            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            onClick={() => setScale(Math.min(3, scale + 0.1))}
            aria-label="Zoom in"
          >
            <ZoomIn className="h-5 w-5 text-gray-700" />
          </button>
          <button
            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200 ml-2"
            onClick={() => toolbarSlot.RotateButton.onClick()}
            aria-label="Rotate"
          >
            <RotateCw className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button
            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            onClick={() => toolbarSlot.GoToPreviousPage.onClick()}
            disabled={!toolbarSlot.GoToPreviousPage.isDisabled}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <span className="text-sm text-gray-700">
            {toolbarSlot.CurrentPageInput.currentPage + 1}/{toolbarSlot.NumberOfPages.numberOfPages}
          </span>
          <button
            className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
            onClick={() => toolbarSlot.GoToNextPage.onClick()}
            disabled={!toolbarSlot.GoToNextPage.isDisabled}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <button
          className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
          onClick={() => openFullScreen()}
          aria-label="Fullscreen"
        >
          <Maximize className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">PDF Document Viewer</h1>
        <p className="text-gray-600 mb-8 text-center">View and download your important documents</p>

        {/* File selector and controls container */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          {/* File selector dropdown */}
          <div className="relative w-full md:w-64" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="w-full py-3 px-5 bg-white border border-gray-300 hover:border-indigo-500 text-gray-800 font-medium rounded-lg flex items-center justify-between transition-all duration-200 shadow-sm"
              aria-expanded={showDropdown}
              aria-haspopup="true"
            >
              <span className="truncate max-w-[90%]">{pdfName}</span>
              <ChevronDown
                className={`ml-2 h-4 w-4 text-gray-600 transition-transform duration-200 ${
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
                      activeTab === index ? "bg-indigo-50 font-medium text-indigo-700" : "text-gray-700"
                    }`}
                  >
                    {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Download Button */}
          <a
            href={pdfFiles[activeTab].src}
            download={pdfFiles[activeTab].name}
            className="w-full md:w-auto py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg inline-flex items-center justify-center transition-all duration-200 shadow-md"
          >
            <Download className="mr-2 h-5 w-5" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer Container */}
        <div
          ref={pdfRef}
          className={`relative w-full group ${
            isFullscreen ? "fixed inset-0 h-screen w-screen bg-white z-50 overflow-auto" : "h-[75vh] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
          }`}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-20">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* PDF Viewer */}
          <div className="h-full overflow-auto">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfFiles[activeTab].src}
                plugins={[toolbarPluginInstance]}
                renderToolbar={renderToolbar}
                onDocumentLoad={() => setLoading(false)}
                defaultScale={scale}
                onZoom={(e) => setScale(e.scale)}
              />
            </Worker>
          </div>
        </div>

        <div className="w-full mt-6 text-center text-gray-600 text-sm">
          <p>PDF viewer powered by react-pdf-viewer. Click on the document to enter fullscreen mode.</p>
        </div>
      </div>
    </div>
  );
};

export default PDFPage;