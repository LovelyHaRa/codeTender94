import React from 'react';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactMeBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  .title-content {
    margin: 2rem 3.5rem;
    margin-right: 0;
    margin-bottom: 0;
    text-align: center;
    span {
      font-weight: lighter;
      font-size: 2rem;
    }
  }
  .subtitle {
    text-align: center;
    margin: 2rem 0;
  }
  .content {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  .contact {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 1rem;
  }
  a {
    color: inherit;
    text-decoration: none !important;
  }
`;

const ListContact = {
  mail: 'mailto:codetender94@gmail.com',
  blog: 'https://stylein.tistory.com/',
};

const ContactMe = () => {
  const { mail, blog } = ListContact;
  return (
    <ContactMeBlock>
      <div className="title-content">
        <span>CONTACT ME</span>
      </div>
      <div className="subtitle">
        <span>
          제가 필요하다고 느끼신다면 언제든지 연락해 주시면 감사하겠습니다!
        </span>
      </div>
      <div className="content">
        <div className="contact contact-mail">
          <a href={mail} target="_top">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: '#000' }}
              size="4x"
            />
          </a>
          <a href={mail} target="_top">
            codetender94@gmail.com
          </a>
        </div>
        <div className="contact contact-mail">
          <a href={blog} rel="noopener  noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faBlog}
              style={{ color: '#000' }}
              size="4x"
            />
          </a>
        </div>
      </div>
    </ContactMeBlock>
  );
};

export default ContactMe;
