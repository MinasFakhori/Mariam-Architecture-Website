import styled from "styled-components";
import Nav from "./Nav";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import { Fade } from "react-awesome-reveal";
import ProjectThree from "./ProjectThree";
import Project from "./Project";
export default function App() {
  return (
    <Container>
      <Name>Mariam Fakhori</Name>
      <Nav />
      <Fade damping>
        <Project
          imgSrc={"./01.jpg"}
          title="The Liquid Fishing newLine Vessels"
          year="[MA YR 2]"
          isTextTop={false}
          isTextLeft={true}
          imgWidth="70%"
        />
      </Fade>

      <Fade damping>
        <ProjectTwoThreeWrapper>
        <Project
          imgSrc={"./02.jpg"}
          title="Harvesting newLine Healing"
          year="[MA YR 1]"
          isTextTop={true}
          isTextLeft={false}
          imgWidth="70%"
        />


        <Project
          imgSrc={"./03.jpg"}
          title="The Towers of newLine Lost Memory"
          year="[BA YR 3]"
          isTextTop={false}
          isTextLeft={true}
          imgWidth="70%"
          specialMargin="30%"
        />
        </ProjectTwoThreeWrapper>
      </Fade>

      {/* <ProjectTwo data-aos="fade-down" /> */}
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
  margin: 40px 70px;
`;

const Name = styled.p`
  font-size: 19px;
`;

const ProjectTwoThreeWrapper = styled.div`
  display: flex;
`;
