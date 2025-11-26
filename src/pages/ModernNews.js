// 現代風格最新消息頁面
import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faGavel,
  faClipboardCheck,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

const ModernNews = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  
  // 最新消息資料
  const news = [
    {
      id: 'n1',
      title: '農地變更申請流程簡化公告',
      summary: '某縣市政府公布新版農地變建程序，前置審查可提前線上提交，預估審核時間縮短 20%。',
      icon: faGavel,
      content: '為了提升行政效率，縣市政府宣布啟用新的線上申請系統，申請人可以提前準備相關文件並進行線上提交。新流程包含自動檢核機制，可以在提交前就發現文件缺漏，大幅減少補件次數。',
      benefits: ['線上申請', '時間縮短', '減少補件'],
      details: '新系統具有智能檢核功能，可以即時顯示文件缺失情況，大幅提升申請效率。',
      category: '政策',
      date: '2025-07-30',
      important: true
    },
    {
      id: 'n2',
      title: '成功案例：三階段整合開發完成',
      summary: '整合 5 塊散落農地，透過分期變更策略完成開發前置，社區反彈率降至 0%。',
      icon: faClipboardCheck,
      content: '本案採用創新的分期開發策略，先從條件最佳的地塊開始，建立成功模式後再逐步擴展。透過充分的社區溝通和利益共享機制，成功取得所有地主和社區的支持。',
      benefits: ['分期開發', '社區支持', '無反彈'],
      details: '此案的成功關鍵在於充分的前期溝通和精心設計的分期策略，讓社區能逐步適應開發變化。',
      category: '案例',
      date: '2025-08-01',
      important: false
    },
    {
      id: 'n3',
      title: '工廠用地登記一次通過心得分享',
      summary: '某加工廠透過我們的文件整備與跨機關協調，登記週期從 6 個月縮短到 3.5 個月。',
      icon: faClipboardCheck,
      content: '透過完整的前置作業和跨機關協調，成功將原本需要6個月的申請流程縮短至3.5個月。關鍵在於前期的充分準備和與各相關單位的密切溝通。',
      benefits: ['時間縮短', '一次通過', '精haven 協調'],
      details: '成功的關鍵包括：完整的環評報告、清楚的土地使用計畫、與不同單位的協調溝通。',
      category: '案例',
      date: '2025-07-28',
      important: false
    },
    {
      id: 'n4',
      title: '地政局新增土地權屬線上查核功能',
      summary: '新版系統接入，提高前置權屬清查效率，建議開發案提前整合資料輸出。',
      icon: faBullhorn,
      content: '地政局推出新的線上查核系統，可以即時查詢土地權屬資料，大幅提升前置作業效率。建議所有開發案都應善用此功能，提前進行完整的權屬清查。',
      benefits: ['即時查詢', '效率提升', '清查完整'],
      details: '系統功能包括：權狀查詢、地籍圖資訊、抵押資料查閱等，大幅減少前置作業時間。',
      category: '合規',
      date: '2025-08-02',
      important: true
    },
    {
      id: 'n5',
      title: '變更核准率報告 Q2/2025',
      summary: '本季度非都市農地變更核准率達 87%，申請文件補件率下降。',
      icon: faNewspaper,
      content: '根據最新統計，本季度的變更核准率較上季提升5%，主要歸功於申請文件品質的提升和前置作業的完善。補件率也下降至15%，創歷史新低。',
      benefits: ['核准率高', '補件減少', '效率提升'],
      details: '核准率提升主要因為申請文件品質改善、前期規劃更加完善，以及申請人的法規意識提升。',
      category: '數據',
      date: '2025-07-25',
      important: false
    },
    {
      id: 'n6',
      title: '環保署修訂工廠設立環評標準',
      summary: '新修訂的環評標準將於明年1月實施，對特定工廠登記流程產生重要影響。',
      icon: faGavel,
      content: '環保署公告修訂工廠設立環評標準，新標準更加注重環境永續和社區影響評估。建議所有計畫申請的業者提前了解新規定，調整申請策略。',
      benefits: ['環境永續', '社區影響', '新標準'],
      details: '新標準將更加嚴格審查環境影響，包括水質、空氣、噪音等面向，建議提前做好充分準備。',
      category: '政策',
      date: '2025-07-20',
      important: true
    }
  ];

  const categoryMeta = {
    政策: { label: '政策', icon: faGavel, color: 'primary' },
    案例: { label: '案例', icon: faClipboardCheck, color: 'success' },
    合規: { label: '合規', icon: faBullhorn, color: 'warning' },
    數據: { label: '數據', icon: faNewspaper, color: 'info' },
  };

  const categories = ['全部', '政策', '案例', '合規', '數據'];
  
  const filteredNews = selectedCategory === '全部' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

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
                最新消息<br />
                即時合規<br />
                動態掌握
              </h1>
              <p className="hero-subtitle">
                掌握最新法規動態、成功案例分享<br />
                讓您的開發進度一目了然
              </p>
            </div>
            
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="portfolio-value">
                    <div className="label">本月更新</div>
                    <div className="amount">15</div>
                    <div className="currency">則消息</div>
                  </div>
                  
                  <div className="balance-info">
                    <div className="current-balance">重要公告</div>
                    <div className="balance-amount">3則</div>
                  </div>
                  
                  <div className="crypto-list">
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon tether"></div>
                        <div className="crypto-name">政策更新</div>
                      </div>
                      <div className="crypto-amount">6則</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon solana"></div>
                        <div className="crypto-name">成功案例</div>
                      </div>
                      <div className="crypto-amount">5則</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon ethereum"></div>
                        <div className="crypto-name">合規資訊</div>
                      </div>
                      <div className="crypto-amount">4則</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* 分類篩選 */}
      <section className="hero-section" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Container>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '25px',
                  border: 'none',
                  background: selectedCategory === category ? 'var(--accent-green)' : 'var(--card-bg)',
                  color: selectedCategory === category ? 'var(--white)' : 'var(--text-dark)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedCategory === category ? 'var(--shadow)' : 'var(--shadow-light)'
                }}
                onMouseOver={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'var(--accent-light)';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.background = 'var(--card-bg)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 消息列表主要內容 */}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <button className="btn btn-outline-secondary mb-3">即時資訊</button>
            <h2 className="section-title">
              掌握第一手<br />
              法規與市場動態
            </h2>
            <p className="section-subtitle">
              我們持續關注法規變化、分享成功案例，<br />
              讓您的投資決策更有依據。
            </p>
          </div>
          
          <Row className="g-4" style={{alignItems: 'stretch'}}>
            {filteredNews.map((item, index) => (
              <Col 
                key={item.id} 
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
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      
                      {/* 標題與標籤 */}
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h3 className="card-title">
                          {item.title}
                        </h3>
                        <div className="d-flex gap-1">
                          <Badge bg={categoryMeta[item.category]?.color} style={{fontSize: '0.7rem'}}>
                            {categoryMeta[item.category]?.label}
                          </Badge>
                          {item.important && (
                            <Badge bg="danger" style={{fontSize: '0.7rem'}}>重要</Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* 描述 */}
                      <p className="card-description">
                        {item.summary}
                      </p>
                      
                      {/* 標籤 */}
                      <div className="service-tags">
                        {item.benefits.slice(0, 3).map((benefit, i) => (
                          <span key={i} className="service-tag">
                            <span>{benefit}</span>
                          </span>
                        ))}
                      </div>
                      
                      {/* 日期 */}
                      <div className="news-date">
                        {new Date(item.date).toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      
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

                    {/* 展開後的內容 */}
                    {expandedCard === index && (
                      <div className="service-expand-content">
                        <div className="expand-section">
                          <h6 className="expand-title">
                            完整內容：
                          </h6>
                          <p className="expand-text">
                            {item.content}
                          </p>
                        </div>
                        
                        <div className="expand-section">
                          <h6 className="expand-title">
                            相關特色：
                          </h6>
                          <ul className="expand-list">
                            {item.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {item.details && (
                          <div className="expand-section">
                            <h6 className="expand-title">
                              詳細分析：
                            </h6>
                            <p className="expand-text">
                              {item.details}
                            </p>
                          </div>
                        )}
                        
                        <div className="expand-quote">
                          <div className="quote-label">
                            📅 發布時間
                          </div>
                          <div className="quote-content" style={{fontStyle: 'normal'}}>
                            {new Date(item.date).toLocaleDateString('zh-TW', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              weekday: 'long'
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-5">
              <p style={{color: 'var(--text-light)', fontSize: '1.1rem'}}>
                目前沒有 "{selectedCategory}" 分類的消息
              </p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default ModernNews;