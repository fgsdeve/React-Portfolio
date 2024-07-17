import React from "react";
import { Page, Document, StyleSheet} from "@react-pdf/renderer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
});

const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Sidebar />
      <MainContent />
    </Page>
  </Document>
);

export default ResumeDocument;
