import { useState } from "react";
import styled from "styled-components";
import { NavProjectsPhone } from "./NavProjects";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <ClosedContainer>
        <Title>Projects</Title>
        <Arrow onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ArrowImg src="angle-up-solid.svg" />
          ) : (
            <ArrowImg src="angle-down-solid.svg" />
          )}
        </Arrow>
      </ClosedContainer>

      <ContentContainer isOpen={isOpen}>
        {NavProjectsPhone.map((e) => (
          <Projects key={e}>{e}</Projects>
        ))}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClosedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: light;
  padding: 0px;
  margin: 0px;
  align-self: flex-start;
  justify-self: flex-start;
`;

const Arrow = styled.div`
  display: flex;
  width: 10%;
  height: 20%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
`;

const ArrowImg = styled.img`
  width: 80%;
`;

const ContentContainer = styled.ul`
  display: flex;
  padding: 0 1em;
  flex-direction: column;
  align-items: revert;
  flex-wrap: wrap;

  list-style-type: none;
  border: 0.5px solid black;
  border-radius: 10px;

  max-height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  overflow: hidden;
  transition: max-height 0.1s ease-in-out, opacity 0.1s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;

const Projects = styled.li`
  margin: 15px 0px;
  flex-wrap: wrap;
  list-style-type: none;
  text-align: center;
  font-size: 12px;
`;
