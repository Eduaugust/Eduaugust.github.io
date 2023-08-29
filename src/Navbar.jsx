import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./CSS Files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";
import { animateScroll as scroll } from "react-scroll";
import Pdf from "./Images/CV - Eduardo Evangelista.pdf";
import myImg from "./Images/perfil.jpg";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "Software Engineer",
        "AI ML",
        "Full Stack Dev",
        "Keep scrolling!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 30,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

 

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <nav id="navbar">
      <div className="container">
        <a  className = "Resume" onClick={onResumeClick}>
          My Resume
        </a>
      </div>

      <a href="https://www.linkedin.com/in/eduardo-evangelista/" target="_blank" className="icons">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Eduaugust" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
         
        <img src={myImg} className="img-fluid" alt="avatar" style={{width: 50, borderRadius: 20}} />

                
        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>Hey, I'm Eduardo</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
        I'm a computer engineering student proficient in Python and TypeScript.  
        I work  with neural networks and mobile develop.
        <br></br>
        Scroll down to 
        learn more about me.
        </p>
        <Link to="Contact"  smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;