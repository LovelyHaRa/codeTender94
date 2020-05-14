import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, lighten } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e7f5ff;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
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
  .explanation {
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
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 1rem 0;
    @media screen and (max-width: 768px) {
      width: 85%;
    }
    @media screen and (max-width: 570px) {
      width: 95%;
    }
  }
  .progress-content {
    margin-top: 0.25rem;
    font-family: 'Nanum Gothic';
    font-style: italic;
    font-size: 0.9rem;
    color: #868e96;
  }
  .progress-bar {
    margin-top: 1rem;
  }
`;

const explanation =
  'C Programing부터 시작한 근본있는 경험으로 어떤 기술이든 때려 부수겠습니다.';

const ListSkills = [
  {
    name: 'JAVASCRIPT',
    content: 'ES6 문법 사용, VanillaJS',
    completed: 80,
  },
  { name: 'REACT', content: 'CRUD 기능이 포함된 SPA 제작 경험', completed: 70 },
  {
    name: 'SPRING FRAMEWORK',
    content: 'CRUD 기능이 포함된 MVC 프로젝트 제작 경험',
    completed: 70,
  },
  {
    name: 'NODE.JS',
    content: 'Express/Koa를 기반으로 한 웹 서버 구축 경험, API 설계',
    completed: 50,
  },
  {
    name: 'JAVA',
    content: 'GUI 프로그래밍 가능, Android App 개발 경험',
    completed: 80,
  },
  {
    name: 'C++',
    content: '알고리즘 문제 해결을 위한 언어로 사용 중',
    completed: 80,
  },
  {
    name: 'C#',
    content: '.NET CORE 실습 경험, WINDOWS 응용프로그램 제작 경험',
    completed: 40,
  },
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

const Skills = ({ scrollTop }) => {
  const completedSkills = Array.apply(null, new Array(ListSkills.length)).map(
    Number.prototype.valueOf,
    0,
  );
  const [completed, setCompleted] = useState(completedSkills);
  const fromAnimate = {
    opacity: 0,
    x: 20,
    height: 0,
  };
  const [titleAnimated, setTitleAnimated] = useSpring(() => fromAnimate);
  const [subAnimated, setSubAnimated] = useSpring(() => fromAnimate);
  const [skillAnimated, setSkillAnimated] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    const offSetGroup = [
      document.querySelector('.aboutme').offsetTop,
      document.querySelector('.skills').offsetTop,
      document.querySelector('.project').offsetTop,
      document.querySelector('.contactme').offsetTop,
    ];
    const currentOffSet =
      offSetGroup[1] - (offSetGroup[1] - offSetGroup[0]) / 2;
    const nextOffSet = offSetGroup[2] + (offSetGroup[3] - offSetGroup[2]) / 2;
    const isVisible = [
      scrollTop >= currentOffSet - 300 && scrollTop < nextOffSet ? true : false,
      scrollTop >= currentOffSet - 200 && scrollTop < nextOffSet ? true : false,
      scrollTop >= currentOffSet && scrollTop < nextOffSet ? true : false,
    ];
    const animatedConfig = { mass: 50, tension: 1000, friction: 500 };
    setTitleAnimated({
      opacity: isVisible[0] ? 1 : 0,
      x: isVisible[0] ? 0 : 20,
      height: isVisible[0] ? 60 : 0,
      config: animatedConfig,
    });
    setSubAnimated({
      opacity: isVisible[1] ? 1 : 0,
      x: isVisible[1] ? 0 : 20,
      height: isVisible[1] ? 60 : 0,
      config: animatedConfig,
    });
    setSkillAnimated({
      opacity: isVisible[2] ? 1 : 0,
      config: animatedConfig,
    });
    if (isVisible[2]) {
      setCompleted(ListSkills.map((skills) => skills.completed));
    } else {
      setCompleted(ListSkills.map(() => 0));
    }
  }, [scrollTop, setTitleAnimated, setSubAnimated, setSkillAnimated]);

  return (
    <SkillsBlock className="skills">
      <animated.div style={titleAnimated} className="title-block">
        <span className="title">
          DEVELOPMENT <span>SKILLS</span>
        </span>
      </animated.div>
      <animated.div style={subAnimated} className="explanation">
        <span>{explanation}</span>
      </animated.div>
      <div className="skill-progress-block">
        {ListSkills.map((skills, index) => (
          <animated.div
            style={skillAnimated}
            className="skill-progress"
            key={index}
          >
            <span className="progress-name">{skills.name}</span>
            {skills.content && (
              <span className="progress-content">{skills.content}</span>
            )}
            <CustomLinearProgress
              className="progress-bar"
              variant="determinate"
              value={completed[index]}
            />
          </animated.div>
        ))}
      </div>
    </SkillsBlock>
  );
};

export default Skills;
