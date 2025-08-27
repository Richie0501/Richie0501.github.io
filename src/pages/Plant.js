// src/pages/PlantPage.js
import { useState, useRef } from 'react';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';
import {
  faLandmark,
  faIndustry,
  faShieldHalved,
  faClipboardList,
  faFileContract,
  faUsersCog
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
  {
    title: '農地變建地',
    desc: '非都市農地合法變更與使用分區規劃，包含權屬、環評、地政審核與申請代辦。',
    icon: faLandmark,
    details: `我們協助完成現況盤點、分區檢核、利害關係人會勘與送審文件整備，並建立可追溯節點（里程碑、往來公文、回覆時限）以降低不確定性。`,
  },
  {
    title: '工廠用地登記',
    desc: '工廠用地適地性分析、登記申請與前置整合（環保、水電、用途一致性）。',
    icon: faIndustry,
    details: `由適法性、供給條件、公共設施負擔三軸評估；前置協調包含環保許可、水電容量與用途一致性確認，避免退補件。`,
  },
  {
    title: '合規審核',
    desc: '法務 + 地政雙重把關，內建可追溯審核紀錄與風險評估。',
    icon: faShieldHalved,
    details: `內含文件版本控管、審核清單、風險分級與修正建議，並可輸出審核報告供決策會議使用。`,
  },
  {
    title: '變更代辦',
    desc: '文件整合與多機關協調，一條龍送件與追蹤，降低行政摩擦。',
    icon: faClipboardList,
    details: `以節點甘特圖控管送件—補件—審查—核定，提供每週進度摘要與風險提醒。`,
  },
  {
    title: '後續登記與權屬更新',
    desc: '變更完成後的土地登記、權屬更新與用途監控，確保履行與可持續性。',
    icon: faFileContract,
    details: `完成變更後協助完成地籍異動、用途監測與年檢提醒，確保權利完整與法遵連續。`,
  },
  {
    title: '策略顧問',
    desc: '土地資產布局與開發路徑設計，前置風險降級與長期價值最大化。',
    icon: faUsersCog,
    details: `以「區位×用途×期程」配置策略，建立投前/投後儀表板與退出條件，確保資本效率。`,
  },
];

export default function PlantPage() {
  // 單一展開：索引或 null
  const [openIndex, setOpenIndex] = useState(null);
  const cardRefs = useRef({});

  const toggle = (idx) => {
    const next = openIndex === idx ? null : idx;
    setOpenIndex(next);

    // 下一幀滾動到該卡片頂端（留一點上邊距）
    requestAnimationFrame(() => {
      const el = cardRefs.current[idx];
      if (el) {
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  };

  const onKeyToggle = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(idx);
    }
  };

  return (
    <Container>
      <header className="mb-3">
        <h2 className="fw-bold">服務項目</h2>
        <p className="text-muted">
          我們是專業辦理用地變更及農地工廠合法化的代辦公司，協助客戶將手上具有潛力之土地透過合法的方式轉型，創造土地的最佳效益，並從前置審查、變更申請、登記作業到後續履行，建構一套專業且有效率的服務體系，讓每塊土地都能發揮它最大的價值、使每個客戶能夠靈活運用手上的不動產，實現所謂的有土斯有財。
        </p>
      </header>

      <section aria-label="核心服務" className="my-5">
        <h2 className="h4 mb-3">我們的核心服務</h2>

        {/* 注意：當某張展開時，它的 Col 會變成 xs=12（佔滿一整列 / 三格） */}
        <Row className="g-4">
          {services.map((s, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Col
                key={s.title}
                // 未展開：維持 1/2/3 欄；展開：全寬（等於桌機三格）
                xs={12}
                md={isOpen ? 12 : 6}
                lg={isOpen ? 12 : 4}
              >
                <Card
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className="h-100 border rounded-3"
                  style={{ transition: 'transform .15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* 卡片標頭（點擊區） */}
                  <Card.Body
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`service-collapse-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => onKeyToggle(e, idx)}
                  >
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#f1f5f9',
                            borderRadius: 8,
                          }}
                        >
                          <FontAwesomeIcon icon={s.icon} size="lg" />
                        </div>
                      </div>

                      <div className="flex-grow-1">
                        <Card.Title className="mb-1 d-flex align-items-center justify-content-between">
                          <span>{s.title}</span>
                          <span
                            className={`ms-2 small ${isOpen ? 'text-primary' : 'text-secondary'}`}
                            aria-hidden="true"
                          >
                            {isOpen ? '收合' : '展開'} ▾
                          </span>
                        </Card.Title>
                        <Card.Text className="small text-secondary mb-0">{s.desc}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>

                  {/* 下拉內容（展開時顯示） */}
                  <Collapse in={isOpen}>
                    <div id={`service-collapse-${idx}`} className="border-top">
                      <div className="p-3">
                        <h3 className="h6 text-uppercase text-muted mb-2">服務說明</h3>
                        <p className="mb-3">{s.details || s.desc}</p>

                        {/* 你也可以用 Grid 把展開內容分兩欄排版 */}
                        <Row className="g-3">
                          <Col md={6}>
                            <ul className="small text-secondary mb-3">
                              <li>前置盤點與法規檢核</li>
                              <li>跨機關協調與送審追蹤</li>
                              <li>可追溯里程碑與風險提醒</li>
                            </ul>
                          </Col>
                          <Col md={6}>
                            <div className="d-flex gap-2">
                              <a className="btn btn-primary btn-sm" href="#contact">立即諮詢</a>
                              <a className="btn btn-outline-secondary btn-sm" href="#docs">下載簡章</a>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
}
