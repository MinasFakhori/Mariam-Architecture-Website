import styled from "styled-components";
export default function ProjectThree() {
  return (
    <Container>
      <ImgWrapper>
        <Img src="./temp3.png" alt="" />
      </ImgWrapper>

      <TextWrapper>
        <Text>
          The Towers of <br /> 
          Lost Memory
        </Text>
        <YearText>[BA YR 3]</YearText>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  margin-top: 40px;
  width: 45%;
  grid-template-columns: repeat(2, 1fr)
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 15px;
  grid-column: 1;
  grid-row: 2 / 5;
  float: right;
`;

const Text = styled.p`
  font-size: 15px;
  margin: 8% 0;
`;

const YearText = styled.p`
  font-size: 12px;
`;

const Img = styled.img`
  width: 70%;
  border-radius: 5px;
  float:right;
`;

const ImgWrapper = styled.div`
  grid-column: 2;
  grid-row: 3 / 5;
`;


