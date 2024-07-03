import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTransition } from "react-spring";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const transition = useTransition(isOpen, {}); 





  return (
    <Container>
      <ClosedContainer>
        <Title>Projects</Title>
        <Arrow  onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ArrowImg  src="angle-up-solid.svg" />
          ) : (
            <ArrowImg src="angle-down-solid.svg" />
          )}
        </Arrow>
      </ClosedContainer>

      {isOpen ? <IDONT>lol</IDONT> : ""}
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

const IDONT = styled.h1`
transition: all 1s ease-out;
background-color:green;
`;