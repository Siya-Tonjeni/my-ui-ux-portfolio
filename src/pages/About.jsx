import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import myImage from '../images/profile picture.jpg'
import '../styles/about.css';

const About = () => {
    return(
        <>
        <div class="home-page-container">
            <div><Navbar/></div>

            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={myImage} class="d-block mx-lg-auto img-fluid" alt="My Profile" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold  lh-1 mb-3">Hi there!</h1>
        <p class="lead">I'm a passionate UI/UX designer and web developer with a knack for crafting intuitive and visually appealing digital experiences. My journey into the world of design began with a love for aesthetics and a desire to create meaningful interactions.<br/> <br/>

As a self-taught designer, I've honed my skills through countless projects and a relentless pursuit of knowledge. I believe that every design should be a reflection of the user's needs and preferences, and I strive to create solutions that are both functional and delightful.<br/> <br/>

When I'm not immersed in the world of pixels and code, you'll often find me in my kitchen, experimenting with new baking recipes.<br/> This hobby has taught me the importance of attention to detail, precision, and a love for crafting something beautiful from scratch. These qualities translate directly into my approach to design, where I strive to create experiences that are as satisfying as a perfectly baked cake. <br/> <br/>

Let's create something amazing together!</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to='/contact'><button type="button" class="btn btn-outline-secondary btn-lg px-4">Contact Me</button></Link>
        </div>
      </div>
    </div>
  </div>
       <Footer/>     
        </div>
        </>
    )
}

export default About;