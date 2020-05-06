import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterBlock>
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
