import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2 className="mb-4">About Article.Now</h2>
          <p>
            Welcome to Article.Now, your trusted source for the latest news and
            information. We are a team of passionate journalists and
            storytellers dedicated to delivering high-quality, unbiased content
            to our readers.
          </p>
          <p>
            Our mission is to keep you informed and engaged with the world
            around you. We cover a wide range of topics, including politics,
            business, technology, entertainment, and more. Our goal is to
            provide you with the facts and analysis you need to make informed
            decisions and stay up-to-date on the issues that matter most.
          </p>
          <p>
            At Article.Now, we believe in the power of journalism to inform,
            educate, and inspire. We are committed to upholding the highest
            standards of journalistic integrity and ethics, and we strive to be
            a reliable and trustworthy source of news and information for our
            readers.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="https://st.depositphotos.com/2309453/3448/i/450/depositphotos_34484227-stock-photo-motivated-successful-business-team.jpg"
            alt="Article.Now Team"
            fluid
            className="rounded"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Meet the Team</h2>
          <p>
            Our team of talented journalists and editors work tirelessly to
            bring you the latest news and information. Get to know the people
            behind Article.Now:
          </p>
          <ul>
            <li>
              <strong>Mohit Verma</strong>, Founder of Article.now
            </li>
            <li>
              <strong>Emily Johnson</strong>, Senior Reporter
            </li>
            <li>
              <strong>John Doe</strong>, Investigative Journalist
            </li>
            <li>
              <strong>Jane Smith</strong>, Managing Editor
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
