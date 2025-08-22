// src/components/Carousels.jsx
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import"../../assets/banner.scss"

export default function Banner({ slides = defaultSlides }) {
  return (
    <Container fluid className="px-0">
      <div className="hero-carousel">
        <Carousel
          interval={5000}
          pause="hover"
          touch
          fade
          indicators
          controls
          keyboard
        >
          {slides.map((s, i) => (
            <Carousel.Item key={s.id || i} className="hero-item">
              {/* 圖片：第一張 eager，其餘 lazy */}
              <img
                className="hero-img"
                src={s.src}
                alt={s.alt || `slide-${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
              {/* 遮罩 */}
              <div className="hero-overlay" aria-hidden="true" />
              {/* Caption */}
              <Carousel.Caption className="hero-caption text-start">
                <h2 className="hero-title">{s.title}</h2>
                {s.subtitle && <p className="hero-subtitle">{s.subtitle}</p>}
                {s.meta && <p className="hero-meta">— {s.meta}</p>}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

const defaultSlides = [
  {
    id: 1,
    src: require("../../assets/images/banner1.png"),
    alt: "Prosperix 成功案例 A",
    title: "我們把財務流程從 5 天縮短到 1 天",
    subtitle: "自動化對帳與可視化報表，CFO 決策更即時。",
    meta: "A 公司 / CFO John Doe",
  },
  {
    id: 2,
    src: require("../../assets/images/banner2.png"),
    alt: "顧問服務 B",
    title: "顧問團隊協作導入，營運效率提升 38%",
    subtitle: "陪跑式導入、標準化作業手冊、KPI 週檢視。",
    meta: "B 集團 / CEO Jane Smith",
  },
  {
    id: 3,
    src: require("../../assets/images/banner3.png"),
    alt: "投資回報 C",
    title: "投資回報顯著提升",
    subtitle: "以資料為本的資產配置與風控儀表板。",
    meta: "C 公司 / 投資經理 Alan Lee",
  },
];