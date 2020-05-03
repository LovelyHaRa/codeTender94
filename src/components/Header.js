import React from 'react'
import styled from 'styled-components'

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;

  .intro {
    display: flex;
    flex-direction: column;
  }

  .intro span {
    font-weight: lighter;
    color: #fff;
  }
  .main-title {
    font-size: 5rem;
  }
  .sub-title {
    font-size: 2rem;
    margin-top: 2rem;
  }
`

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <div className="intro">
          <span className="main-title">codeTender94</span>
          <span className="sub-title">pre WEB DEVELOPER</span>
        </div>
      </HeaderBlock>
    </>
  )
}

export default Header
