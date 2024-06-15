import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4 footer">
      <Container>
      <Row className="mt-2">
          <Col>
            <Link className='link' to="/"><h1><span> <span>ARTICLE</span>.now</span></h1></Link>
          </Col>
          <Col>
          <Link className='link policy' to="https://docs.google.com/document/d/1BD_jjJLMHQoVPUQlxRKW3hheUOCWnTfLDkUfXORBdZ0/edit?usp=sharing">Privacy Policy</Link>
          </Col>
          <Col>
          <Link className='link policy' to="https://docs.google.com/document/d/1BD_jjJLMHQoVPUQlxRKW3hheUOCWnTfLDkUfXORBdZ0/edit?usp=sharing">Disclaimer (Terms of condition)</Link>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us on : </h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://www.instagram.com/mohit_verma_25/">Instagram</a></li>
              <li><a href="http://linkedin.com/in/mohit-verma-b73b67227">LinkedIn</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              article.now news, Himachal Pradesh , India<br />
              Email: info@articlenow.com<br />
              Phone: +123 456 7890
            </address>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p className="text-center">&copy; {new Date().getFullYear()} article.now - All rights reserved.</p>
            <p className="text-center" style={{color:'crimson'}}>article.now - Mohit Verma</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
