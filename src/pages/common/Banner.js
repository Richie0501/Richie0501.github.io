// src/components/Carousels.jsx
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
// 以下範例圖請替換成你專案中的實際路徑
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';

export default function Banner() {
  return (
    <Container className="py-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>「Prosperix 的服務改變了我們公司的財務流程！」</h5>
            <p>— 客戶 A 公司   /   CFO John Doe</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>「專業又貼心的顧問團隊，強烈推薦！」</h5>
            <p>— 客戶 B 集團   /   CEO Jane Smith</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>「我們的投資回報率大幅提升，多虧了他們的建議。」</h5>
            <p>— 客戶 C 公司   /   投資經理 Alan Lee</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
