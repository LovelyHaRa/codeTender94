import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  color: #fff;
  span {
    margin: 0.25rem;
    font-family: 'Jost';
    font-weight: 200;
    font-size: 1.125rem;
    @media screen and (max-width: 620px) {
      font-size: 0.95rem;
    }
    & > a {
      font-weight: 300;
      color: #66d9e8;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock className="footer">
      <span>
        #CodeTender94 PORTFOLIO, Be Made with{' '}
        <a
          href="https://create-react-app.dev/"
          rel="noopener  noreferrer"
          target="_blank"
        >
          Create React App
        </a>
      </span>
      <span>Copyright 2020. CODETENDER94. All rights reserved.</span>
    </FooterBlock>
  );
};

export default Footer;
