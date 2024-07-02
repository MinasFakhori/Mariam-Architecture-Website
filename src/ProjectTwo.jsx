import styled from "styled-components";
export default function ProjectTwo() {
  return (
    <Container>
      <ImgWrapper>
        <Img src="./02.jpg" alt="" />
      </ImgWrapper>

      <TextWrapper>
        <Text>
          Harvesting <br />
          Healing
        </Text>
        <YearText>[MA YR 1]</YearText>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  margin: 40px 50px 0 0;
  width: 45%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 15px;
  grid-column: 2;
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
  width: 80%;
  border-radius: 5px;
`;

const ImgWrapper = styled.div`
  grid-column: 1;
  grid-row: 3 / 5;
`;
