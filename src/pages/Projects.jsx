import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/projects.css'

const Projects = ({ projects }) => {
    const navigate = useNavigate();

    const handleImageClick = (id) => {
        navigate(`/projects/${id}`);
    };

    return (
        <>
        
        <div class="project-page-container"> 
            <div><Navbar/></div>
            <h1 style={{marginTop: "60px"}}>Study Cases</h1>
            <p className="header-p">These are all my personal projects, from <br/> redesigning, creating websites and app designs</p>
            <Container>
            <Row>
                {projects.map((project) => (
                    <Col key={project.id} md={4} className="mb-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="img-fluid"
                            onClick={() => handleImageClick(project.id)}
                            style={{ cursor: 'pointer', width: "274px", height: "280px"}}
                        />
                        <p className="project-title">{project.title}</p>
                    </Col>
                ))}
            </Row>
        </Container>

            <Footer/>
        </div>
        </>
    );
}

export default Projects;
