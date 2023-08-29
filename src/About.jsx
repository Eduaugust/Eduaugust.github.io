import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/about.css';

function About() {
  const languages = [
    'TypeScript',
    'React',
    'NodeJS',
    'Python',
    'C',
    'C++',
    'Java',
    'Flutter',
    'SQL',
    'Github/Git',
  ];

  const learning = [
    'Android / IOS Development',
    'Machine Learning',
    'Image Proccessing',
  ];

  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        About<span style={{ color: '#FF004F' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
          Hello there! I'm an enthusiastic computer engineering student with a 
          diverse skill set, primarily focused on software development and neural 
          networks. I have a strong grasp of both front-end and back-end programming 
          and continuously refine my skills while seeking opportunities to expand 
          in these areas.
          </p>
          <br />
          <p>
          At the moment, I'm actively seeking opportunities in software development 
          that encompass a mixture of front-end and back-end work and address 
          real-world problems. I'm currently engaged in multiple projects in 
          different areas, such as a full-stack system with web, mobile, and back-end 
          components, as well as a project involving image processing using neural 
          networks to infer problems on metallic surfaces.
          </p>
          <br />
          <p>Feel free to get in touch!</p>
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
               Learning
            </h1>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;