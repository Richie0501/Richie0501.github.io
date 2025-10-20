// src/pages/NotFound.js
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="text-center my-5">
      <h1>404 找不到頁面</h1>
      <p>抱歉，你要的頁面不存在。</p>
      <Button as={Link} to="/" variant="primary">
        回到首頁
      </Button>
    </Container>
  );
}
