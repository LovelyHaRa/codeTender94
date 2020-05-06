import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import Navigator from './components/Navigator';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navigator />
      <Header />
      <AboutMe />
      <Skills />
      <Project />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
