import { Container, Row, Col, Card } from 'react-bootstrap';
import Specialization from './common/specialCard';


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

export default function SpecializationPage() {
  return (
    <Container className="py-3">
      {/* Hero / 說明 */}
      <header className="mb-3">
        <h2 className="fw-bold">公司沿革</h2>
        <p className="text-muted">
          專注於農地變建地與工廠用地登記的合規整合平台，從前置評估、審核到登記完成，內建多重風險控管與透明流程，確保每一案都可追溯、可驗證。
        </p>
      </header>

      <Specialization />
      {/* 時間軸 */}
      <section aria-label="沿革時間軸" className="mb-5">
        <h3 className="h4 mb-3">關鍵里程碑</h3>
        <Row className="g-4">
          {timeline.map((t) => (
            <Col key={t.year} xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-primary fw-bold mb-1">{t.year}</div>
                  <Card.Title className="h5">{t.title}</Card.Title>
                  <Card.Text className="small">{t.detail}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}
