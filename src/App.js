// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import content from "./content";
import "./App.css";

const theme = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* <Router>
          <Routes>
            <Route path="/" element={<App />} /> */}
            <Header />
            <Container role="main">
              {content.map((item, index) => (
                <Card key={index} item={item} />
              ))}
              <CallToAction />
            </Container>
            <Footer role="contentinfo"/>
          {/* </Routes>
        </Router> */}
      </>
    </ThemeProvider>
  );
}

export default App;
