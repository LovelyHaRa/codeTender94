import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  color: #fff;
  span {
    margin: 0.125rem;
    font-family: 'Jost';
    font-weight: 200;
    font-size: 1.125rem;
    @media screen and (max-width: 640px) {
      font-size: 0.95rem;
    }
    @media screen and (max-width: 540px) {
      font-size: 0.8rem;
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
      <div className="copyright">
        <span>© 2020. CODETENDER94.</span>
        <span>All contents cannot be copied without permission.</span>
      </div>
    </FooterBlock>
  );
};

export default Footer;
