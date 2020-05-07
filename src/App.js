import React from 'react';
import './App.css';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import Navigator from './components/Navigator';
import Footer from './components/Footer';
import ScrollSpy from './components/ScrollSpy';

const App = () => {
  return (
    <>
      <Navigator />
      <Main />
      <AboutMe />
      <Skills />
      <Project />
      <ContactMe />
      <Footer />
      <ScrollSpy />
    </>
  );
};

export default App;
