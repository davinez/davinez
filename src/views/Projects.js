import '../styles/Projects.css';
import React from 'react';
import {
  shopping,
  todo,
  cvbuilder,
  libraryexpress,
  inventory,
  auth,
} from '../assets/index';

export const Projects = () => {
  return (
    <main className="projects-container">
      <div className="project-card">
        <img src={inventory} alt="Project Inventory Screenshot" />
        <a
          href="https://davinez-mern-inventory.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          Inventory App MERN Stack
        </a>
        <ul className="projects-list">
          <li>Developed with Express.js for server and React.js for client</li>
          <li>Use of MongoDB</li>
          <li>react-bootstrap libray for UI</li>
          <li>The website implements basic CRUD operations</li>
          <li>Use of MVC design pattern</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={libraryexpress} alt="Project Local library Screenshot" />
        <a
          href="https://davinezlibrary.herokuapp.com/catalog"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          Local Library
        </a>
        <ul className="projects-list">
          <li>Developed with Express.js</li>
          <li>Use of Mongoose</li>
          <li>Using MongoDB Atlas as a cloud database</li>
          <li>Using Handlebars.js for server-side rendering (SSR)</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={auth} alt="Project JWT MERN Screenshot" />
        <a
          href="https://davinez-mern-auth.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          MERN JWT Authentication
        </a>
        <ul className="projects-list">
          <li>User Authentication and Authorization using JSON Web Token</li>
          <li>Developed with Expres/React/MongoDB</li>
          <li>To test access you can use 'admin1' 'pass2'</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={shopping} alt="Project Shopping cart Screenshot" />
        <a
          href="https://shopping-cart-davoworld.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          Shopping Cart
        </a>

        <ul className="projects-list">
          <li>React for user interface and Context API for state management</li>
          <li>Used react-router</li>
          <li>Used local JSON file to render shop items</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={cvbuilder} alt="Project CV Builder Screenshot" />
        <a
          href="https://davinez.github.io/cv-builder-react/"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          CV Builder
        </a>
        <ul className="projects-list">
          <li>React for user interface</li>
          <li>Used Class Components</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={todo} alt="Project ToDo Screenshot" />
        <a
          href="https://davinez.github.io/ToDo-List/"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          ToDo App
        </a>
        <ul className="projects-list">
          <li>Vanilla Javascript for user interface</li>
          <li>DOM manipulation with vanilla JS</li>
        </ul>
      </div>
    </main>
  );
};
