// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
// import About from './About';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hello, I am Yash Sharma.</h1>
        <p>This is my portfolio website.</p>
        <button onClick={() => window.location.href = '/about'}>Let's Get Started</button>
      </div>
    </div>
  );
}

export default Home;
