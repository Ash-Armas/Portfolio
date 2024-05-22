import React, { useRef } from 'react';
import Header from './Header';
import '../styles/About.css';

const About = () => {
  const skills = ['C', 'C++','Java','HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'SQL'];
  const databases = ['MongoDB', 'MySQL'];
  const tools = ['MongoDB Atlas', 'MySQL Workbench', 'GitHub', 'Vercel'];

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const skillsRef = useRef(null);
  const databasesRef = useRef(null);
  const toolsRef = useRef(null);

  return (
    <div>
      <Header />
      <div className="page-container">
        {/* <h1>About Me</h1>
        <p>Welcome to the about page. Here you can learn more about me and my work.</p> */}

        <div className="section">
          <h2>Skills:</h2>
          <div className="slider-container">
            <button className="arrow left" onClick={() => scrollLeft(skillsRef)}>←</button>
            <div className="slider" ref={skillsRef}>
              {skills.map((skill, index) => (
                <div key={index} className="card">
                  <h3>{skill}</h3>
                </div>
              ))}
            </div>
            <button className="arrow right" onClick={() => scrollRight(skillsRef)}>→</button>
          </div>
        </div>

        <div className="section">
          <h2>Database:</h2>
          <div className="slider" ref={databasesRef}>
            {databases.map((database, index) => (
              <div key={index} className="card">
                <h3>{database}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Tools:</h2>
          <div className="slider" ref={toolsRef}>
            {tools.map((tool, index) => (
              <div key={index} className="card">
                <h3>{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
