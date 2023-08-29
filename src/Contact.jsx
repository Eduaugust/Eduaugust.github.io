import './CSS Files/Contact.css';
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <section className='contact-wrap' id='Contact'>
      <div className='content'>
      <Row>
          <Col md={12} >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to connect with me
            </p>
            <Row style={{padding: 25}}>
            <a href={'https://github.com/Eduaugust'} style={{margin: 10}} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color='white' />
            </a>
            <a href={'https://www.linkedin.com/in/eduardo-evangelista/'} style={{margin: 10}} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" color='white' />
            </a>
            </Row>
            
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Contact;