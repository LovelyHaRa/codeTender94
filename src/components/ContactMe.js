import React from 'react';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactMeBlock = styled.div`
  background-color: #f3f0ff;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
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

const ContactMe = () => {
  const { mail, blog } = ListContact;
  return (
    <ContactMeBlock className="contactme">
      <div className="title-content">
        <span>
          CONTACT <span>ME</span>
        </span>
      </div>
      <div className="subtitle">
        <span>
          제가 필요하다고 느끼신다면 언제든지 연락해 주시면 감사하겠습니다!
        </span>
      </div>
      <div className="content">
        <div className="contact contact-mail">
          <div className="contact-box">
            <div>
              <a href={mail} target="_top">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: 'rgba(0,0,0,0.5)' }}
                  size="3x"
                />
              </a>
              <a href={mail} target="_top">
                <span className="contact-link">codetender94@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="contact contact-blog">
          <div className="contact-box">
            <div>
              <a href={blog} rel="noopener  noreferrer" target="_blank">
                <FontAwesomeIcon
                  icon={faBlog}
                  style={{ color: 'rgba(0,0,0,0.5)' }}
                  size="3x"
                />
              </a>
              <a href={blog} target="_top">
                <span className="contact-link">TISTORY BLOG</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactMeBlock>
  );
};

export default ContactMe;
