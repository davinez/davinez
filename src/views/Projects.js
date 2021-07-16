import '../styles/Projects.css';
import React from 'react';
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from '../assets/index';

export const Projects = () => {
  return (
    <main className="projects-container">
      <div className="project-card">
        <img src={project1} alt="Project Shopping cart Screenshot" />
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
        <img src={project2} alt="Project memory card game Screenshot" />
        <a
          href="https://davinez.github.io/memory-card-game/"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          Memory Card Game
        </a>
        <ul className="projects-list">
          <li>React for user interface</li>
          <li>Hooks for state management</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={project3} alt="Project CV Builder Screenshot" />
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
        <img src={project4} alt="Project ToDo Screenshot" />
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

      <div className="project-card">
        <img src={project5} alt="Project static website Screenshot" />
        <a
          href="https://davinez.github.io/restaurant-page/"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          Restaurant Website
        </a>
        <ul className="projects-list">
          <li>Static website with vanilla JS for conditional rendering</li>
        </ul>
      </div>

      <div className="project-card">
        <img src={project6} alt="Project tic-tac Screenshot" />
        <a
          href="https://davinez.github.io/Tic-Tac-Toe/"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-link"
        >
          Tic Tac Toe Game
        </a>
        <ul className="projects-list">
          <li>Used Vanilla Javascript for dynamic user interfacer</li>
        </ul>
      </div>
    </main>
  );
};
