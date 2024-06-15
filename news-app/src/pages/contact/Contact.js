import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('https://formspree.io/f/xayrrlaz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      console.log('Form successfully submitted!');
      
      event.target.reset();
      alert("Form Submitted");
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1 className="mb-4">Contact Us</h1>
          <p>
            Have a question, comment, or story idea? We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <form >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </form>
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Our Address</h2>
          <p>
            Article.Now<br />
            Shimla, Himachal Pradesh<br />
            India
          </p>
          <iframe
            title="Article.Now Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472690.2479335833!2d74.66018838128359!3d31.789598275658822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1718441212716!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
