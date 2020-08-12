import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const AboutMeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  align-items: flex-start;

  .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(350deg, #fff 50.9%, #ffa8a8 51%);
  }
  .content {
    display: flex;
    width: 100%;
  }
  .content-wrap {
    display: flex;
    width: 100%;
    margin: 3rem 5rem;
    @media screen and (max-width: 600px) {
      margin: 3rem 3rem;
    }
    flex-direction: column;
  }
  .title-content,
  .body-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .content-left-align {
    align-items: flex-start;
    @media screen and (max-width: 570px) {
      align-items: center;
    }
  }
  .content-right-align {
    align-items: flex-end;
    @media screen and (max-width: 570px) {
      align-items: center;
    }
    @media screen and (max-width: 550px) {
      margin-top: 4rem;
      margin-bottom: 1rem;
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
    @media screen and (max-width: 650px) {
      font-size: 1.5rem;
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
    @media screen and (max-width: 650px) {
      font-size: 1.125rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
  }
`;

const TextGroup = {
  title1: '우연에서 필연으로',
  body1: [
    '지금으로부터 10년 전 호기심에서 시작한 프로그래밍은',
    '어느덧 꿈을 이루기 위한 목표가 되었습니다.',
    '프로그래밍으로 개발하는 것 자체가 즐거워서',
    '어떤 개발자가 되고 싶은지 많은 고민도 했습니다.',
    '그러던 와중 웹 개발을 하게 되면서, 문득 든 생각에',
    '웹 풀스택 개발자가 되면',
    '하고싶은 건 다 할 수 있겠다고 느꼈습니다.',
    '그래서 웹 개발자가 되기 위해 오늘도 노력하고 있습니다.',
  ],
  title2: '근성의 해결사',
  body2: [
    '놀라울 정도로 빠른 적응력, 끝은 반드시 봐야하는 근성',
    '이 두가지는 문제해결의 원동력이 되었습니다.',
    'C언어로 프로그래밍에 입문한 덕분에',
    '프로그래밍 언어는 도구에 불과함을 깨달았고',
    '매번 다가오는 문제 상황은',
    '끊임없는 생각과 행동으로 문제를 해결했습니다,',
    '지금의 자신에 만족하지 않고',
    '새로운 지식을 갈망하고 적응하는 사람이 되겠습니다.',
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
      <div className="container">
        <animated.div style={first} className="content">
          <div className="content-wrap">
            <div className="title-content content-left-align">
              <span>{title1}</span>
            </div>
            <div className="body-content content-left-align">
              {body1.map((text, index) => (
                <span className={'body1_' + index} key={index}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </animated.div>
        <animated.div style={second} className="content">
          <div className="content-wrap">
            <div className="title-content content-right-align">
              <span>{title2}</span>
            </div>
            <div className="body-content content-right-align">
              {body2.map((text, index) => (
                <span className={'body2_' + index} key={index}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </animated.div>
      </div>
    </AboutMeBlock>
  );
};

export default AboutMe;
