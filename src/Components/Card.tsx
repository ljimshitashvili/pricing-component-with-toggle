import styled from "styled-components";

interface Props {
  cardName: string;
  toggle: boolean;
}

export default function Card({ cardName, toggle }: Props) {
  return (
    <Container toggle={toggle} cardName={cardName}>
      <h1>{cardName}</h1>
      <h2>
        ${" "}
        <span>
          {cardName === "Basic"
            ? `${toggle ? "199.99" : "19.99"}`
            : `${
                cardName === "Professional"
                  ? `${toggle ? "249.99" : "24.99"}`
                  : `${toggle ? "399.99" : "39.99"}`
              }`}
        </span>
      </h2>
      <div>
        <hr />
        <p>
          {cardName === "Basic"
            ? "500 GB"
            : `${cardName === "Professional" ? "1 TB" : "2 TB"}`}{" "}
          Storage
        </p>
        <hr />
        <p>
          {cardName === "Basic"
            ? "2"
            : `${cardName === "Professional" ? "5" : "10"}`}{" "}
          Users Allowed
        </p>
        <hr />
        <p>
          Send up to{" "}
          {cardName === "Basic"
            ? "3"
            : `${cardName === "Professional" ? "10" : "20"}`}{" "}
          GB
        </p>
        <hr />
      </div>
      <button>LEARN MORE</button>
    </Container>
  );
}

const Container = styled.div<Props>`
  width: 100%;
  padding: 31px 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  box-shadow: 0px 20px 40px 0px #d4d2f480;
  background: ${(p: Props) =>
    p.cardName === "Professional"
      ? "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
      : "white"};
  height: fit-content;

  h1 {
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: ${(p: Props) =>
      p.cardName === "Professional" ? "white" : "#6E728E"};
  }
  h2 {
    display: flex;
    align-items: center;
    gap: 7.5px;
    font-size: 40px;
    line-height: 49px;
    text-align: center;
    letter-spacing: -1.2px;
    color: ${(p: Props) =>
      p.cardName === "Professional" ? "white" : "#6E728E"};

    span {
      font-size: 72px;
      line-height: 71px;
      letter-spacing: -2.16px;
      color: ${(p: Props) =>
        p.cardName === "Professional" ? "white" : "#6E728E"};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    p {
      font-size: 15px;
      line-height: 28px;
      text-align: center;
      color: ${(p: Props) =>
        p.cardName === "Professional" ? "white" : "#6E728E"};
    }

    hr {
      background: ${(p: Props) =>
        p.cardName === "Professional" ? "white" : "#6E728E"};
      opacity: 0.25;
      border: none;
      width: 100%;
      height: 1px;
    }
  }

  button {
    background: ${(p: Props) =>
      p.cardName === "Professional"
        ? "white"
        : "linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)"};
    border-radius: 6px;
    width: 100%;
    max-width: 269px;
    height: 44px;
    border: none;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 1.39286px;
    color: ${(p: Props) =>
      p.cardName === "Professional" ? "#6D72DE" : "white"};
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    padding: ${(p: Props) =>
      p.cardName === "Professional" ? "54.5px 31px" : "31px"};

    button:hover {
      outline: ${(p: Props) =>
        p.cardName === "Professional"
          ? "1px solid white"
          : "1px solid #6D72DE"};
      background: transparent;
      color: ${(p: Props) =>
        p.cardName === "Professional" ? "white" : " #6D72DE"};
    }
  }
`;
