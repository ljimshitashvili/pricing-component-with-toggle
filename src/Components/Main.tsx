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
  align-items: center;
  flex-direction: column;
  gap: 32.5px;
  max-width: 327px;
  width: 100%;
  margin-bottom: 71px;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1050px;
    gap: 0;
    margin-bottom: 103.5px;
  }
`;
