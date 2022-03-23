import '../styles/About.css';
import React from 'react';
import { book, cafe, controller, music, tv } from '../assets/index';

export const About = () => {
  return (
    <main className="about-container">
      <h1 className="about-title">ABOUT ME</h1>
      <p>Born in Mexico City </p>
      <p className="about-content">
        In my free time I build computers and I like to read about new
        technological trends in different areas such as mechanics, electronics
        and programming. I'm a Web Developer with a current tech stack that
        includes HTML5, CSS3, Javascript and Node.js
      </p>
      <p className="about-content">
        Front-End Frameworks and libraries: React.js, Redux, Bootstrap,
        react-bootstrap
      </p>
      <p className="about-content">
        Back-End Frameworks and libraries: Express.js, handlebars.js, Mongoose
      </p>
      <p className="about-content">Database: MongoDB, MySQL</p>
      <div className="about-interests">
        <h2 className="about-title interests-title">Interests</h2>
        <img src={book} alt="Book icon" />
        <img src={cafe} alt="Cafe icon" />
        <img src={controller} alt="Videogame Controller icon" />
        <img src={music} alt="music icon" />
        <img src={tv} alt="TV icon" />
      </div>
    </main>
  );
};
