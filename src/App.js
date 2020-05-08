import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ScrollSpy from './components/ScrollSpy';

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e) => {
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    setScrollTop(scrollTop);
  };
  window.addEventListener('scroll', onScroll);
  useEffect(() => {}, [scrollTop]);

  return (
    <>
      <Main />
      <AboutMe scrollTop={scrollTop} />
      <Skills scrollTop={scrollTop} />
      <Project scrollTop={scrollTop} />
      <ContactMe scrollTop={scrollTop} />
      <Footer />
      <ScrollSpy />
    </>
  );
};

export default App;
