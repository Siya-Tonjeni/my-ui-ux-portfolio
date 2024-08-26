import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer'
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons/faArrowRightLong'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons/faQuoteLeft'
import {faQuoteRight} from '@fortawesome/free-solid-svg-icons/faQuoteRight'


const Home = () => {
    return(
        <>
        <div class="home-page-container">
            <div><Navbar/></div>
            <h1 className="hero-header">HI, <br/>IM SIYAMTANDA TONJENI</h1> 
            <p className='hero-p'>A Designer, Developer, Creative, Innovator</p>
            <Link to="/projects"><button className='btn-project'>Projects <FontAwesomeIcon icon={faArrowRightLong} size="lg" fade/></button> </Link> 
            <p className="quote-p"><FontAwesomeIcon icon={faQuoteLeft} size="2xl"/>Turns great ideas into useful and enjoyable digital products <FontAwesomeIcon icon={faQuoteRight} size="2xl"/></p>
        </div>
        <Footer/>
        </>
    )
}

export default Home;