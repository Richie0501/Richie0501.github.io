// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// 如果要用 FontAwesome，確保已安裝並設定

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          <Row>
            <Col md={4}>
              <h5>公司資訊</h5>
              <p>這裡放簡介文字...</p>
            </Col>
            <Col md={4}>
              <h5>快速連結</h5>
              <ul className="footer-links">
                <li><a href="/about">關於我們</a></li>
                <li><a href="/contact">聯絡我們</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>追蹤我們</h5>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
