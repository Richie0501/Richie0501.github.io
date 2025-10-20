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
    title: '特定工廠登記',
    desc: '工廠用地適地性分析、登記申請與前置整合（環保、水電、用途一致性）。',
    icon: faLandmark,
    details: `由適法性、供給條件、公共設施負擔三軸評估；前置協調包含環保許可、水電容量與用途一致性確認，避免退補件。`,
    detail_content: [
      ""
    ]
  },
  {
    title: '農牧用地變更建築用地',
    desc: '非都市農地合法變更為建地，包含土地評估、申請辦理與地政及農業單位等審核。',
    icon: faIndustry,
    details: `我們協助完成現況檢核、利害關係人會勘與送審文件整備，並建立完善紙本卷宗以及電子資料整合已時刻關注案件推動進度及紀錄公文收發時間點。`,
    detail_content: [
      "簽訂契約後，至現場拍照及評估所需準備前置作業之資料",
      "環境敏感地區查詢申請及申請書製作",
      "所需資料準備齊全後，送至各縣（市）政府之地政處（局）、農業處（局）以及該區域之地政事務所等相關單位",
      "地政處（局）初審後，將開審查費繳費單，並發公文告知現場會勘日期與時間",
      "案件經地政處（局）審查無誤後，等候承辦人員開繳費單並須由地主至銀行繳交回饋金",
      "收取核准公文後，等候該區域之地政事務所變更完成"
    ]
  },
  {
    title: '申請特定目的事業用地',
    desc: '法務 + 地政雙重把關，內建可追溯審核紀錄與風險評估。',
    icon: faShieldHalved,
    details: `內含文件版本控管、審核清單、風險分級與修正建議，並可輸出審核報告供決策會議使用。`,
    detail_content: [
      ""
    ]
  },
  {
    title: '露營場申請',
    desc: '',
    icon: faClipboardList,
    details: ``,
    detail_content: [
      ""
    ]
  },
  {
    title: '更正編定',
    desc: '',
    icon: faFileContract,
    details: ``,
        detail_content: [
      "先行評估該舊有建物，是否符合各縣市政府使用編定公告日期以前之規定",
      "協助調閱及彙整所需之證明文件",
      "整理完成所需之資料，送至該區域之地政事務所審核",
      "案件經地政事務所審查無誤後，繳交審查費並等候承辦人員辦理會勘",
      "會勘完成後，須提供圖面資料（預為分割出的建築用地面積）",
      "收取核准公文後，等候該區域之地政事務所分割及變更完成"
    ]
  },
  {
    title: '國有地申租及申購',
    desc: '',
    icon: faUsersCog,
    details: ``,
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
          我們是土地變更與登記的合規夥伴，協助客戶將潛力土地合法轉型：從前置審查、變更申請、登記作業到後續履行，建構一套嚴謹可追的服務體系，讓每個開發決策都有依據、每個成果都有保証。
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
                              {s.detail_content && s.detail_content.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
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
