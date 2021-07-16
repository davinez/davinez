import '../styles/Home.css';
import React from 'react';
import { linkedin, github } from '../assets/index';

export const Home = () => {
  return (
    <main className="home-background">
      <div className="home-container">
        <h1>
          Web <span className="home-title-span">Developer</span>
        </h1>
        <a
          href="https://linkedin.com/in/david-narvaez-ibañez-12b446217"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Linkedin icon" className="home-image" />
        </a>
        <a
          href="https://github.com/davinez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github icon" className="home-image" />
        </a>
      </div>
    </main>
  );
};
