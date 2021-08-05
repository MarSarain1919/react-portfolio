import React 'react';
import './App.css';

function Project {
  return (
    <main>
      <section className="about">
        <div className="intro">
          <p>
            I am currently a Web Develop student at the UCSD Coding Bootcamp, looking to gain new skills in technology. The ideal job I would like to pursue would be game developer, but I enjoy all aspects of coding. This version of my portfolio was created using React.
          </p>
        </div>
        <img>"../images/profile.jpeg"</img>
      </section>
      <section className="projects">
      <h2>Projects</h2>
      <div class="group-4">
          <h3>Web API Group Project</h3>
          <a href="https://maxwellstickels.github.io/sports-app/"><img
                  src="./assets/images/fullsitescreenshot.png" alt="group screenshot" /></a>
      </div>
      <div class="password-gen">
          <h3>Random Password Generator</h3>
          <a href="https://marsarain1919.github.io/Password-Assignment/"><img
                  src="./assets/images/passscreenshot.png" alt="screenshot of password generator" /></a>
      </div>
      <div class="movie-party">
          <h3>Movie Party</h3>
          <a href="https://movie-party-project.herokuapp.com/"><img src="../images/screencapture-movie-party-project-herokuapp-2021-08-04-21_08_36.png"
                  alt="screenshot of note taker" /></a>
      </div>
      <div class="note-taker">
          <h3>NodeJS Note Taker</h3>
          <a href="https://ancient-bayou-00579.herokuapp.com/"><img src="./assets/images/note-taker.png"
                  alt="screenshot of note taker" /></a>
      </div>
      </section>
    </main>
  )
}

export default Project;
