import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated } from 'react-spring';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core';
import CarouselSlide from './common/CarouselSlide';

const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
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
    cursor: pointer;
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
  .project-modal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 680px) {
    .modal {
      width: 95%;
    }
  }
`;

const ListProject = [
  {
    name: 'React Single Page Application - MAKE UP HARA',
    summary: '블로그, 위키서비스를 제공하는 React 기반 SPA',
    skills: 'React / Redux / Node.js / Koa.js / MongoDB',
    link: 'https://github.com/LovelyHaRa/Make-Up-HaRa',
    feature: [
      '다크모드 지원',
      '로컬 / 소셜(Google, Naver, Kakao) 로그인',
      '블로그: 포스트 조회 / 작성 / 수정 / 삭제',
      '블로그: 작성자 / 태그별 조회 기능',
      '블로그: 댓글 작성 / 삭제',
      '위키: 문서 작성 / 수정',
      '위키: 문서 검색 / 검색결과 정렬',
      '마이페이지: 유저 정보 수정, 활동 기록 조회',
    ],
    applink: 'https://makeuphara.azurewebsites.net/',
  },
  {
    name: 'React Native App - MAKE UP HARA',
    summary: '바코드 스캔 검색을 지원하는 MAKE UP HARA App Service',
    skills: 'React Native / Expo / React Navigation / Redux',
    link: 'https://github.com/LovelyHaRa/MakeUpHaRa-react-native',
    feature: [
      '다크모드 지원',
      '바코드 스캔으로 위키 문서 조회',
      '블로그: 포스트 조회, 검색',
      '위키: 문서 검색',
      '마이페이지: 비밀번호 변경, 바코드 문서 연동',
    ],
    img: [
      process.env.PUBLIC_URL + '/images/project/makeuphara-react-native/01.png',
      process.env.PUBLIC_URL + '/images/project/makeuphara-react-native/02.png',
      process.env.PUBLIC_URL + '/images/project/makeuphara-react-native/03.png',
      process.env.PUBLIC_URL + '/images/project/makeuphara-react-native/04.png',
    ],
  },
  {
    name: 'Spirng Framework - CODE WIKI',
    summary: 'CODE WIKI 프로젝트를 Spring Framework를 이용하여 Re-Engineering',
    skills: 'Spring Boot / Spring Security / JPA / MySQL',
    link: 'https://github.com/LovelyHaRa/springframework-CODE_WIKI',
    feature: [
      '코드값을 기반으로 위키 문서 조회/관리',
      'Spring Security 기반 사용자 인증',
      '게시판',
      '관리자 페이지(대시보드, DB관리)',
    ],
    img: [
      process.env.PUBLIC_URL + '/images/project/spring-codewiki/01.jpg',
      process.env.PUBLIC_URL + '/images/project/spring-codewiki/02.jpg',
      process.env.PUBLIC_URL + '/images/project/spring-codewiki/03.jpg',
      process.env.PUBLIC_URL + '/images/project/spring-codewiki/04.jpg',
      process.env.PUBLIC_URL + '/images/project/spring-codewiki/05.jpg',
      process.env.PUBLIC_URL + '/images/project/spring-codewiki/06.jpg',
    ],
  },
  {
    name: 'Capstone Design - CODE WIKI',
    summary:
      '물품의 바코드를 스캔하면 해당 물품에 대한 정보를 위키백과 형식으로 공유하는 웹 서비스',
    skills: 'Java(Android) / JSP / JQUERY / MySQL',
    link: 'https://github.com/LovelyHaRa/2019_Capstone_Design_Project',
    feature: [
      'Bar/QR코드 스캔(Android APP)',
      '코드값을 기반으로 위키 문서 조회/관리',
      '사용자 인증',
      '게시판',
    ],
    img: [
      process.env.PUBLIC_URL + '/images/project/codewiki/01.jpg',
      process.env.PUBLIC_URL + '/images/project/codewiki/02.jpg',
      process.env.PUBLIC_URL + '/images/project/codewiki/03.jpg',
    ],
  },
];

const ProjectContent = ({ project, onClick, index }) => {
  const { name, summary, skills, link } = project;
  return (
    <div onClick={() => onClick(index)} className="project-content">
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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '@media (max-width: 780px)': {
      width: '70%',
    },
    '@media (min-width: 781px)': {
      width: '740px',
    },
    height: '90%',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.5rem',
      height: '0.5rem',
      backgroundColor: '#f1f3f5',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '0.5rem',
      backgroundColor: '#adb5bd',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-button': {
      width: 0,
      height: 0,
    },
  },
  title: {
    fontFamily: 'Raleway',
    fontSize: '1rem',
    margin: '1rem 0',
    wordBreak: 'keep-all',
  },
  summary: {
    fontFamily: 'Nanum Gothic',
    marginBottom: '1rem',
    wordBreak: 'keep-all',
  },
  skills: {
    fontFamily: 'Raleway',
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#22b8cf',
  },
  featureTitle: {
    fontFamily: 'Nanum Gothic',
    marginTop: '1rem',
  },
  featureList: {
    listStyleType: 'square',
    paddingLeft: '0.75rem',
  },
  featureItem: {
    fontFamily: 'Nanum Gothic',
    margin: '0.5rem',
    paddingLeft: '0.25rem',
    wordBreak: 'keep-all',
  },
  gridListRoot: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridList: {
    width: 460,
    height: 360,
  },
  applink: {
    margin: '1rem 0',
    color: '#22b8cf',
    fontFamily: 'Nanum Gothic',
    fontSize: '1rem',
  },
}));

const ProjectModal = ({ project, open, onClose }) => {
  const classes = useStyles();
  const { name, summary, skills, feature, img, applink } = project;
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <span className={classes.title}>{name}</span>
          <span className={classes.summary}>{summary}</span>
          <span className={classes.skills}>{skills}</span>
          <div>
            <span className={classes.featureTitle}>구현 기능</span>
            <ul className={classes.featureList}>
              {feature.map((element, index) => (
                <li className={classes.featureItem} key={index}>
                  {element}
                </li>
              ))}
            </ul>
          </div>
          {applink && (
            <a
              className={classes.applink}
              href={applink}
              rel="noopener  noreferrer"
              target="_blank"
            >
              바로가기
            </a>
          )}
          {img && <CarouselSlide content={img} />}
        </div>
      </Fade>
    </Modal>
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

  const openArray = Array.apply(null, new Array(ListProject.length)).map(
    Boolean.prototype.valueOf,
    false,
  );
  const [open, setOpen] = useState(openArray);
  const handleOpen = (target) => {
    setOpen(
      openArray.map((element, index) => (index === target ? true : false)),
    );
  };

  const handleClose = () => {
    setOpen(openArray.map(() => false));
  };

  return (
    <ProjectBlock className="project">
      <animated.div style={titleAnimated} className="title-block">
        <span>
          MY <span>PROJECT</span>
        </span>
      </animated.div>
      <animated.div style={contentAnimated} className="content">
        {ListProject.map((project, index) => (
          <div key={index}>
            <ProjectContent
              onClick={handleOpen}
              index={index}
              project={project}
            />
            <ProjectModal
              project={project}
              open={open[index]}
              onClose={handleClose}
            />
          </div>
        ))}
      </animated.div>
    </ProjectBlock>
  );
};

export default Project;
