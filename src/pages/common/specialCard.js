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
    title: '特定工廠登記',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faPencilRuler,
  },
  {
    title: '農牧用地變更建築用地',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faMobileAlt,
  },
  {
    title: '申請變更特定目的事業用地',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faLaptopCode,
  },
  {
    title: '露營場申請',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faCode,
  },
  {
    title: '更正編定',
    desc:  'mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac',
    icon:  faPaintBrush,
  },
  {
    title: '國有地申租及申購',
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
