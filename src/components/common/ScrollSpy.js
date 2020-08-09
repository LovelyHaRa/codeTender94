import React from 'react';
import styled from 'styled-components';

const ScrollSpyBlock = styled.nav`
  position: fixed;
  z-index: 999;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  .menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .menu li {
    position: relative;
    text-align: right;
  }
  .menu li .context {
    outline: none;
    border: none;
    background: transparent;
    padding: 5px 0;
    font-family: 'Raleway';
    font-weight: 400;
  }
  .menu li .context::before,
  .menu li .context::after {
    position: absolute;
    content: ' ';
    border-radius: 50%;
    top: 50%;
    transition: all 0.3s ease;
  }
  .menu li .context::before {
    width: 5px;
    height: 5px;
    right: 0;
    border: 2px solid #99e9f2;
    background: #99e9f2;
    transform: translateY(-50%);
  }
  .menu li .context::after {
    width: 10px;
    height: 10px;
    border: 2px solid #f03e3e;
    background: #f03e3e;
    right: -2.5px;
    transform: translateY(-50%) scale(0);
  }
  .menu li .context.active::before,
  .menu li:hover .context::before {
    background: #f03e3e;
    border-color: #f03e3e;
  }
  .menu li .context.active::after,
  .menu li:hover .context::after {
    transform: translateY(-50%) scale(1);
  }
  .menu li .context span {
    display: inline-block;
    opacity: 0;
    letter-spacing: 0.5px;
    background-color: #f03e3e;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    margin-right: 30px;
    transform: translateX(20px);
    transition: all 0.3s ease;
  }
  .menu li .context span::before {
    display: block;
    position: absolute;
    content: ' ';
    border-left: 7px solid #f03e3e;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    top: 50%;
    transform: translate(7px, -50%);
    right: 0;
    transition: all 0.3s ease;
  }
  .menu li .context.active span,
  .menu li:hover .context span {
    transform: translateX(0);
    opacity: 1;
  }
`;

const onClick = (targetClassName) => {
  const move = document.querySelector(targetClassName).offsetTop;
  window.scrollTo({ top: move, behavior: 'smooth' });
};

const ScrollSpy = () => {
  return (
    <ScrollSpyBlock>
      <ul className="menu">
        <li>
          <button onClick={() => onClick('.main')} className="context">
            <span>MAIN</span>
          </button>
        </li>
        <li>
          <button onClick={() => onClick('.aboutme')} className="context">
            <span>ABOUT ME</span>
          </button>
        </li>
        <li>
          <button onClick={() => onClick('.skills')} className="context">
            <span>SKILLS</span>
          </button>
        </li>
        <li>
          <button onClick={() => onClick('.project')} className="context">
            <span>PROJECT</span>
          </button>
        </li>
        <li>
          <button onClick={() => onClick('.contactme')} className="context">
            <span>CONTACT ME</span>
          </button>
        </li>
      </ul>
    </ScrollSpyBlock>
  );
};

export default ScrollSpy;
