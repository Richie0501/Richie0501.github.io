// 現代風格服務項目頁面
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLandmark,
  faIndustry,
  faShieldHalved,
  faClipboardList,
  faFileContract,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons';

const ModernServices = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // 服務項目資料
  const services = [
    {
      title: '特定工廠登記',
      desc: '工廠用地適地性分析、登記申請與前置整合（環保、水電、用途一致性）。',
      icon: faLandmark,
      details: '由適法性、供給條件、公共設施負擔三軸評估；前置協調包含環保許可、水電容量與用途一致性確認，避免退補件。',
      features: ['適法性評估', '供給條件分析', '公共設施負擔', '前置協調整合'],
      price: '依案件複雜度報價'
    },
    {
      title: '農牧用地變更建築用地',
      desc: '非都市農地合法變更為建地，包含土地評估、申請辦理與地政及農業單位等審核。',
      icon: faIndustry,
      details: '我們協助完成現況檢核、利害關係人會勘與送審文件整備，並建立完善紙本卷宗以及電子資料整合已時刻關注案件推動進度及紀錄公文收發時間點。',
      process: [
        '簽訂契約後，至現場拍照及評估所需準備前置作業之資料',
        '環境敏感地區查詢申請及申請書製作',
        '所需資料準備齊全後，送至各縣（市）政府之地政處（局）、農業處（局）以及該區域之地政事務所等相關單位',
        '地政處（局）初審後，將開審查費繳費單，並發公文告知現場會勘日期與時間',
        '案件經地政處（局）審查無誤後，等候承辦人員開繳費單並須由地主至銀行繳交回饋金',
        '收取核准公文後，等候該區域之地政事務所變更完成'
      ],
      features: ['現況檢核', '文件整備', '審核協調', '進度追蹤'],
      price: '依土地面積報價'
    },
    {
      title: '申請特定目的事業用地',
      desc: '法務 + 地政雙重把關，內建可追溯審核紀錄與風險評估。',
      icon: faShieldHalved,
      details: '內含文件版本控管、審核清單、風險分級與修正建議，並可輸出審核報告供決策會議使用。',
      features: ['雙重把關', '版本控管', '風險評估', '審核報告'],
      price: '免費評估，申請另計'
    },
    {
      title: '露營場申請',
      desc: '運用露營場管理要點、水土保持法以及相關建築技術規則等，申請合法使用之露營區',
      icon: faClipboardList,
      details: '協助規劃露營場配置，確保符合相關法規要求，從申請到核准提供全程服務。',
      features: ['場地規劃', '法規諮詢', '申請代辦', '合規確認'],
      price: '依開發規模報價'
    },
    {
      title: '更正編定',
      desc: '依照各縣市政府使用編定公告日期以前之舊有建物，依法提供證明文件將土地及建物合法化',
      icon: faFileContract,
      details: '透過歷史資料調查和法規分析，協助客戶完成土地及建物的合法化程序。',
      process: [
        '先行評估該舊有建物，是否符合各縣市政府使用編定公告日期以前之規定',
        '協助調閱及彙整所需之證明文件',
        '整理完成所需之資料，送至該區域之地政事務所審核',
        '案件經地政事務所審查無誤後，繳交審查費並等候承辦人員辦理會勘',
        '會勘完成後，須提供圖面資料（預為分割出的建築用地面積）',
        '收取核准公文後，等候該區域之地政事務所分割及變更完成'
      ],
      features: ['歷史調查', '證據蒐集', '申請更正', '權益確保'],
      price: '依案件難度報價'
    },
    {
      title: '國有地申租及申購',
      desc: '依國有財產法等相關法規，辦理國有地申租及申購',
      icon: faUsersCog,
      details: '專業評估國有地價值，協助客戶完成申租及申購程序，確保取得合理價格。',
      features: ['價值評估', '申請程序', '談判協商', '契約完成'],
      price: '依土地價值報價'
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
                專業服務<br />
                土地變更與<br />
                工廠登記專家
              </h1>
              <p className="hero-subtitle">
                提供完整的土地開發服務方案<br />
                從前置評估到最終核准，一站式專業服務
              </p>
            </div>
            
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="portfolio-value">
                    <div className="label">服務項目</div>
                    <div className="amount">6大</div>
                    <div className="currency">專業領域</div>
                  </div>
                  
                  <div className="balance-info">
                    <div className="current-balance">成功率</div>
                    <div className="balance-amount">95%+</div>
                  </div>
                  
                  <div className="crypto-list">
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon tether"></div>
                        <div className="crypto-name">工廠登記</div>
                      </div>
                      <div className="crypto-amount">專精</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon solana"></div>
                        <div className="crypto-name">農地變更</div>
                      </div>
                      <div className="crypto-amount">專業</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon ethereum"></div>
                        <div className="crypto-name">用地申請</div>
                      </div>
                      <div className="crypto-amount">合規</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* 服務項目主要內容 */}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <button className="btn btn-outline-secondary mb-3">專業服務</button>
            <h2 className="section-title">
              完整的土地開發<br />
              解決方案
            </h2>
            <p className="section-subtitle">
              我們提供從前置評估到最終核准的一站式服務，<br />
              確保每個開發案都能在合法合規的前提下順利完成。
            </p>
          </div>
          
          <Row className="g-4" style={{alignItems: 'stretch'}}>
            {services.map((service, index) => (
              <Col 
                key={index} 
                md={expandedCard === index ? 12 : 6}
                lg={expandedCard === index ? 12 : 4}
                className="d-flex"
                style={{
                  transition: 'all 0.4s ease',
                  marginBottom: expandedCard === index ? '2rem' : '0'
                }}
              >
                <div 
                  className={`enhanced-service-card ${expandedCard === index ? 'expanded' : ''}`}
                >
                  {/* 裝飾性背景漸層 */}
                  <div className="card-background" />
                  
                  <div className={`card-main-content ${expandedCard === index ? 'expanded-layout' : ''}`}>
                    {/* 基本內容區域 */}
                    <div className="card-basic-content">
                    {/* 圖標區域 */}
                    <div className="feature-icon-enhanced">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    
                    {/* 標題 */}
                    <h3 className="card-title">
                      {service.title}
                    </h3>
                    
                    {/* 描述 */}
                    <p className="card-description">
                      {service.desc}
                    </p>
                    
                    {/* 標籤 */}
                    <div className="service-tags">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="service-tag">
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>
                    
                    {service.details && (
                      <div className="service-details">
                        <h6 className="details-title">
                          服務特色：
                        </h6>
                        <p className="details-content">
                          {service.details}
                        </p>
                      </div>
                    )}
                    
                    {/* 按鈕區域 */}
                    <div className="card-buttons">
                      <button
                        className="btn-details btn-shimmer"
                        onClick={() => toggleCard(index)}
                      >
                        <span className="btn-text">
                          {expandedCard === index ? '收起詳情' : '查看詳情'}
                        </span>
                        <span className={`btn-arrow ${expandedCard === index ? 'rotated' : ''}`}>
                          ↓
                        </span>
                      </button>
                    </div>
                    </div>

                  {/* 展開後的內容 - 在展開時顯示為右側區域 */}
                  {expandedCard === index && (
                    <div className="service-expand-content">
                      <div className="expand-section">
                        <h6 className="expand-title">
                          完整服務內容：
                        </h6>
                        <ul className="expand-list">
                          {service.features.map((feature, i) => (
                            <li key={i}>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {service.process && (
                        <div className="expand-section">
                          <h6 className="expand-title">
                            辦理流程：
                          </h6>
                          <ol className="expand-process">
                            {service.process.map((step, i) => (
                              <li key={i}>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      
                      <div className="expand-price">
                        <div className="price-label">
                          💰 收費方式
                        </div>
                        <div className="price-value">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 服務優勢 */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <span className="badge bg-secondary mb-3">服務優勢</span>
              <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem'}}>
                為什麼選擇我們？
              </h2>
              
              <Row className="g-4 mt-4">
                <Col md={4}>
                  <div style={{padding: '2rem', background: 'var(--card-bg)', borderRadius: '15px', boxShadow: 'var(--shadow)'}}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>⚡</div>
                    <h5 style={{color: 'var(--text-dark)', marginBottom: '1rem'}}>高效快速</h5>
                    <p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>
                      數位化流程管理，大幅縮短申請時間，讓您更快取得核准
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div style={{padding: '2rem', background: 'var(--card-bg)', borderRadius: '15px', boxShadow: 'var(--shadow)'}}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🛡️</div>
                    <h5 style={{color: 'var(--text-dark)', marginBottom: '1rem'}}>風險控管</h5>
                    <p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>
                      三重審核機制，事前風險評估，確保申請過程零爭議
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div style={{padding: '2rem', background: 'var(--card-bg)', borderRadius: '15px', boxShadow: 'var(--shadow)'}}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
                    <h5 style={{color: 'var(--text-dark)', marginBottom: '1rem'}}>專業透明</h5>
                    <p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>
                      全程透明化服務，每個步驟都有詳細記錄和進度追蹤
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ModernServices;