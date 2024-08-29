import React from 'react';
import '../styles/contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/navbar';
import Footer from '../components/footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <h1>Let's create together!</h1>
      <p>I’m always open and on the look out for new opportunities with<br/> designers, developers, product managers, or let’s just connect and chat! </p>
      <p>Phone: 0744332374</p>
      <p>Email: tonjenisiya@gmail.com</p>
      <div className="social-icons">
      <a class="text-body-secondary" href="https://www.linkedin.com/in/siya-tonjeni/"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a class="text-body-secondary" href="https://github.com/Siya-Tonjeni"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
