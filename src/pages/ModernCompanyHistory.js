// 誠泰地產一頁式網站
import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';

const ModernCompanyHistory = () => {
  const [selectedService, setSelectedService] = useState(null);
  const handleGoContact = () => {
    setSelectedService(null);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 核心數據
  const stats = [
    { number: '1000+', label: '成功案例' },
    { number: '31年', label: '實務經驗' },
    { number: 'NT$2500萬', label: '資本總額' },
    { number: '5大類', label: '專業服務' }
  ];

  // 專業服務
  const services = [
    {
      title: '特定工廠登記',
      description: '協助農地工廠依規定完成納管、改善與申請程序，逐步取得特定工廠登記核准。',
      features: ['納管申請', '改善計畫送件', '聯合審查會勘', '特定工廠核准'],
      details: {
        content: [
          '提供特定工廠登記申請完整顧問服務，協助案件由違規狀態逐步合法化。',
          '整合環保、消防、水利、水保等審查重點，降低補件與退件風險。'
        ],
        eligibility: [
          '坐落於農業用地之違規工廠',
          '111/3/19 前已申請納管',
          '112/3/19 前已提出改善計畫',
          '改善計畫核准後兩年內完成實質改善'
        ],
        benefits: [
          '降低斷水斷電與拆除風險，逐步合法化',
          '後續可依法申請用地變更',
          '可合法申請外籍勞工與水電需求'
        ],
        process: '納管申請 > 改善計畫撰寫送件 > 實質改善 > 特定工廠申請核准',
        extraSections: [
          {
            title: '應備文件重點',
            items: [
              '環境保護主管機關核准或許可證明',
              '消防主管機關審查查驗核准文件',
              '合法水源相關證明',
              '廢污水排放許可申請資料',
              '山坡地案件之水土保持完工證明',
              '農田水利署架橋或附掛申請文件',
              '建築物結構安全證明書'
            ]
          },
          {
            title: '時程與延伸服務',
            items: [
              '特定工廠登記臨時合法期限可至民國129年',
              '改善計畫有正當理由可申請展延，最長至民國119年3月19日',
              '可協助國有非公用不動產申租與申購評估',
              '可協助標售流程與申請文件整備'
            ]
          }
        ]
      }
    },
    {
      title: '特定工廠用地變更',
      description: '針對已取得特定工廠登記之案件，提供用地計畫、審查對接與變更編定完整服務。',
      features: ['用地計畫撰寫', '建築線申請', '八單位審查協調', '地政變更編定'],
      details: {
        content: [
          '面對特定工廠轉型合法化關鍵期，提供用地計畫、建築線、規劃整合到地目變更的一站式服務。',
          '依《特定工廠申請變更編定為特定目的事業用地審查辦法》對接主管機關審查。'
        ],
        eligibility: [
          '已取得特定工廠登記',
          '申請者為特定工廠事業經營者',
          '未違反《工廠管理輔導法》第28條之9第1項各款，或已限期改善完成',
          '自核准日起於法定期限內提出用地計畫（最晚至 121/3/19）'
        ],
        benefits: [
          '土地價值提升，降低違規風險',
          '土地與建物朝永久合法化前進',
          '利於後續一般工廠登記與長期經營',
          '可免續繳每年特定工廠營運管理金（依規定辦理）'
        ],
        process: '案件調研 > 用地計畫書製作 > 八單位審查協調 > 地政變更編定 > 後續工廠登記銜接',
        extraSections: [
          {
            title: '地主與業主主要效益',
            items: [
              '地主：土地/建物合法性提升，降低罰單、斷水斷電與拆除風險',
              '地主：可持續出租、規劃重建並提高土地利用效率',
              '業主：可朝一般工廠登記轉換，經營穩定性更高',
              '業主：工廠登記效期與營運規劃可更長期'
            ]
          }
        ]
      }
    },
    {
      title: '農牧用地變更建築用地',
      description: '依《非都市土地使用管制規則》協助零星狹小農牧用地評估與申請，提升土地利用價值。',
      features: ['法規資格檢核', '案件可行性評估', '申請文件整備', '全程流程代辦'],
      details: {
        content: [
          '依《非都市土地使用管制規則》第35、35-1條，協助都市計畫外零星狹小農牧用地申請變更。',
          '本公司具多件實務經驗，提供可行性評估、風險盤點與全流程代辦。'
        ],
        eligibility: [
          '土地位於都市計畫外',
          '面積原則不超過 1,320 平方公尺',
          '需毗鄰甲、乙、丙種建築用地之一',
          '土地需符合建地/道路/水溝包圍等規範條件'
        ],
        benefits: [
          '土地變更後可提升建蔽率與容積率運用彈性',
          '地主資產價值提升，後續買賣或融資更具優勢',
          '共有土地可配合分割，讓產權更明確'
        ],
        process: '與我們聯絡 > 案件調研 > 現勘溝通 > 可行性與注意事項回報 > 服務費報價 > 簽約執行'
      }
    },
    {
      title: '露營場合法化申請',
      description: '提供露營場一站式合法化申請服務，整合土地、建築、水保與相關主管機關審查流程。',
      features: ['申請計畫書撰寫', '土地許可申請', '建築/水保文件', '現勘與登記申請'],
      details: {
        content: [
          '因應露營市場成長與法規趨嚴，提供露營場合法化代辦，協助營主持續穩定經營。',
          '整合土地條件、建築圖說、水保與主管機關程序，降低違規與停業風險。'
        ],
        eligibility: [
          '符合可設置露營場之土地類別',
          '申請人不得具有農保資格',
          '農牧/林業用地且全區面積小於 1 公頃，或依法辦理分區變更',
          '至少有一條可供消防救災車輛通行之聯絡道路',
          '容許設施設置項目與面積須符合法規',
          '需符合水土保持、環境保護、公共衛生與公共安全相關規定'
        ],
        benefits: [
          '降低罰款與停業風險',
          '相較住宿業，前期建置成本與投資門檻較可控',
          '可合法申請管理室、衛浴等設施建照',
          '可合法申請水電接入，提升經營品質',
          '提升土地使用彈性與資產價值'
        ],
        process: '申請計畫書撰寫 > 提出申請 > 取得土地許可 > 提送建築書圖/水保計畫 > 取得建築使用執照與水保完工證明 > 提出露營場登記申請 > 現場勘查 > 取得露營登記'
      }
    },
    {
      title: '舊有建物更正編定',
      description: '針對歷史測量或登記不一致案件，進行可行性評估、資料整合與機關溝通，加速程序推進。',
      features: ['歷史資料檢視', '測量圖說整合', '法規適用判讀', '更正編定申請'],
      details: {
        content: [
          '更正編定針對歷史測量、登記錯誤或使用現況不符等情形，協助申請修正編定內容。',
          '可整合土地現況、使用歷史、測量圖說與機關溝通，降低程序風險。'
        ],
        eligibility: [
          '「田」(1-12等則)：62年12月24日前興建完成',
          '「田」(13-26等則)：65年1月1日前興建完成',
          '台灣省農地重劃區：63年5月28日前興建完成',
          '其餘依各縣市非都市土地使用編定公告時間前興建完成'
        ],
        benefits: [
          '釐清土地權利與使用界線',
          '降低權利爭議與程序風險',
          '提升後續開發、融資與交易可行性'
        ],
        process: '與我們聯絡 > 案件調研 > 現勘與資料盤點 > 可行性回報 > 報價簽約 > 更正編定申請與追蹤',
        extraSections: [
          {
            title: '申請效益補充',
            items: [
              '避免因編定錯誤衍生權利爭議，保障地主與使用人權益',
              '用途明確後更有利於後續融資、開發與交易評估'
            ]
          }
        ]
      }
    }
  ];

  // 專業結盟夥伴
  const certifications = [
    '虞承宗建築師事務所',
    '晟太工程顧問有限公司',
    '魏建銘建築師事務所',
    '林宗琦建築師事務所',
  ];

  // 服務流程
  const cases = [
    {
      title: '第一步：案件調研與可行性評估',
      description: '與我們聯絡後，先進行案件基本調研與現場勘查，盤點法規條件與潛在風險。',
      result: '前期盤點',
      value: '資格確認'
    },
    {
      title: '第二步：規劃送件與審查協調',
      description: '依服務類型完成計畫書、圖說與申請文件，並對接主管機關審查及跨單位溝通。',
      result: '送件執行',
      value: '審查協調'
    },
    {
      title: '第三步：回報與後續落地',
      description: '回報案件進度與注意事項，完成核准後持續協助落地與衍伸程序，降低後續風險。',
      result: '成果交付',
      value: '延伸服務'
    }
  ];

  return (
    <div className="legal-services-template">
      {/* 導航列 */}
      <nav className="main-nav">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <div className="brand">
                <img src={logoImage} alt="誠泰開發" className="brand-logo" />
                <div className="brand-text">
                  <h1 className="brand-name">誠泰開發</h1>
                  <p className="brand-tagline">專業合規 • 值得信賴</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="nav-links">
                <a href="#about" className="nav-link">關於我們</a>
                <a href="#services" className="nav-link">專業服務</a>
                <a href="#cases" className="nav-link">辦理流程</a>
                <a href="#contact" className="nav-link">聯絡我們</a>
              </div>
            </Col>
            <Col md={4} className="text-end">
              <button className="nav-cta" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
                免費諮詢
              </button>
            </Col>
          </Row>
        </Container>
      </nav>

      {/* 英雄區 */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title">
                誠泰開發管理有限公司
                <span className="hero-highlight">31年不動產與工廠法規管理顧問經驗</span>
              </h1>

              <p className="hero-description">
                成立於民國83年，專攻不動產投資法規與工廠管理法規顧問服務。
                我們以長年實務經驗與跨領域專業團隊，協助客戶完成特定工廠登記、
                用地變更、農地活化與各類合法化申請。
              </p>

              <button className="hero-cta" onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}>
                立即獲取專業諮詢
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 公司沿革區 */}
      <section id="about" className="about-section">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="about-title">公司沿革</h2>
              <p className="about-text">
                誠泰地產管理有限公司成立於民國83年，長期專注於不動產投資法規與工廠管理法規顧問。
                經營迄今已31載，累積超過1000件實務經驗，並在業界與官方建立穩固合作基礎。
              </p>
              <p className="about-text">
                透過跨專業團隊協作，我們可針對不同案件提供可執行的法規策略與申請路徑，
                協助客戶降低風險、縮短流程、提升土地與建物之合法利用價值。
              </p>

              <div className="certifications">
                <h3 className="cert-title">專業結盟夥伴</h3>
                <div className="cert-list">
                  {certifications.map((cert, index) => (
                    <div key={index} className="cert-item">
                      <div className="cert-check">✓</div>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="about-visual">
                <img src={logoImage} alt="誠泰開發" className="about-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 專業服務區 */}
      <section id="services" className="services-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">專業服務項目</h2>
              <p className="section-description">
                五大服務面向，對應不同土地與工廠合法化情境，提供評估、送件與審查協調的完整顧問服務
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            {services.map((service, index) => (
              <Col lg={index < 3 ? 4 : 6} key={index} className="mb-4">
                <div
                  className="service-card is-clickable"
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedService(service)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setSelectedService(service);
                    }
                  }}
                >
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p className="service-hint">點擊查看詳細內容</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 服務流程 */}
      <section id="cases" className="cases-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title">本公司服務流程</h2>
              <p className="section-description">
                與我們聯絡後，依序完成調研、規劃送件與落地執行，確保流程透明且可控
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            {cases.map((caseItem, index) => (
              <Col lg={4} key={index} className="mb-4">
                <div className="case-card">
                  <h3 className="case-title">{caseItem.title}</h3>
                  <p className="case-description">{caseItem.description}</p>
                  <div className="case-metrics">
                    <div className="case-metric">
                      <div className="metric-label">流程階段</div>
                      <div className="metric-value">{caseItem.result}</div>
                    </div>
                    <div className="case-metric">
                      <div className="metric-label">重點輸出</div>
                      <div className="metric-value">{caseItem.value}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* 聯絡我們區 */}
      <section id="contact" className="contact-section">

        {/* 地圖區域 */}
        <div className="office-location">
          <h3 className="location-title">誠泰地產管理有限公司</h3>
          <p className="location-subtitle">台中辦公室｜歡迎預約實地諮詢</p>

          <div className="location-content">
            <div className="location-info">
              <div className="info-item">
                <div className="info-label">
                  <FontAwesomeIcon icon={faPhone} className="info-icon" />
                  <span>電話諮詢</span>
                </div>
                <div className="info-value">04-2203-8088</div>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                  <span>電子郵件</span>
                </div>
                <div className="info-value">chengtai83121@gmail.com</div>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
                  <span>地址</span>
                </div>
                <div className="info-value">403台灣臺中市西區台灣大道一段728號</div>
              </div>
              <div className="info-tags">
                <span className="info-tag">
                  <FontAwesomeIcon icon={faClock} className="tag-icon" />
                  <span>週一至週五 09:00-18:00</span>
                </span>
                <span className="info-tag">
                  <FontAwesomeIcon icon={faCalendarCheck} className="tag-icon" />
                  <span>建議事先預約</span>
                </span>
              </div>
            </div>

            <div className="location-map">
              <iframe
                title="公司位置地圖"
                src="https://www.google.com/maps?q=24.14786512484884,120.67413707116442&z=16&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* </Container> */}
      </section>

      {/* 頁腳 */}
      <footer className="main-footer">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="footer-brand">
                <img src={logoImage} alt="誠泰開發" className="footer-logo" />
                <div className="footer-text">
                  <h4>誠泰開發管理有限公司</h4>
                  <p>專業合規 • 值得信賴</p>
                </div>
              </div>
              <p className="footer-copyright">
                © 2026 誠泰開發管理有限公司. 版權所有.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <Modal show={Boolean(selectedService)} onHide={() => setSelectedService(null)} centered size="lg" className="service-modal">
        <Modal.Header closeButton className="service-modal-header">
          <div>
            <p className="service-modal-kicker">SERVICE DETAIL</p>
            <Modal.Title>{selectedService?.title}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="service-modal-body">
          <div className="service-modal-hero">
            <p className="service-modal-description">{selectedService?.description}</p>
            <div className="service-modal-tags">
              {selectedService?.features?.map((feature, idx) => (
                <span key={`feature-tag-${idx}`} className="service-modal-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="service-modal-layout">
            {selectedService?.details?.content?.length > 0 && (
              <div className="service-modal-panel service-modal-panel-full">
                <h5>服務內容</h5>
                <ul>
                  {selectedService.details.content.map((item, idx) => (
                    <li key={`content-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="service-modal-panel">
              <h5>申請資格</h5>
              <ul>
                {selectedService?.details?.eligibility?.map((item, idx) => (
                  <li key={`eligibility-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-modal-panel">
              <h5>主要效益</h5>
              <ul>
                {selectedService?.details?.benefits?.map((item, idx) => (
                  <li key={`benefits-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {selectedService?.details?.extraSections?.length > 0 && (
            <div className="service-modal-layout service-modal-layout-extra">
              {selectedService.details.extraSections.map((section, sectionIdx) => (
                <div key={`extra-${sectionIdx}`} className="service-modal-panel">
                  <h5>{section.title}</h5>
                  <ul>
                    {section.items.map((item, itemIdx) => (
                      <li key={`extra-item-${sectionIdx}-${itemIdx}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="service-modal-process">
            <h5>服務流程</h5>
            <div className="service-steps">
              {selectedService?.details?.process?.split('>').map((step, idx) => (
                <div key={`step-${idx}`} className="service-step">
                  <span className="step-index">{idx + 1}</span>
                  <span className="step-text">{step.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className=' w-100' variant="secondary" onClick={() => setSelectedService(null)}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ModernCompanyHistory;
