import './CSS Files/projects.css';

import encaixe from './Images/encaixe.jpg';
import pokemon from './Images/pokemon.gif';
import drone from './Images/drone.gif';
import ganapp from './Images/ganapp.gif';
import ninja from './Images/ninja.gif';
import finance from './Images/finance.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description, isVideo = false }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        {isVideo ?
          <video controls autoPlay loop style={{height: '100%', width: '100%'}}>
            <source src={imageSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video> :
        <img style={{objectFit: 'contain'}} className='images' src={imageSrc} alt={title} />
        }
      </a>
      <div className='project-info'>
        <div className='project-title'>
          
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
      <ProjectCard
          title="Autonomus drone simulation in ROS"
          imageSrc={drone}
          githubLink="https://github.com/ctu-mrs"
          technologies="ROS, Python, Docker/Singularity"
          description="This is a little of my work on FBOT, the team of robotics in FURG (University of Rio Grande), i'm simulating a autonomus drone to pass in tests."
        />

        <ProjectCard
          title="Pokémon fire red with python and graphics"
          imageSrc={pokemon}
          githubLink="https://github.com/Eduaugust/Pokemon-fire-red--Python"
          technologies="Python"
          description="This project is a Python-based remake of the popular game Pokémon FireRed, which is a remake of the original Pokémon Red and Green games for the Game Boy Advance1. The project aims to recreate the gameplay, graphics, and features of the original game using Graphics, a complex framework."
        />

        <ProjectCard
          title="Ganapp"
          imageSrc={ganapp}
          githubLink="https://github.com/KauaOrtiz/Ganapp"
          technologies="Java, JS and Golang"
          description="GitHub repo showcases Android app from Computer Engineering course at Federal University of Rio Grande, Brazil. Utilizes Generative Adversarial Networks (GANs) to create synthetic images. Created for Programming Languages discipline."
        />

        <ProjectCard
          title="Ninja game with python and graphics"
          imageSrc={ninja}
          githubLink="https://github.com/Eduaugust/Game---Treino-Ninja"
          technologies="Python"
          description="This project is a game developed using the Graphics library in Python. The game is called Treino Ninja, which means Ninja Training in Portuguese. The game consists of a ninja character who has to dodge obstacles and collect coins while running on a platform."
        />

        <ProjectCard
          title="Flutter Finance: A Personal Finance App Built with Flutter and Firebase"
          imageSrc={finance}
          githubLink="https://github.com/Eduaugust/finance_app"
          technologies="Flutter and Firebase"
          description="This project is a finance app developed using Flutter, a UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. The app allows users to track their income and expenses, create budgets, and view reports on their financial situation. The app also uses Firebase, a platform that provides various services such as authentication, database and storage."
        />
        <ProjectCard
          title="The Slotting System: Optimizing Appointments and Opportunities"
          imageSrc={encaixe}
          githubLink="https://github.com/Eduaugust/Encaixe-Front-Mobile"
          technologies="React Native: web/mobile"
          description="The Slotting System provides optimized scheduling, allowing clients to join a waiting list for high-demand time slots. When vacancies arise, the system sends WhatsApp notifications, enhancing convenience and maximizing service utilization. An effective and intuitive solution for managing appointments in hair salons."
        />
      </div>
    </div>
  );
}

export default Projects;
