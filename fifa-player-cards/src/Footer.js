// src/Footer.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'; // Import the CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center mt-4">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 FIFA Player Cards. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
