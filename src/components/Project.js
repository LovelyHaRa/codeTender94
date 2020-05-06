import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  .title-block {
    margin: 2rem 3.5rem;
    margin-right: 0;
    margin-bottom: 0;
    text-align: center;
    span {
      font-weight: lighter;
      font-size: 2rem;
    }
  }
  .content {
    display: flex;
    margin: 2rem;
    justify-content: center;
    @media screen and (max-width: 1270px) {
      flex-direction: column;
    }
  }
  .project-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    word-break: keep-all;
    font-weight: lighter;
    .project-title {
      font-size: 1.5rem;
    }
    .project-summary,
    .project-link {
      margin-top: 0.5rem;
      font-size: 1.25rem;
    }
    @media screen and (min-width: 1271px) {
      & > span {
        text-align: center;
      }
      margin: 1.5rem;
      .project-title {
        font-size: 1rem;
        font-weight: normal;
      }
    }
    @media screen and (max-width: 570px) {
      .project-title {
        font-weight: lighter;
        font-size: 1.25rem;
      }
      .project-summary,
      .project-link {
        font-size: 0.95rem;
      }
    }
  }
`;

const ListProject = [
  {
    name: 'CODE WIKI',
    summary:
      '물품의 바코드를 스캔하면 해당 물품에 대한 정보를 위키백과 형식으로 공유하는 웹 서비스',
    link: 'https://github.com/LovelyHaRa/2019_Capstone_Design_Project',
  },
  {
    name: 'Spirng Framework - CODE WIKI',
    summary: 'CODE WIKI 프로젝트를 Spring Framework를 이용하여 Re-Engineering',
    link: 'https://github.com/LovelyHaRa/springframework-CODE_WIKI',
  },
  {
    name: 'React Single Page Application - MAKE UP HARA',
    summary:
      '블로그, 위키서비스를 제공하는 React 기반 SPA(현재 추가 기능 구현 진행 중)',
    link: 'https://github.com/LovelyHaRa/Make-Up-HaRa',
  },
];

const ProjectContent = ({ project }) => {
  const { name, summary, link } = project;
  return (
    <div className="project-content">
      <span className="project-title">{name}</span>
      <span className="project-summary">{summary}</span>
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

const Project = () => {
  return (
    <ProjectBlock>
      <div className="title-block">
        <span>MY PROJECT</span>
      </div>
      <div className="content">
        {ListProject.map((project, index) => (
          <ProjectContent project={project} key={index} />
        ))}
      </div>
    </ProjectBlock>
  );
};

export default Project;
