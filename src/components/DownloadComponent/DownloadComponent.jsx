import React from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

import Template from "../../../src/assets/officialClaim.docx";

import "./DownloadComponent.css";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

class DownloadComponent extends React.Component {
  generateDocument() {
    loadFile(Template, function (error, content) {
      if (error) {
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
      doc.render({
        contenido: "",
      });
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      saveAs(out, "solicitud.docx");
    });
  }

  render() {
    return (
      <div className="p-2">
        <button className="buttonDownloader" onClick={this.generateDocument}>
          Descargar documento
        </button>
      </div>
    );
  }
}

export default DownloadComponent;

// import DownloadComponent from "./components/DownloadComponent/DownloadComponent.jsx";
