// src/components/Projects.js
import React from 'react';
import Header from './Header'; // Import the Header component
import '../styles/Projects.css'; // Updated path

const Projects = () => {
  return (
    <>
      <Header /> {/* Include the Header component */}
      <div className="page-container">
        <h1>My Projects</h1>
        <div className="dice-container">
          <div className="dice">
            <div className="face front">
              <h3>Responsive Ecommerce Website</h3>
              <p>Using HTML, CSS, JavaScript, Node.js, and MongoDB</p>
            </div>
            <div className="face back">
              <h3>Chatting and Video Calling App</h3>
              <p>Using Node.js and Socket.io</p>
            </div>
            <div className="face left">
              <h3>Face Recognition App</h3>
              <p>Using Python</p>
            </div>
            <div className="face right">
              <h3>Peer to Peer Delivery App</h3>
              <p>Using React.js</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
