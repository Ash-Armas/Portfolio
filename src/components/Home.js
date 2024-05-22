// src/components/Home.js
import React, { useRef } from 'react';
import Header from './Header';
import '../styles/Home.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, contactRef }} />
      <div className="home-container" id="home">
        <div className="home-content">
          <h1>Hello, I am Yash Sharma.</h1>
          <p>This is my portfolio website.</p>
          <button onClick={() => scrollToSection(aboutRef)}>Let's Get Started</button>
        </div>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
