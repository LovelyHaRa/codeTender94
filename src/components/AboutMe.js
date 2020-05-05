import React from 'react';
import styled from 'styled-components';

const AboutMeBlock = styled.div`
  .title-content,
  .body-content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .title-content > span {
    margin-top: 2rem;
    font-weight: lighter;
    font-size: 2.5rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 570px) {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }

  .body-content {
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    span + span {
      margin-top: 1rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 570px) {
      font-size: 0.95rem;
    }
  }
`;

const TextGroup = {
  title1: '우연에서 필연으로...',
  body1: [
    '지금으로부터 10년 전 호기심에서 시작한 프로그래밍은',
    '어느덧 꿈을 이루기 위한 목표가 되었습니다.',
    '프로그래밍으로 무언가를 창조하는 것이 정말 즐거워서',
    '어떤 분야의 개발을 해보고 싶은지 많은 고민을 했습니다.',
    '문득 든 생각에 웹 풀스택 개발자가 되면',
    '하고싶은 건 다 할 수 있겠다고 생각했습니다.',
    '그래서 웹 개발자가 되기 위해 오늘도 수련하고 있습니다.',
  ],
  title2: '어떤 일이든지 끝장을 보는 해결사!',
  body2: [
    '놀라울 정도로 빠른 적응력, 끝은 반드시 봐야하는 근성',
    '이 두가지는 문제해결의 원동력이 되었습니다.',
    'C언어로부터 프로그래밍을 시작했기 때문에',
    '다른 언어를 빠르게 습득하고 적응할 수 있었고',
    '항상 새로운 문제가 발생할 때 마다',
    '즐기는 마음가짐으로 반드시 해결했기 때문이죠',
    '항상 새로운 지식을 갈망하고',
    '그 어떤 문제라도 포기하지 않고 해결할 자신이 있습니다.',
  ],
};

const AboutMe = () => {
  const { title1, body1, title2, body2 } = TextGroup;
  return (
    <AboutMeBlock>
      <div className="title-content">
        <span>{title1}</span>
      </div>
      <div className="body-content">
        {body1.map((text, index) => (
          <span className={'body1_' + index} key={index}>
            {text}
          </span>
        ))}
      </div>
      <div className="title-content">
        <span>{title2}</span>
      </div>
      <div className="body-content">
        {body2.map((text, index) => (
          <span className={'body2_' + index} key={index}>
            {text}
          </span>
        ))}
      </div>
    </AboutMeBlock>
  );
};

export default AboutMe;
