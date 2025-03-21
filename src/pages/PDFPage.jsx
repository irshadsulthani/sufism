import { useState, useRef, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
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
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const pdfRef = useRef(null);
  const dropdownRef = useRef(null);
  const toolbarPluginInstance = toolbarPlugin();

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

  const handleSelectFile = (index) => {
    setActiveTab(index);
    setPdfName(pdfFiles[index].name);
    setShowDropdown(false);
    setLoading(true);
  };

  const openFullScreen = () => {
    if (pdfRef.current) {
      setIsFullscreen(true);
      pdfRef.current.requestFullscreen?.();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">PDF Document Viewer</h1>

      <div className="relative w-full md:w-64 mb-4" ref={dropdownRef}>
        <button onClick={() => setShowDropdown(!showDropdown)} className="w-full py-3 px-5 bg-white border rounded-lg flex justify-between items-center">
          <span className="truncate">{pdfName}</span>
          <ChevronDown className={`h-4 w-4 transition ${showDropdown ? "rotate-180" : ""}`} />
        </button>
        {showDropdown && (
          <ul className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg">
            {pdfFiles.map((file, index) => (
              <li key={index} onClick={() => handleSelectFile(index)} className="p-2 hover:bg-gray-200 cursor-pointer">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <a href={pdfFiles[activeTab].src} download className="mb-4 px-6 py-3 bg-indigo-600 text-white rounded-lg inline-flex items-center">
        <Download className="mr-2 h-5 w-5" /> Download PDF
      </a>

      <div ref={pdfRef} className={`relative w-full ${isFullscreen ? "fixed inset-0 h-screen w-screen bg-white" : "h-[75vh] bg-white rounded-lg shadow-lg border overflow-hidden"}`}>
        {loading && <div className="absolute inset-0 flex items-center justify-center bg-white">Loading...</div>}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfFiles[activeTab].src} plugins={[toolbarPluginInstance]} onDocumentLoad={() => setLoading(false)} />
        </Worker>
      </div>

      <button onClick={openFullScreen} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center">
        <Maximize className="mr-2" /> Fullscreen
      </button>
    </div>
  );
};

export default PDFPage;
