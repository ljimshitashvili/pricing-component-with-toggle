import styled from "styled-components";

import Header from "./Components/Header";
import Main from "./Components/Main";

// import bgBottom from "./Images/bg-bottom.svg";
import bgTop from "./Images/bg-top.svg";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <Container>
      <Header toggle={toggle} setToggle={setToggle} />
      <Main />
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
`;
