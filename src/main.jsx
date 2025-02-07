import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pdfjs } from "react-pdf";
import App from "./App.jsx";
import "./index.css";

// Set the correct worker path
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
