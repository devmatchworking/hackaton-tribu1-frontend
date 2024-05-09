import React from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

import Template from "../../../src/assets/officialClaim.docx";

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
        first_name: "John",
        last_name: "Doe",
        phone: "0652455478",
        description: "New Website",
      });
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }); // Output the document using Data-URI
      saveAs(out, "output.docx");
    });
  }

  render() {
    return (
      <div className="p-2">
        <h1>Test docxtemplater</h1>
        <button onClick={this.generateDocument}>Generate document</button>
        <p>Click the button above to generate a document using ReactJS</p>
        <p>
          You can edit the data in your code in this example. In your app, the
          data would come from your database for example.
        </p>
      </div>
    );
  }
}

export default DownloadComponent;

// import DownloadComponent from "./components/DownloadComponent/DownloadComponent.jsx";
