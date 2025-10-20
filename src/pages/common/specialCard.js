// src/components/Specialization.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,        // 工廠登記
  faExchangeAlt,     // 用地變更
  faFileContract,    // 申請用地
  faCampground,      // 露營場
  faEdit,            // 更正編定
  faFileSignature    // 國有地申租申購
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: '特定工廠登記',
    desc:  '依工廠管理輔導法第28條以及相關之建築規則辦理特定工廠登記',
    icon:  faIndustry,
  },
  {
    title: '農牧用地變更建築用地',
    desc:  '依照非都市土地使用管制規則第35條及第35-1條辦理農牧用地變更為建築用地',
    icon:  faExchangeAlt,
  },
  {
    title: '申請特定目的事業用地',
    desc:  '免費評估土地是否可依非都市土地使用管制規則及非都市土地變更執行要點等，辦理變更特定目的事業用地',
    icon:  faFileContract,
  },
  {
    title: '露營場申請',
    desc:  '運用露營場管理要點、水土保持法以及相關建築技術規則等，申請合法使用之露營區',
    icon:  faCampground,
  },
  {
    title: '更正編定',
    desc:  '依照各縣市政府使用編定公告日期以前之舊有建物，依法提供證明文件將土地及建物合法化',
    icon:  faEdit,
  },
  {
    title: '國有地申租及申購',
    desc:  '依國有財產法等相關法規，辦理國有地申租及申購',
    icon:  faFileSignature,
  },
];

export default function Specialization() {
  return (
    <section className="specialization-section">
      <Container>
        <Row className="g-4">
          {services.map((svc, i) => (
            <Col key={i} md={6} lg={4}>
              <div className="service-card">
                <div className="icon-box">
                  <FontAwesomeIcon icon={svc.icon} size="2x" />
                </div>
                <h5 className="service-title">{svc.title}</h5>
                <p className="service-desc">{svc.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
