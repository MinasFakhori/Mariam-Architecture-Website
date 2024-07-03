import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <Li>Contact:</Li>
      <Li>
        <Anchor target="_blank" href="mailto:mariamfakhori21@gmail.com">
          EMAIL
        </Anchor>
      </Li>

      <Li>
        <Anchor
          target="_blank"
          href="https://www.linkedin.com/in/mariam-fakhori/"
        >
          LINKEDIN
        </Anchor>
      </Li>

      <Li>
        <Anchor
          target="_blank"
          href="https://www.instagram.com/m.archi_design/"
        >
          INSTAGRAM
        </Anchor>
      </Li>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: -1em;
  }
`;

const Anchor = styled.a`
  color: rgb(91, 91, 91);
  text-decoration: none;
`;

const Li = styled.li`
  margin-right: 3em;
  margin-top: 8em;

  @media screen and (max-width: 800px) {
    margin: 1em 0;
  }
`;
