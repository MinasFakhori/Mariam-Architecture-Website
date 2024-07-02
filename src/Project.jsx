import styled from "styled-components";
export default function Project({
  imgSrc,
  imgWidth,
  title,
  year,
  isTextTop,
  isTextLeft,
  specialMargin,
  specialMarginLeft,
  specialTextMargin,
}) {
  const newLine = (str) => {
    if (str.includes("newLine")) {
      const split = title.split("newLine");
      console.log(split);
      return (
        <Text   specialTextMargin={specialTextMargin}>
          {split.map((e) => (
            <>
              {e} <br />
            </>
          ))}
        </Text>
      );
    }

    return <Text>{str}</Text>;
  };
  return (
    <Container
      specialMargin={specialMargin}
      specialMarginLeft={specialMarginLeft}
    >
      {console.log(specialMargin)}
      <TextWrapper
      
        isTextTop={isTextTop}
        isTextLeft={isTextLeft}
      >
        {newLine(title)}
        <YearText>{year}</YearText>
      </TextWrapper>
      <ImgWrapper>
        <Img imgWidth={imgWidth} isTextLeft={isTextLeft} src={imgSrc} alt="" />
      </ImgWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  /* margin-top: 40px; */
  margin-top: ${(props) =>
    props.specialMargin === undefined ? "40px" : props.specialMargin};
  margin-left: ${(props) =>
    props.specialMarginLeft === undefined ? "0px" : props.specialMarginLeft};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isTextTop ? "flex-start" : "flex-end")};
  font-size: 15px;
  grid-column: ${(props) => (props.isTextLeft ? "1" : "2")};
  grid-row: 1 / 5;
`;

const Text = styled.p`
  font-size: 15px;
  margin: 8% 0 0 0;
  margin-right: ${(props) =>
    props.specialTextMargin === undefined ? "0" : props.specialTextMargin};
`;

const YearText = styled.p`
  font-size: 12px;
`;

const Img = styled.img`
  width: ${(props) => props.imgWidth};
  float: ${(props) => (props.isTextLeft ? "right" : "left")};
  border-radius: 5px;
`;

const ImgWrapper = styled.div`
  grid-column: ${(props) => (props.isTextLeft ? "2" : "1")};
  grid-row: 1 / 5;
`;
