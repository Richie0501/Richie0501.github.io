// 現代風格實際案例頁面
import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,
  faLandmark,
  faMapLocation,
  faClipboardList,
  faCertificate,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';

const ModernCases = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // 實際案例資料
  const caseStudies = [
    {
      id: 'case1',
      title: '非都市農地變更為工業用地',
      location: '台中市大雅區',
      area: '5.2公頃',
      duration: '8個月',
      challenge: '權屬分散、原為農牧用地，變更風險高。',
      solution: '透過三階段審核機制，先進行可行性評估，再分批整合土地所有權人，最後統一申請變更。',
      outcomes: [
        { label: '變更核准速度', value: '快 30%' },
        { label: '土地價值提升', value: '2 倍以上' },
        { label: '行政異議', value: '0 件' },
      ],
      testimonial: '流程清楚、風險被前置處理，我們提前動工、心安很多。',
      tags: ['農地變更', '工業用地', '合規'],
      client: '某製造業公司',
      icon: faIndustry,
      desc: '協助製造業公司將分散的農牧用地整合變更為工業用地，提前完成動工準備。'
    },
    {
      id: 'case2',
      title: '工廠擴廠用地登記',
      location: '彰化縣員林市',
      area: '2.8公頃',
      duration: '3.5個月',
      challenge: '目標用地用途模糊、先前申請被退件。',
      solution: '重新檢視法規適用性，補強申請文件，並與主管機關進行多次協調溝通。',
      outcomes: [
        { label: '申請周期', value: '縮短至 3.5 個月' },
        { label: '退件風險', value: '降 40%' },
        { label: '登記通過', value: '一次成功' },
      ],
      testimonial: '把複雜拆成有序步驟，擴廠不再靠運氣。',
      tags: ['工廠登記', '流程優化', '跨機關'],
      client: '某食品加工廠',
      icon: faLandmark,
      desc: '協助食品加工廠快速完成擴廠用地登記，避免退件風險，提升營運效率。'
    },
    {
      id: 'case3',
      title: '多塊農地區域整合開發',
      location: '雲林縣斗六市',
      area: '12.5公頃',
      duration: '18個月',
      challenge: '地塊分散、共有與法規條件不同，缺乏整體策略。',
      solution: '建立分期開發策略，先完成條件較佳地塊，再以成功案例帶動其他地主參與。',
      outcomes: [
        { label: '回收時間', value: '快 20%' },
        { label: '共有整合率', value: '95%' },
        { label: '社區反彈', value: '≈0' },
      ],
      testimonial: '從雜亂到有路徑，變更成為可預期的資產重整。',
      tags: ['土地整合', '分期開發', '社區共識'],
      client: '某投資開發集團',
      icon: faMapLocation,
      desc: '統籌整合大面積分散農地，透過分期策略成功實現區域開發目標。'
    },
    {
      id: 'case4',
      title: '露營場合法化申請',
      location: '南投縣埔里鎮',
      area: '3.6公頃',
      duration: '6個月',
      challenge: '原為違規經營，需要全面合法化改善。',
      solution: '重新規劃場域配置，申請合法用地變更，並完成所有必要的安全設施。',
      outcomes: [
        { label: '合規通過率', value: '100%' },
        { label: '營運收入', value: '增加 150%' },
        { label: '政府補助', value: '成功取得' },
      ],
      testimonial: '終於可以安心經營，不用擔心被開罰了。',
      tags: ['露營場', '合法化', '觀光'],
      client: '某休閒農場',
      icon: faClipboardList,
      desc: '協助休閒農場完成露營場合法化，從違規經營轉為合法營運。'
    },
    {
      id: 'case5',
      title: '國有地申購成功案例',
      location: '嘉義縣朴子市',
      area: '1.8公頃',
      duration: '10個月',
      challenge: '國有地申購程序複雜，價格談判困難。',
      solution: '詳細評估土地價值，準備完整申購文件，與國產署進行專業談判。',
      outcomes: [
        { label: '申購成功率', value: '100%' },
        { label: '價格優惠', value: '市價 85折' },
        { label: '程序簡化', value: '效率提升 40%' },
      ],
      testimonial: '原本以為不可能的事情，在專業協助下順利完成。',
      tags: ['國有地', '申購', '價格談判'],
      client: '某建設公司',
      icon: faCertificate,
      desc: '成功協助建設公司以優惠價格申購國有地，節省大量時間和成本。'
    },
    {
      id: 'case6',
      title: '舊建物更正編定',
      location: '台南市新營區',
      area: '0.5公頃',
      duration: '4個月',
      challenge: '建物使用超過30年，缺乏完整證明文件。',
      solution: '透過歷史資料調查，蒐集各種證據文件，成功證明建物合法性。',
      outcomes: [
        { label: '編定更正', value: '成功完成' },
        { label: '資產價值', value: '提升 3倍' },
        { label: '法律風險', value: '完全消除' },
      ],
      testimonial: '多年的心頭大石終於落地，感謝專業團隊。',
      tags: ['更正編定', '舊建物', '合法化'],
      client: '某製造業老闆',
      icon: faFileContract,
      desc: '透過詳細歷史調查，成功為超過30年的舊建物完成編定更正。'
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
                成功案例<br />
                實績證明<br />
                專業實力
              </h1>
              <p className="hero-subtitle">
                從前置可行性、法規審核到登記完成與後續履行<br />
                提供一條龍土地變更與用地登記合規服務
              </p>
            </div>
            
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="portfolio-value">
                    <div className="label">成功案例</div>
                    <div className="amount">100+</div>
                    <div className="currency">專案完成</div>
                  </div>
                  
                  <div className="balance-info">
                    <div className="current-balance">客戶滿意度</div>
                    <div className="balance-amount">98%</div>
                  </div>
                  
                  <div className="crypto-list">
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon tether"></div>
                        <div className="crypto-name">農地變更</div>
                      </div>
                      <div className="crypto-amount">60+</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon solana"></div>
                        <div className="crypto-name">工廠登記</div>
                      </div>
                      <div className="crypto-amount">25+</div>
                    </div>
                    <div className="crypto-item">
                      <div className="crypto-info">
                        <div className="crypto-icon ethereum"></div>
                        <div className="crypto-name">其他服務</div>
                      </div>
                      <div className="crypto-amount">15+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="decoration-circle"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* 案例展示主要內容 */}
      <section className="features-section">
        <Container>
          <div className="section-header">
            <button className="btn btn-outline-secondary mb-3">成功實績</button>
            <h2 className="section-title">
              真實案例分享<br />
              專業實力驗證
            </h2>
            <p className="section-subtitle">
              每個案例都經過嚴格的風險控管與透明流程，<br />
              確保客戶權益並創造最大價值。
            </p>
          </div>
          
          <Row className="g-4" style={{alignItems: 'stretch'}}>
            {caseStudies.map((cs, index) => (
              <Col 
                key={cs.id} 
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
                        <FontAwesomeIcon icon={cs.icon} />
                      </div>
                      
                      {/* 標題與狀態 */}
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h3 className="card-title">
                          {cs.title}
                        </h3>
                        <Badge bg="success" style={{fontSize: '0.7rem', marginTop: '0.25rem'}}>成功</Badge>
                      </div>
                      
                      {/* 描述 */}
                      <p className="card-description">
                        {cs.desc}
                      </p>
                      
                      {/* 基本信息 */}
                      <div className="case-info">
                        <div className="case-detail"><strong>地點：</strong>{cs.location}</div>
                        <div className="case-detail"><strong>面積：</strong>{cs.area}</div>
                        <div className="case-detail"><strong>期程：</strong>{cs.duration}</div>
                        <div className="case-detail"><strong>客戶：</strong>{cs.client}</div>
                      </div>
                      
                      {/* 標籤 */}
                      <div className="service-tags">
                        {cs.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="service-tag">
                            <span>{tag}</span>
                          </span>
                        ))}
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
                            挑戰與問題：
                          </h6>
                          <p className="expand-text">
                            {cs.challenge}
                          </p>
                        </div>
                        
                        <div className="expand-section">
                          <h6 className="expand-title">
                            解決方案：
                          </h6>
                          <p className="expand-text">
                            {cs.solution}
                          </p>
                        </div>
                        
                        <div className="expand-section">
                          <h6 className="expand-title">
                            成果效益：
                          </h6>
                          <ul className="expand-list">
                            {cs.outcomes.map((outcome, i) => (
                              <li key={i} className="d-flex justify-content-between">
                                <span>{outcome.label}</span>
                                <strong style={{color: 'var(--accent-green)'}}>{outcome.value}</strong>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="expand-quote">
                          <div className="quote-label">
                            💬 客戶回饋
                          </div>
                          <blockquote className="quote-content">
                            "{cs.testimonial}"
                          </blockquote>
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
    </div>
  );
};

export default ModernCases;