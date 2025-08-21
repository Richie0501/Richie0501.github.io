// src/components/Specialization.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilRuler,   // Product Design
  faMobileAlt,     // App Design
  faLaptopCode,    // Web Design
  faCode,          // Development
  faPaintBrush,    // Illustration
  faFilm           // Motion
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Product Design',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faPencilRuler,
  },
  {
    title: 'App Design',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faMobileAlt,
  },
  {
    title: 'Web Design',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faLaptopCode,
  },
  {
    title: 'Development',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faCode,
  },
  {
    title: 'Illustration',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faPaintBrush,
  },
  {
    title: 'Motion',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faFilm,
  },
];

export default function Specialization() {
  return (
    <section className="specialization-section">
      <Container>
        <Row className="g-4">
          {services.map((svc, i) => (
            <Col key={i} md={6} lg={4}>
              <div className="service-card">
                <div className="icon-box">
                  <FontAwesomeIcon icon={svc.icon} size="2x" />
                </div>
                <h5 className="service-title">{svc.title}</h5>
                <p className="service-desc">{svc.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
