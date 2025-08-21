// src/pages/PlantPage.js
import PlantCarousel from './common/plantCard';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
  },
  {
    title: '工廠用地登記',
    desc: '工廠用地適地性分析、登記申請與前置整合（環保、水電、用途確認）。',
    icon: faIndustry,
  },
  {
    title: '合規審核',
    desc: '法務 + 地政雙重把關，內建可追溯審核紀錄與風險評估。',
    icon: faShieldHalved,
  },
  {
    title: '變更代辦',
    desc: '文件整合與多機關協調，一條龍送件與追蹤，降低行政摩擦。',
    icon: faClipboardList,
  },
  {
    title: '後續登記與權屬更新',
    desc: '變更完成後的土地登記、權屬更新與用途監控，確保履行與可持續性。',
    icon: faFileContract,
  },
  {
    title: '策略顧問',
    desc: '土地資產布局與開發路徑設計，前置風險降級與長期價值最大化。',
    icon: faUsersCog,
  },
];

export default function PlantPage() {
  return (
    <Container>
      <header className="mb-3">
        <h2 className="fw-bold">服務項目</h2>
        <p className="text-muted">
        我們是土地變更與登記的合規夥伴，協助客戶將潛力土地合法轉型：從前置審查、變更申請、登記作業到後續履行，建構一套嚴謹可追的服務體系，讓每個開發決策都有依據、每個成果都有保証。
        </p>
      </header>
      <PlantCarousel />
      {/* 核心服務 */}
      <section aria-label="核心服務" className="my-5">
        <h2 className="h4 mb-3">我們的核心服務</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((s) => (
            <Col key={s.title}>
              <Card className="h-100 border rounded-3">
                <Card.Body>
                  <div className="d-flex align-items-start mb-2">
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
                    <div>
                      <Card.Title className="mb-1">{s.title}</Card.Title>
                    </div>
                  </div>
                  <Card.Text className="small">{s.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}
