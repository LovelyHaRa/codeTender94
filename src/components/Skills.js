import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, lighten } from '@material-ui/core';

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  .title-block {
    margin: 2rem;
    margin-bottom: 0;
    text-align: center;
  }
  .title {
    font-weight: lighter;
    font-size: 2rem;
  }
  .skill-progress-block {
    margin: 2rem;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    <SkillsBlock>
      <div className="title-block">
        <span className="title">DEVELOPMENT SKILLS</span>
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
