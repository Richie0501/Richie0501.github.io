// src/components/Header.jsx
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/chengtai.png';

export default function Header() {
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header>
      <Navbar expand="lg" bg="light" variant="light" className="py-3">
        <Container>
          <Navbar.Brand as={NavLink} to="/" end className="d-flex align-items-center">
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/specialization" className={linkClass}>
                公司沿革
              </Nav.Link>
              <Nav.Link as={NavLink} to="/plants" className={linkClass}>
                服務項目
              </Nav.Link>
              <Nav.Link as={NavLink} to="/actualcase" className={linkClass}>
                實際案例
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news" className={linkClass}>
                最新消息
              </Nav.Link>

              <Button
                as={NavLink}
                to="/contact"
                variant="success"
                className="ms-3 btn-get-started"
                style={{ whiteSpace: 'nowrap' }}
                // 讓 contact 按鈕也有 active 樣式判斷
                aria-current={location.pathname === '/contact' ? 'page' : undefined}
              >
                <FontAwesomeIcon className="me-2" icon={faPhone} />
                聯絡我們
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
