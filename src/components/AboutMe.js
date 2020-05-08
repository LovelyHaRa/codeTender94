import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const AboutMeBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 100vh;
  align-items: center;
  @media screen and (max-width: 1270px) {
    flex-direction: column;
    justify-content: center;
  }
  .content {
    @media screen and (min-width: 1271px) {
      margin: 3rem 0;
    }
  }
  .title-content,
  .body-content {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: 1270px) {
      align-items: center;
      justify-content: center;
    }
  }

  .title-content > span {
    margin-top: 2rem;
    font-weight: 400;
    font-size: 2rem;
    font-family: 'Nanum Gothic';
    @media screen and (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .body-content {
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-family: 'Noto Sans KR';
    font-weight: 100;
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media screen and (max-width: 570px) {
      font-size: 1rem;
    }
  }
`;

const TextGroup = {
  title1: '우연에서 필연으로...',
  body1: [
    '지금으로부터 10년 전 호기심에서 시작한 프로그래밍은',
    '어느덧 꿈을 이루기 위한 목표가 되었습니다.',
    '프로그래밍으로 무언가를 창조하는 것이 정말 즐거워서',
    '어떤 분야의 개발자가 되고 싶은지 많은 고민을 했습니다.',
    '그러던 와중 하이브리드 앱 개발을 하게 되면서',
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

const AboutMe = ({ scrollTop }) => {
  const { title1, body1, title2, body2 } = TextGroup;
  const [first, setFirst] = useSpring(() => ({
    opacity: 0,
  }));
  const [second, setSecond] = useSpring(() => ({
    opacity: 0,
  }));
  useEffect(() => {
    const offSetGroup = [
      document.querySelector('.aboutme').offsetTop,
      document.querySelector('.skills').offsetTop,
      document.querySelector('.project').offsetTop,
    ];
    const nextOffSet = offSetGroup[2] - (offSetGroup[2] - offSetGroup[1]);
    const isFirstVisible =
      scrollTop >= offSetGroup[0] / 2 - 200 && scrollTop < nextOffSet
        ? true
        : false;
    const isSecondVisible =
      scrollTop >= offSetGroup[0] - 200 && scrollTop < nextOffSet
        ? true
        : false;
    setFirst({ config: { mass: 20 }, opacity: isFirstVisible ? 1 : 0 });
    setSecond({ config: { mass: 20 }, opacity: isSecondVisible ? 1 : 0 });
  }, [scrollTop, setFirst, setSecond]);

  return (
    <AboutMeBlock className="aboutme">
      <animated.div style={first} className="content">
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
      </animated.div>
      <animated.div style={second} className="content">
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
      </animated.div>
    </AboutMeBlock>
  );
};

export default AboutMe;
