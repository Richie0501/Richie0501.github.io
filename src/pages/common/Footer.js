// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// 如果要用 FontAwesome，確保已安裝並設定

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            {/* 第一欄：品牌介紹 */}
            <Col md={4} className="mb-4">
              <h5>Prosperix</h5>
              <p>
                Our expert financial consultants provide solutions to help you achieve financial freedom. 
                Trust us to guide you toward a brighter financial future.
              </p>
            </Col>

            {/* 第二欄：服務連結 */}
            <Col md={2} xs={6} className="mb-4">
              <h5>Our Services</h5>
              <ul className="footer-links">
                <li><a href="#">Insurance Planning</a></li>
                <li><a href="#">Estate Planning</a></li>
                <li><a href="#">Tax Optimization</a></li>
                <li><a href="#">Debt Management</a></li>
              </ul>
            </Col>

            {/* 第三欄：更多連結 */}
            <Col md={2} xs={6} className="mb-4">
              <h5>Explore More</h5>
              <ul className="footer-links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Site map</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </Col>

            {/* 第四欄：聯絡資訊 */}
            <Col md={4} className="mb-4">
              <h5>Contact Details</h5>
              <ul className="footer-links">
                <li><a href="mailto:contact@prosperix.com">contact@prosperix.com</a></li>
                <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="footer-bottom">
        <Container>
          © 2023 Prosperix. All rights reserved.
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </Container>
      </div>
    </>
  );
}
