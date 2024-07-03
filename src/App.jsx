import styled from "styled-components";
import Nav from "./Nav";
import Project from "./Project";
import Contact from "./Contact";
import NavPicker from "./NavPicker";
export default function App() {
  return (
    <Container>
      <Name>Mariam Fakhori</Name>
      <NavPicker />
      <Project
        imgSrc={"01-com.gif"}
        title="The Liquid Fishing newLine Vessels"
        year="[MA YR 2]"
        $isTextTop={false}
        $isTextLeft={true}
        $imgWidth="70%"
      />

      <ProjectTwoThreeWrapper>
        <Project
          imgSrc={"./02.jpg"}
          title="Harvesting newLine Healing"
          year="[MA YR 1]"
          $isTextTop={true}
          $isTextLeft={false}
          $imgWidth="65%"
        />

        <Project
          imgSrc={"03.jpg"}
          title="The Towers of newLine Lost Memory"
          year="[BA YR 3]"
          $isTextTop={false}
          $isTextLeft={true}
          $imgWidth="80%"
          $specialMargin="90%"
        />
      </ProjectTwoThreeWrapper>

      <Project
        imgSrc={"./04.jpg"}
        title="The Liquid Fishing newLine Vessels"
        year="[BA YR 2]"
        $isTextTop={false}
        $isTextLeft={false}
        $specialMargin="60px"
        $specialMarginLeft="50px"
        $imgWidth="65%"
      />

      <Project
        imgSrc={"./05.jpg"}
        title="Liquid Lifelines: newLine A Slow Form of newLine Violence"
        year="[MA YR 2]"
        $isTextTop={false}
        $isTextLeft={false}
        $imgWidth="25%"
        $specialTextMargin="9em"
        $specialMargin="5em"
      />
      <Contact />
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
  margin: 40px 70px;

  @media screen and (max-width: 800px) {
    margin: 5px;
  }
`;

const Name = styled.p`
  font-size: 19px;
  margin-left: 2px;

  @media screen and (max-width: 800px) {
  }
`;

const ProjectTwoThreeWrapper = styled.div`
  display: flex;
`;
