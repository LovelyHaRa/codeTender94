import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.header`
  display: flex;
  align-items: center;
  color: #000;
  background: #e55d87;
  background: -webkit-linear-gradient(to right, #e55d87, #5fc3e4);
  background: linear-gradient(to right, #e55d87, #5fc3e4);
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
  @media screen and (max-width: 1270px) {
    justify-content: center;
    text-align: center;
  }

  .intro {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    width: 100%;
    @media screen and (max-width: 1270px) {
      margin: 0;
    }
  }

  .intro span {
    color: #fff;
  }
  .main-title span {
    font-size: 5rem;
    font-family: 'Jost';
    font-weight: 100;
    letter-spacing: 0.25rem;
    margin-left: 3rem;
    @media screen and (max-width: 1270px) {
      margin: 0;
    }
    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 680px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
  .sub-title {
    margin-top: 2rem;
    margin-right: 12rem;
    justify-content: center;
    text-align: right;

    @media screen and (max-width: 1270px) {
      text-align: center;
      margin-right: 0;
    }
  }
  .sub-title span {
    font-size: 2rem;
    font-family: 'Raleway';
    font-style: italic;
    font-weight: 200;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

const Main = () => {
  return (
    <>
      <MainBlock className="main">
        <div className="intro">
          <div className="main-title">
            <span>CODE_TENDER 94</span>
          </div>
          <div className="sub-title">
            <span>pre WEB DEVELOPER</span>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Main;
