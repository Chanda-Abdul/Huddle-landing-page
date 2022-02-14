import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import Card from "./components/Card";
import content from './content'
import Footer from "./components/Footer";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "375px",
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
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
