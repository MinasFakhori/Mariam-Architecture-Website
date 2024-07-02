import styled from "styled-components";
import Nav from "./Nav";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import { Fade } from "react-awesome-reveal";
import ProjectThree from "./ProjectThree";
export default function App() {
  return (
    <Container>
      <Name>Mariam Fakhori</Name>
      <Nav />
      <Fade damping>
        <ProjectOne />
      </Fade>

      <ProjectTwoThreeWrapper>
          <ProjectTwo />
        <ProjectThree />
      </ProjectTwoThreeWrapper>

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
