import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { InnerLayout } from "../styled/Layouts";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

const skillsData = [
  { title: "HTML", width: "98%", text: "98%" },
  { title: "CSS3", width: "98%", text: "98%" },
  { title: "Tailwind", width: "90%", text: "90%" },
  { title: "JavaScript", width: "90%", text: "90%" },
  { title: "React", width: "90%", text: "90%" },
  { title: "Vue", width: "80%", text: "80%" },
  { title: "Astro", width: "70%", text: "70%" }
];

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title="My Skills" span="My Skills" />
      <InnerLayout>
        <div className="skills">
          {skillsData.map((skill, index) => (
            <ProgressBar
              key={index}
              title={skill.title}
              width={skill.width}
              text={skill.text}
            />
          ))}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 2fr);
    }
  }
`;

export default Skills;

