import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ContactMeBlock = styled.div`
  background-color: #f3f0ff;
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  .title-content {
    margin: 4rem;
    margin-bottom: 0;
    text-align: center;
    span {
      font-size: 2rem;
      font-family: 'Jost';
      font-weight: 400;
      & > span {
        font-weight: 200;
        font-family: 'Raleway';
      }
    }
  }
  .subtitle {
    text-align: center;
    margin: 4rem 0;
    span {
      font-family: 'Nanum Gothic';
      @media screen and (min-width: 769px) {
        font-size: 1.25rem;
      }
    }
  }
  .content {
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .contact {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }
  .contact-box {
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      width: 20rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .contact-link {
    font-size: 1.25rem;
    font-family: 'Jost';
    font-weight: 400;
  }
`;

const ListContact = {
  mail: 'mailto:codetender94@gmail.com',
  blog: 'https://stylein.tistory.com/',
};

const ContactMe = ({ scrollTop }) => {
  const { mail, blog } = ListContact;
  const [titleAnimated, setTitleAnimated] = useSpring(() => ({ opacity: 0 }));
  const [subAnimated, setSubAnimated] = useSpring(() => ({ opacity: 0 }));
  const [contentAnimated, setContentAnimated] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    const offSetGroup = [
      document.querySelector('.project').offsetTop,
      document.querySelector('.contactme').offsetTop,
      document.querySelector('.footer').offsetTop,
    ];
    const currentOffSet =
      offSetGroup[1] - (offSetGroup[1] - offSetGroup[0]) / 2;
    const nextOffSet = offSetGroup[2] + 100;
    const isVisible = [
      scrollTop >= currentOffSet - 300 && scrollTop < nextOffSet ? true : false,
      scrollTop >= currentOffSet - 100 && scrollTop < nextOffSet ? true : false,
      scrollTop >= currentOffSet && scrollTop < nextOffSet ? true : false,
    ];
    const animatedConfig = { mass: 50, tension: 1000, friction: 300 };
    setTitleAnimated({ opacity: isVisible[0] ? 1 : 0, config: animatedConfig });
    setSubAnimated({ opacity: isVisible[1] ? 1 : 0, config: animatedConfig });
    setContentAnimated({
      opacity: isVisible[2] ? 1 : 0,
      config: animatedConfig,
    });
  });
  return (
    <ContactMeBlock className="contactme">
      <animated.div style={titleAnimated} className="title-content">
        <span>
          CONTACT <span>ME</span>
        </span>
      </animated.div>
      <animated.div style={subAnimated} className="subtitle">
        <span>항상 준비되어 있습니다!</span>
      </animated.div>
      <animated.div style={contentAnimated} className="content">
        <div className="contact contact-mail">
          <div className="contact-box">
            <div>
              <div />
              <a href={mail} target="_top">
                <span className="contact-link">codetender94@gmail.com</span>
              </a>
              <div />
            </div>
          </div>
        </div>
        <div className="contact contact-blog">
          <div className="contact-box">
            <div>
              <div />
              <a href={blog} target="_top">
                <span className="contact-link">TISTORY BLOG</span>
              </a>
              <div />
            </div>
          </div>
        </div>
      </animated.div>
    </ContactMeBlock>
  );
};

export default ContactMe;
