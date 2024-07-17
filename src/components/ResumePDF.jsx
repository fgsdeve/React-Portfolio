import React, { useState } from "react";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";

const ResumePDF = ({ setPdfBlobUrl }) => {
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const generatePdf = async () => {
    const blob = await pdf(<ResumeDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfBlobUrl(url);
    setPdfGenerated(true);
  };

  return (
    <div>
      <button onClick={generatePdf}>Click Here To See My Resume</button>
      {pdfGenerated && (
        <PDFDownloadLink document={<ResumeDocument />} fileName="Resume.pdf">
          {({ loading }) =>
            loading ? "Loading document..." : "Download Resume"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default ResumePDF;
