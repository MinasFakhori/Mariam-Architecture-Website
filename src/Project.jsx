import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import React from "react";
export default function Project({
  imgSrc,
  title,
  year,
  $imgWidth,
  $isTextTop,
  $isTextLeft,
  $specialMargin,
  $specialMarginLeft,
  $textMargin,
}) {
  const newLine = (str) => {
    if (str.includes("newLine")) {
      const split = title.split("newLine");
      return (
        <Text>
          {split.map((e) => (
            <React.Fragment key={e}>
              {e} <br />
            </React.Fragment>
          ))}
        </Text>
      );
    }

    return <Text>{str}</Text>;
  };
  return (
    <Fade>
      <Container
        $specialMargin={$specialMargin}
        $specialMarginLeft={$specialMarginLeft}
      >
        <TextWrapper
          $testMargin={$textMargin}
          $isTextTop={$isTextTop}
          $isTextLeft={$isTextLeft}
        >
          {newLine(title)}
          <YearText>{year}</YearText>
        </TextWrapper>
        <ImgWrapper>
          <Img
            $imgWidth={$imgWidth}
            $isTextLeft={$isTextLeft}
            src={imgSrc}
            alt=""
          />
        </ImgWrapper>
      </Container>
    </Fade>
  );
}

const Container = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    margin-top: ${($props) =>
      $props.$specialMargin === undefined ? "40px" : $props.$specialMargin};
    margin-left: ${($props) =>
      $props.$specialMarginLeft === undefined
        ? "0px"
        : $props.$specialMarginLeft};
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: ${($props) =>
      $props.$isTextTop ? "flex-start" : "flex-end"};
    grid-column: ${($props) => ($props.$isTextLeft ? "1" : "2")};
    grid-row: 1 / 5;
    margin: ${($props) =>
      $props.$textMargin === undefined ? 0 : $props.$testMargin};
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.p`
  @media screen and (min-width: 800px) {
    font-size: 15px;
    margin: 8% 0 0 0;
    margin-right: ${($props) =>
      $props.$specialTextMargin === undefined
        ? "5px"
        : $props.$specialTextMargin};
  }

  @media screen and (max-width: 800px) {
    font-size: 13px;
  }
`;

const YearText = styled.p`
  @media screen and (min-width: 800px) {
    font-size: 12px;
    margin-top: 5em;
  }
  @media screen and (max-width: 800px) {
    font-size:9px;
    margin-bottom: 1em; 
    align-self:end; 
  }
`;

const Img = styled.img`
  border-radius: 5px;
  @media screen and (min-width: 800px) {
    width: ${($props) => $props.$imgWidth};
    float: ${($props) => ($props.$isTextLeft ? "right" : "left")};
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  @media screen and (min-width: 800px) {
    grid-column: ${($props) => ($props.$isTextLeft ? "2" : "1")};
    grid-row: 1 / 5;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 5em;
  }
`;
