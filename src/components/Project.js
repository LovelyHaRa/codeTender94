import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';

const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .title-block {
    margin: 4rem;
    margin-bottom: 0;
    text-align: center;
    span {
      font-weight: 200;
      font-size: 2rem;
      font-family: 'Raleway';
      & > span {
        font-weight: 400;
      }
    }
  }
  .content {
    display: flex;
    margin: 2rem;
    justify-content: center;
    flex-direction: column;
  }
  .project-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    word-break: keep-all;
    font-weight: lighter;
    padding: 1.5rem 0.5rem;
    border-radius: 5px;
    &:hover {
      background: #fff5f5;
    }
    .project-title {
      font-size: 1.5rem;
      font-family: 'Jost';
      font-weight: 400;
    }
    .project-summary,
    .project-link {
      margin-top: 0.5rem;
      font-size: 1.25rem;
    }
    .project-summary {
      margin-top: 1.5rem;
      font-family: 'Nanum Gothic';
    }
    .project-skills {
      font-family: 'Raleway';
      font-weight: 400;
      margin: 1rem 0;
      color: #22b8cf;
      font-size: 1.25rem;
    }
    @media screen and (min-width: 1271px) {
      & > span {
        text-align: center;
      }
      margin: 1.5rem;
      .project-title {
        font-size: 1.25rem;
      }
    }
    @media screen and (max-width: 570px) {
      .project-title {
        font-size: 1.25rem;
      }
      .project-summary,
      .project-link {
        font-size: 0.95rem;
      }
      .project-skills {
        font-size: 1rem;
      }
    }
  }
`;

const ListProject = [
  {
    name: 'CODE WIKI',
    summary:
      '물품의 바코드를 스캔하면 해당 물품에 대한 정보를 위키백과 형식으로 공유하는 웹 서비스',
    skills: 'Java(Android) / JSP / JQUERY',
    link: 'https://github.com/LovelyHaRa/2019_Capstone_Design_Project',
  },
  {
    name: 'Spirng Framework - CODE WIKI',
    summary: 'CODE WIKI 프로젝트를 Spring Framework를 이용하여 Re-Engineering',
    skills: 'Spring Boot / Spring Security / JPA',
    link: 'https://github.com/LovelyHaRa/springframework-CODE_WIKI',
  },
  {
    name: 'React Single Page Application - MAKE UP HARA',
    summary:
      '블로그, 위키서비스를 제공하는 React 기반 SPA(현재 추가 기능 구현 진행 중)',
    skills: 'React / Redux / Node.js / Koa.js',
    link: 'https://github.com/LovelyHaRa/Make-Up-HaRa',
  },
];

const ProjectContent = ({ project }) => {
  const { name, summary, skills, link } = project;
  return (
    <div className="project-content">
      <span className="project-title">{name}</span>
      <span className="project-summary">{summary}</span>
      <span className="project-skills">{skills}</span>
      <span className="project-link">
        <a href={link} rel="noopener  noreferrer" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: '#000' }}
            size="2x"
          />
        </a>
      </span>
    </div>
  );
};

const Project = ({ scrollTop }) => {
  const [titleAnimated, setTitleAnimated] = useSpring(() => ({ opacity: 0 }));
  const [contentAnimated, setContentAnimated] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    const offSetGroup = [
      document.querySelector('.skills').offsetTop,
      document.querySelector('.project').offsetTop,
      document.querySelector('.contactme').offsetTop,
      document.querySelector('.footer').offsetTop,
    ];
    const currentOffSet =
      offSetGroup[1] - (offSetGroup[1] - offSetGroup[0]) / 2;
    const nextOffSet = offSetGroup[2] + (offSetGroup[3] - offSetGroup[2]) / 2;
    const isVisible = [
      scrollTop >= currentOffSet - 300 && scrollTop < nextOffSet ? true : false,
      scrollTop >= currentOffSet && scrollTop < nextOffSet ? true : false,
    ];
    const animatedConfig = { mass: 50, tension: 1000, friction: 300 };
    setTitleAnimated({ opacity: isVisible[0] ? 1 : 0, config: animatedConfig });
    setContentAnimated({
      opacity: isVisible[1] ? 1 : 0,
      config: animatedConfig,
    });
  });
  return (
    <ProjectBlock className="project">
      <animated.div style={titleAnimated} className="title-block">
        <span>
          MY <span>PROJECT</span>
        </span>
      </animated.div>
      <animated.div style={contentAnimated} className="content">
        {ListProject.map((project, index) => (
          <ProjectContent project={project} key={index} />
        ))}
      </animated.div>
    </ProjectBlock>
  );
};

export default Project;
