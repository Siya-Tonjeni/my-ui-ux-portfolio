import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const footer = () => {
    return(
        <>
            <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      {/* <span class="mb-3 mb-md-0 text-body-secondary">tonjenisiya@gmail.com</span> */}
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-body-secondary" href="https://www.linkedin.com/in/siya-tonjeni/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://github.com/Siya-Tonjeni"><FontAwesomeIcon icon={faGithub} /></a></li>
      {/* <li class="ms-3"><a class="text-body-secondary" href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li> */}
    </ul>
  </footer>
</div>
        </>
    )
};

export default footer;