import { Fragment } from "react";
import styled, { css } from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Services from "./components/Services";
import Price from "./components/Price";
import Form from "./components/Form";

const Container = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${shape}
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
  background: crimson;
`;
const FeatureShape = styled.div`
  ${shape}
  clip-path: polygon(0% 0%, 0 100%, 29% 100%, 55% 0);
  background: pink;
`;
const ServicesShape = styled.div`
  ${shape}
  clip-path: polygon(0 0, 0 100%, 29% 100%, 29% 0);
  background: #f88497;
`;
const PriceShape = styled.div`
  ${shape}
  clip-path: polygon(29% 0, 100% 0%, 100% 100%, 60% 100%);
  background: crimson;
`;

function App() {
  return (
    <Fragment>
      <Container className="App">
        <IntroShape />
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Services />
        <ServicesShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Form />
      </Container>
    </Fragment>
  );
}

export default App;
