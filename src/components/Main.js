import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
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
    /* text-align: center; */
  }

  .intro {
    display: flex;
    /* align-items: center; */
    margin-left: 2rem;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    flex-direction: column;
  }

  .intro span {
    color: #fff;
  }
  .main-title {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }
  .main-title span {
    font-size: 5rem;
    font-family: 'Raleway';
    font-weight: 700;
    &:first-of-type {
      letter-spacing: 1rem;
    }
    &:nth-of-type(2) {
      margin-left: 0.125rem;
      letter-spacing: 1.25rem;
    }
    @media screen and (max-width: 1270px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 680px) {
      font-size: 3rem;
      &:nth-of-type(2) {
        margin-left: 0.125rem;
        letter-spacing: 1.125rem;
      }
    }
    @media screen and (max-width: 500px) {
      font-size: 2.5rem;
    }
  }
  .sub-title {
    display: flex;
    margin-left: 2.5rem;
    margin-top: 1rem;
    span + span {
      margin-left: 0.5rem;
    }
  }
  .sub-title span {
    font-size: 1.5rem;
    font-family: 'Raleway';
    font-weight: 200;
    color: #f1f3f5;
    letter-spacing: 0.125rem;
    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Main = () => {
  return (
    <>
      <MainBlock className="main">
        <div className="intro">
          <div className="main-title">
            <span>CODE</span>
            <span>TENDER</span>
          </div>
          <div className="sub-title">
            <span>Front-end</span>
            <span>{'&'}</span>
            <span>Back-end</span>
            <span>WEB Developer</span>
          </div>
        </div>
      </MainBlock>
    </>
  );
};

export default Main;
