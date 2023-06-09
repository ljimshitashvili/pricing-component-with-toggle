import styled from "styled-components";

import Header from "./Components/Header";
import Main from "./Components/Main";

import bgBottom from "./Images/bg-bottom.svg";
import bgTop from "./Images/bg-top.svg";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <Container>
      <Header toggle={toggle} setToggle={setToggle} />
      <Main toggle={toggle} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f7f7fe;
  background-image: url(${bgTop});
  background-repeat: no-repeat;
  background-position: right -193px top 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    background-image: url(${bgTop}), url(${bgBottom});
    background-position: right -93px top 0, bottom 0 left 0;
  }
`;
