import React, { useState } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ResumePDF from "./components/ResumePDF";
import PDFViewer from "./components/PDFViewer";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#1c1c1c",
    },
    primary: {
      light: "#757ce8",
      main: "#3c3c3c",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ce93d8",
      dark: "#ba000d",
      contrastText: "#000",
    },
    disabled: {
      light: "#ff7961",
      main: "#757575",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const App = () => {
  const [page, setPage] = useState("Home");
  const [pdfBlobUrl, setPdfBlobUrl] = useState("");

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return (
          <div>
            <Resume />
            <ResumePDF setPdfBlobUrl={setPdfBlobUrl} />
            {pdfBlobUrl && <PDFViewer pdfBlobUrl={pdfBlobUrl} />}
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setPage={setPage} activePage={page} />
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Container sx={{ flexGrow: 1 }}>{renderPage()}</Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
