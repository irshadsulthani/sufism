import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #f4f4f9;
  overflow: auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 15px;
    height: auto;
    min-height: 100vh;
  }
`;

const ToggleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    max-height: 200px;
  }
`;

const DropdownItem = styled.li`
  padding: 12px 15px;
  font-size: 16px;
  color: #007bff;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #007bff;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 14px;
    font-size: 18px;
  }
`;

const PDFContainer = styled.div`
  width: 100%;
  height: 80vh;
  max-width: 900px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 65vh;
    width: 90%;
  }
`;


const pdfFiles = [
  { src: "/pdf/sample.pdf", name: "Sample PDF" },
  { src: "/pdf/majlisbaith.pdf", name: "Majlis Baith" },
  { src: "/pdf/sample3.pdf", name: "Sample 3" }
];

const PDFPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pdfName, setPdfName] = useState(pdfFiles[0].name);
  const [showDropdown, setShowDropdown] = useState(false);
  const pdfRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectFile = (index) => {
    setActiveTab(index);
    setPdfName(pdfFiles[index].name);
    setShowDropdown(false);
  };

  const openFullScreen = () => {
    if (window.innerWidth <= 768) { // Detect mobile screens
      window.open(pdfFiles[activeTab].src, "_blank");
    } else if (pdfRef.current) { // Desktop fullscreen mode
      if (pdfRef.current.requestFullscreen) {
        pdfRef.current.requestFullscreen();
      } else if (pdfRef.current.mozRequestFullScreen) {
        pdfRef.current.mozRequestFullScreen();
      } else if (pdfRef.current.webkitRequestFullscreen) {
        pdfRef.current.webkitRequestFullscreen();
      } else if (pdfRef.current.msRequestFullscreen) {
        pdfRef.current.msRequestFullscreen();
      }
    }
  };
  

  return (
    <PDFWrapper>
      <ToggleContainer>
        <DropdownWrapper>
          <DropdownButton onClick={toggleDropdown}>{pdfName}</DropdownButton>
          <DropdownList className={showDropdown ? 'show' : ''}>
            {pdfFiles.map((file, index) => (
              <DropdownItem
                key={index}
                className={activeTab === index ? 'selected' : ''}
                onClick={() => handleSelectFile(index)}
              >
                {file.name}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownWrapper>
      </ToggleContainer>

      <PDFContainer ref={pdfRef} onClick={openFullScreen}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfFiles[activeTab].src} />
        </Worker>
      </PDFContainer>
    </PDFWrapper>
  );
};

export default PDFPage;
