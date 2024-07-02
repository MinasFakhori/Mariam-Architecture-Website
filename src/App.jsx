import styled from "styled-components";
import Nav from "./Nav";
import { Fade } from "react-awesome-reveal";
import Project from "./Project";
export default function App() {
  return (
    <Container>
      <Name>Mariam Fakhori</Name>
      <Nav />
      <Fade damping>
        <Project
          imgSrc={"./01_gif.gif"}
          title="The Liquid Fishing newLine Vessels"
          year="[MA YR 2]"
          isTextTop={false}
          isTextLeft={true}
          imgWidth="70%"
        />
      </Fade>

      <ProjectTwoThreeWrapper>
        <Fade damping>
          <Project
            imgSrc={"./02.jpg"}
            title="Harvesting newLine Healing"
            year="[MA YR 1]"
            isTextTop={true}
            isTextLeft={false}
            imgWidth="70%"
          />
        </Fade>

        <Fade damping>
          <Project
            imgSrc={"./03_more cropped (1).jpg"}
            title="The Towers of newLine Lost Memory"
            year="[BA YR 3]"
            isTextTop={false}
            isTextLeft={true}
            imgWidth="90%"
            specialMargin="90%"
          
          />
        </Fade>
      </ProjectTwoThreeWrapper>

      <Fade damping>
        <Project
          imgSrc={"./04.jpg"}
          title="The Liquid Fishing newLine Vessels"
          year="[BA YR 2]"
          isTextTop={false}
          isTextLeft={false}
          specialMargin="60px"
          specialMarginLeft="50px"
          imgWidth="65%"
        />
      </Fade>

      <Fade damping>
        <Project
          imgSrc={"./05.jpg"}
          title="Liquid Lifelines: newLine A Slow Form of newLine Violence"
          year="[MA YR 2]"
          isTextTop={false}
          isTextLeft={false}
          imgWidth="25%"
          specialTextMargin="9em"
        />
      </Fade>
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
