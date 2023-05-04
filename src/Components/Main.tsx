import Card from "./Card";
import styled from "styled-components";
interface Props {
  toggle: boolean;
}

export default function Main({ toggle }: Props) {
  return (
    <Container>
      <Card toggle={toggle} cardName={"Basic"} />
      <Card toggle={toggle} cardName={"Professional"} />
      <Card toggle={toggle} cardName={"Master"} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32.5px;
  max-width: 327px;
  width: 100%;
`;
