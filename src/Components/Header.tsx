import styled from "styled-components";

interface Props {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

export default function Header({ toggle, setToggle }: Props) {
  const changeValue = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <h1>Our Pricing</h1>
      <div>
        <h2>Annually</h2>
        <label>
          <input
            type="checkbox"
            onClick={changeValue}
            style={{
              transform: toggle ? "translateX(0)" : "translateX(24px)",
            }}
          />
        </label>
        <h2>Monthly</h2>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-width: 327px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 64px 44px 80px;

  h1 {
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #6e728e;
  }

  div {
    display: flex;
    gap: 24px;
    align-items: center;

    h2 {
      font-size: 15px;
      line-height: 28px;
      text-align: right;
      color: #6e728e;
      mix-blend-mode: normal;
      opacity: 0.5;
    }

    label {
      width: 56px;
      height: 32px;
      border-radius: 16px;
      background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
      display: flex;
      align-items: center;
      padding: 4px;

      input {
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #ffffff;
        transition: all 0.15s;
      }
    }
  }
`;
