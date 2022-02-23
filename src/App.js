import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import Card from "./components/Card";
import content from './content'
import Footer from "./components/Footer";
import { CallToActionStyled } from "./components/styles/CallToAction.styled";
import CallToAction from "./components/CallToAction";


const theme = {
  // colors: {
  //   header: "#ebfbff",
  //   body: "#fff",
  //   footer: "#003333",
  // },


  mobile: "375px",
  tablet: "768px",
  desktop: "1440px"
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
          <CallToAction/>
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
