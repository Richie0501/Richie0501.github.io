// 現代風格公司沿革頁面
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';

const ModernCompanyHistory = () => {
  // 公司沿革時間軸資料
  const timeline = [
    {
      year: '2016',
      title: '公司成立',
      detail: '聚焦非都市農地變更與法規流程研究，建立初步 SOP。',
    },
    {
      year: '2018',
      title: '合規三階段審核建制',
      detail: '推出法務+地政+現地實勘的三重審核機制與電子紀錄系統。',
    },
    {
      year: '2021',
      title: '流程數位化升級',
      detail: '引入文件追蹤與簽核平台，提高透明度與可追溯性。',
    },
    {
      year: '2022',
      title: '擴展工廠用地登記',
      detail: '加入工廠設廠前置服務，整合環保與用途適配審查。',
    },
    {
      year: '2023',
      title: '發布合規白皮書',
      detail: '透過第三方稽核公開變更流程與控管標準，建立信任基礎。',
    },
    {
      year: '2025',
      title: '定位提升為整合平台',
      detail: '成為中南部非都土地變更與工廠登記的合規整合服務平台。',
    },
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
                公司沿革<br />
                專業安全的<br />
                土地開發服務
              </h1>
              <p className="hero-subtitle">
                專注於農地變建地與工廠用地登記的合規整合平台<br />
                從前置評估、審核到登記完成，內建多重風險控管與透明流程
              </p>
            </div>
            
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="portfolio-value">
                    <div className="label">成立年份</div>
                    <div className="amount">2016</div>
                    <div className="currency">專業服務</div>
                  </div>
                  
                  <div className="balance-info">
                    <div className="current-balance">服務年資</div>
                    <div className="balance-amount">9年+</div>
                  </div>
                  
                  <div className="crypto-list">
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon tether"></div>
                        <div className="crypto-name">法規研究</div>
                      </div>
                      <div className="crypto-amount">專精</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon solana"></div>
                        <div className="crypto-name">數位化流程</div>
                      </div>
                      <div className="crypto-amount">創新</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon ethereum"></div>
                        <div className="crypto-name">合規平台</div>
                      </div>
                      <div className="crypto-amount">整合</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* 公司沿革主要內容 */}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <button className="btn btn-outline-secondary mb-3">我們的歷程</button>
            <h2 className="section-title">
              關鍵里程碑<br />
              持續創新與成長
            </h2>
            <p className="section-subtitle">
              從2016年成立至今，我們專注於農地變更與工廠登記的專業服務，<br />
              建立了完整的合規流程與數位化平台。
            </p>
          </div>
          
          <div className="features-grid">
            {timeline.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--white)'}}>{item.year}</div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.detail}</p>
                <div style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--accent-light)',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  color: 'var(--accent-green)',
                  fontWeight: '600'
                }}>
                  第 {index + 1} 階段
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ModernCompanyHistory;