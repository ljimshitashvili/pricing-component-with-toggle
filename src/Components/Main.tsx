import Card from "./Card";
import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <Card cardName={"Basic"} />
      <Card cardName={"Professional"} />
      <Card cardName={"Master"} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32.5px;
`;
