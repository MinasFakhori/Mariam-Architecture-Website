import styled from "styled-components";
export default function ProjectOne() {
  return (
    <Container>
      <TextWrapper>
        <Text>
          The Liquid Fishing <br />
          Vessels
        </Text>
        <YearText>[MA YR 2]</YearText>
      </TextWrapper>
      <ImgWrapper>
        <Img src="./01.jpg" alt="" />
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  margin-top: 40px; 
`;



const TextWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:flex-end;
  font-size: 15px;
  grid-column: 1;
  grid-row: 2 / 5;
`;

const Text = styled.p`
  font-size: 15px;
  margin: 8% 0; 
`;

const YearText = styled.p`
    font-size: 12px;
`

const Img = styled.img`
  width: 70%;
  float: right;
  border-radius: 5px;
`;

const ImgWrapper = styled.div`
  grid-column: 1;
  grid-row: 2 / 5;
`;
