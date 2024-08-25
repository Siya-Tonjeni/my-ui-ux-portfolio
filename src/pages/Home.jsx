import React from 'react';
import Navbar from '../components/navbar';
import '../styles/home.css'

const Home = () => {
    return(
        <>
        <div class="home-page-container">
            <div><Navbar/></div>
            <h1>Home page</h1>   
        </div>
        </>
    )
}

export default Home;