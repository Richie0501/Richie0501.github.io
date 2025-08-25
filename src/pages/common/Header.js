// src/components/Header.jsx
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/chengtai.jpeg';

export default function Header() {
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  const linkStyle = { color: 'white', fontSize: '24px' };

  return (
    <header>
<Navbar expand="lg" className="p-0 border-0 bg-transparent">
  <Container
    style={{
      background: "rgb(185 45 22)", // 紅色
      borderRadius: "0 0 30px 30px",
      marginBottom: "30px",
      padding: "0.75rem 1rem"
    }}
  >
          <Navbar.Brand as={NavLink} to="/" end className="d-flex align-items-center">
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/specialization" className={linkClass} style={linkStyle}>
                公司沿革
              </Nav.Link>
              <Nav.Link as={NavLink} to="/plants" className={linkClass} style={linkStyle}>
                服務項目
              </Nav.Link>
              <Nav.Link as={NavLink} to="/actualcase" className={linkClass} style={linkStyle}>
                實際案例
              </Nav.Link>
              <Nav.Link as={NavLink} to="/news" className={linkClass} style={linkStyle}>
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
