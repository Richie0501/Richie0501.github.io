// 現代風格土地開發首頁組件
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';

const ModernLandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 原有的 features 資料 (保留以免程式錯誤)
  const features = [
    {
      icon: '🏗️',
      title: '土地開發規劃',
      description: '專業的土地使用規劃，從可行性評估到完整開發方案，為您的土地創造最大價值。',
      link: 'learn-more'
    },
    {
      icon: '🌱',
      title: '景觀設計整合',
      description: '結合環保理念與美學設計，打造可持續發展的綠色空間和生態環境。',
      link: 'learn-more'
    },
    {
      icon: '🔒',
      title: '法規諮詢服務',
      description: '熟悉土地法規與建築法令，確保開發過程合法合規，降低投資風險。',
      link: 'learn-more'
    },
    {
      icon: '📊',
      title: '投資效益分析',
      description: '提供專業的市場分析和投資報酬評估，協助您做出明智的投資決策。',
      link: 'learn-more'
    }
  ];

  // FAQ 資料
  const faqs = [
    {
      question: '土地開發的基本流程是什麼？',
      answer: '土地開發流程包括：土地調查與評估、可行性分析、規劃設計、法規申請、工程施工、驗收交付等階段。我們提供全程專業協助。'
    },
    {
      question: '景觀設計如何與土地開發結合？',
      answer: '景觀設計在土地開發中扮演重要角色，不僅美化環境，更能提升土地價值、改善生活品質，並符合環保永續的發展理念。'
    },
    {
      question: '開發土地需要哪些許可證？',
      answer: '依開發規模和用途不同，可能需要土地使用許可、建築許可、環評核准、水土保持許可等。我們協助客戶取得所有必要許可。'
    },
    {
      question: '投資土地開發的風險如何評估？',
      answer: '我們提供完整的風險評估服務，包括市場分析、法規風險、技術風險、財務風險等多面向評估，協助客戶降低投資風險。'
    }
  ];

  return (
    <div className="modern-template">
      {/* 導航列 */}
      <nav className="navbar-modern">
        <Container>
          <Row className="w-100 align-items-center">
            <Col md={3}>
              <div 
                className="navbar-brand d-flex align-items-center btn" 
                style={{cursor:"pointer"}}
                onClick={() => window.location.href = '/modern'}
              >
                <img 
                  src={logoImage} 
                  alt="誠泰印章" 
                  style={{
                    height: '60px',
                    width: '40px',
                    objectFit: 'cover',
                    marginRight: '12px',
                    borderRadius: '8px'
                  }}
                />
                誠泰開發
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center">
                <a href="/modern/company-history" className="nav-link">公司沿革</a>
                <a href="/modern/services" className="nav-link">服務項目</a>
                <a href="/modern/cases" className="nav-link">實際案例</a>
                <a href="/modern/news" className="nav-link">最新消息</a>
              </div>
            </Col>
            <Col md={3} className="text-end">
              <button className="btn-download" onClick={() => window.location.href = '/modern/contact'}>免費諮詢</button>
            </Col>
          </Row>
        </Container>
      </nav>

      {/* 主要英雄區 */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                專業安全<br />
                易於合作的<br />
                土地開發服務
              </h1>
              <p className="hero-subtitle">
                整合規劃、設計與施工<br />
                為您的土地創造最大價值與永續發展
              </p>
              
              <div className="d-flex gap-3 mt-4">
                <div className="d-flex align-items-center gap-2">
                  <span>🍎</span>
                  <span>專業團隊</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span>📱</span>
                  <span>完整服務</span>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="portfolio-value">
                    <div className="label">開發案例</div>
                    <div className="amount">25個</div>
                    <div className="currency">成功項目</div>
                  </div>
                  
                  <div className="balance-info">
                    <div className="current-balance">總開發面積</div>
                    <div className="balance-amount">1,250公頃</div>
                  </div>
                  
                  <div className="crypto-list">
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon tether"></div>
                        <div className="crypto-name">住宅開發</div>
                      </div>
                      <div className="crypto-amount">45%</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon solana"></div>
                        <div className="crypto-name">商業用地</div>
                      </div>
                      <div className="crypto-amount">30%</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon ethereum"></div>
                        <div className="crypto-name">休閒園區</div>
                      </div>
                      <div className="crypto-amount">15%</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon tron"></div>
                        <div className="crypto-name">工業區塊</div>
                      </div>
                      <div className="crypto-amount">10%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* 使命宣言 */}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <button className="btn btn-outline-secondary mb-3">我們的使命</button>
            <h2 className="section-title">
              我們提供安全、直觀<br />
              且高效率的開發平台
            </h2>
            <p className="section-subtitle">
              我們相信去中心化的未來，每個人都能<br />
              完全掌控自己的土地資產投資。
            </p>
          </div>
        </Container>
      </section>

      {/* 右側視覺區塊 */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="hero-visual">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="text-center text-white">
                      <div className="mb-4">
                        <div style={{fontSize: '2rem', fontWeight: 'bold'}}>8.16%</div>
                        <div style={{fontSize: '0.9rem', opacity: 0.7}}>年投資報酬率</div>
                      </div>
                      <div style={{fontSize: '0.85rem', opacity: 0.8}}>
                        穩定成長的土地投資組合<br />
                        為您創造長期被動收入
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-section">
                <span className="badge bg-secondary mb-3">安全性</span>
                <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem'}}>
                  安全且私密
                </h2>
                <p style={{fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.7'}}>
                  業界領先的加密技術<br />
                  與非託管式儲存確保安全
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 服務特色 */}
      <section className="features-section">
        <Container>
          <Row className="justify-content-between align-items-center mb-5">
            <Col md={6}>
              <span className="badge bg-secondary mb-3">特色服務</span>
              <h2 style={{fontSize: '2.5rem', fontWeight: '700'}}>
                我們提供安全、用戶友善<br />
                且高效的土地開發應用
              </h2>
              <p style={{fontSize: '1.1rem', color: '#4a5568', marginTop: '1.5rem'}}>
                我們致力於去中心化的未來，讓每個人都能<br />
                完全掌控自己的土地投資資產。
              </p>
            </Col>
          </Row>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a href={`#${feature.link}`} className="feature-link">了解更多</a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ 區塊 */}
      <section className="faq-section">
        <Container>
          <Row className="justify-content-between align-items-start">
            <Col md={6}>
              <div className="faq-header text-start">
                <span className="badge bg-secondary mb-3">FAQ</span>
                <h2 className="faq-title">
                  常見問題
                </h2>
                <p style={{fontSize: '1.1rem', color: '#4a5568', marginTop: '1.5rem'}}>
                  我們整理了客戶最常詢問的問題<br />
                  提供詳細解答供您參考
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button 
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <div className="faq-icon">
                        {openFaq === index ? '-' : '+'}
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ModernLandingPage;