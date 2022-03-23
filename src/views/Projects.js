import '../styles/Projects.css';
import React from 'react';
import { shopping, libraryexpress, inventory, github } from '../assets/index';

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
        <a href="https://github.com/davinez/mern-inventoryapp" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub icon" className="github-image" />
        </a>
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
        <a href="https://github.com/davinez/library_express" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub icon" className="github-image" />
        </a>
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
        <a href="https://github.com/davinez/shopping-cart-react" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub icon" className="github-image" />
        </a>
      </div>
    </main>
  );
};
