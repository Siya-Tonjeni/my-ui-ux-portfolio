import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/projectDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'
const ProjectDetails = ({ projects }) => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <>
        <div class="project-detail-page-container">
        <Navbar/>
        <Link to='/projects'><p className='back-link'><FontAwesomeIcon icon={faChevronLeft} />back</p></Link>
        <Container style={{marginTop: "40px"}}>
            <h1>{project.title}</h1>
            <p className='proj-skills'><strong>Skills:</strong> {project.skills}</p>
            <div className="proj-descr-container">
                
                <p className="proj-descr">{project.description}</p>
            </div>

            <Row>
                {project.gallery.map((image, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
                    </Col>
                ))}
            </Row>

            <h3 style={{marginTop: "30px"}}>Design Approach</h3>
            <ul>
                {project.designApproach.map((approach, index) => (
                    <li key={index}>{approach}</li>
                ))}
            </ul>

            <h3 style={{marginTop: "40px"}}>Key Features</h3>
            <ul>
                {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <h3 style={{marginTop: "40px"}}>Results</h3>
            <ul>
                {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="btn-project">View Full Project</button>
            </a>
        </Container>
        <Footer/>
        </div>
        </>
    );
}

export default ProjectDetails;

