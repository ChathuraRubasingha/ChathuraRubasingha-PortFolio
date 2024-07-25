import React, { useContext } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Reseum from "../assets/resume/ChathuraRubasingheSE.pdf";
import "../style/Pdfviewer.css";
import { isDarkContext } from "../App";
import { Dark, Light } from "../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PdfViewer = () => {
  const navigate = useNavigate();
  const Theme = useContext(isDarkContext);
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  const NavigateToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="resume-wrapper"
      style={
        Theme.isDark
          ? { backgroundColor: Dark.backgroundSecondary, color: Dark.color }
          : { backgroundColor: Light.backgroundSecondary, color: Light.color }
      }
    >
      <div className="back-button">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          style={{
            width: "25px",
            height: "25px",
            padding: "10px 0",
            cursor: "pointer",
          }}
          onClick={NavigateToHome}
        />
      </div>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={Reseum} plugins={[getFilePluginInstance]} />
      </Worker>
      <div className="resume-button-wrapper">
        <Download>
          {(props) => (
            <button
              onClick={props.onClick}
              className="resume-button"
              style={
                Theme.isDark
                  ? {
                      color: Dark.color,
                    }
                  : {
                      color: Light.color,
                    }
              }
            >
              Download PDF
            </button>
          )}
        </Download>
      </div>
    </div>
  );
};

export default PdfViewer;
