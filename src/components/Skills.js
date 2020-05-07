import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, lighten } from '@material-ui/core';

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e7f5ff;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  .title-block {
    margin: 4rem;
    margin-bottom: 0;
    text-align: center;
  }
  .title {
    font-weight: 300;
    font-size: 2rem;
    font-family: 'Raleway';
    & > span {
      font-family: 'Jost';
      font-weight: 500;
    }
  }
  .subscript {
    text-align: center;
    margin-top: 1.5rem;
    font-family: 'Nanum Gothic';
    font-weight: 400;
    font-size: 1.25rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 580px) {
      font-size: 0.8rem;
    }
  }
  .skill-progress-block {
    margin: 2rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .progress-name {
    font-family: 'Jost';
    font-size: 1.25rem;
    font-weight: 600;
  }
  .skill-progress {
    width: 75%;
    margin: 2rem 0;
    @media screen and (max-width: 768px) {
      width: 85%;
    }
    @media screen and (max-width: 570px) {
      width: 95%;
    }
  }
  .progress-bar {
    margin-top: 1rem;
  }
`;

const subscript =
  'C Programing부터 시작한 근본있는 경험으로 어떤 기술이든 때려 부수겠습니다.';

const ListSkills = [
  { name: 'JAVASCRIPT', completed: 80 },
  { name: 'REACT', completed: 70 },
  { name: 'SPRING FRAMEWORK', completed: 70 },
  { name: 'NODE.JS', completed: 50 },
  { name: 'JAVA', completed: 80 },
  { name: 'C++', completed: 80 },
  { name: 'C#', completed: 40 },
];

const CustomLinearProgress = withStyles({
  root: {
    height: 15,
    backgroundColor: lighten('#ff6c5d', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const Skills = () => {
  const completedSkills = Array.apply(null, new Array(ListSkills.length)).map(
    Number.prototype.valueOf,
    0,
  );
  const [completed, setCompleted] = useState(completedSkills);

  useEffect(() => {
    setCompleted(ListSkills.map((skills) => skills.completed));
  }, []);

  return (
    <SkillsBlock className="skills">
      <div className="title-block">
        <span className="title">
          DEVELOPMENT <span>SKILLS</span>
        </span>
      </div>
      <div className="subscript">
        <span>{subscript}</span>
      </div>
      <div className="skill-progress-block">
        {ListSkills.map((skills, index) => (
          <div className="skill-progress" key={index}>
            <span className="progress-name">{skills.name}</span>
            <CustomLinearProgress
              className="progress-bar"
              variant="determinate"
              value={completed[index]}
            />
          </div>
        ))}
      </div>
    </SkillsBlock>
  );
};

export default Skills;
