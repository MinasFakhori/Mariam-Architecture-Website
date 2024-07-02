import styled from "styled-components";
import React from "react";

export default function Nav() {
  const navProjects = [
    "The Liquid Fishing newLine Vessels",
    "Harvesting newLine Healing",
    "The Towers of newLine Lost Memory",
    "The Little Village",
    "Liquid Lifelines: newLine A Slow Form of  newLine Violence",
  ];
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectsWrapper>
        {navProjects.map((project, index) => (
          <Projects key={index}>
            {project.split("newLine").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < project.split("newLine").length - 1 && <br />}
              </React.Fragment>
            ))}
          </Projects>
        ))}
      </ProjectsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 60px;
  font-weight: light;
  padding: 0px;
  margin: 0px;
  align-self:flex-start;
  justify-self:flex-start; 
`;


const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Projects = styled.p`
  display: flex;
  flex-direction: column;
  margin: 15px 20px;
  align-items: center;
  justify-content:start;   
  font-size:15px; 
  
`;
