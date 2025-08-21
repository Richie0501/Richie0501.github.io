// src/pages/ActualCase.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CaseStudyCard from './common/caseStudyCard';

const caseStudies = [
  {
    id: 'case1',
    title: '非都市農地變更為工業用地',
    challenge: '權屬分散、原為農牧用地，變更風險高。',
    outcomes: [
      { label: '變更核准速度', value: '快 30%' },
      { label: '土地價值提升', value: '2 倍以上' },
      { label: '行政異議', value: '0 件' },
    ],
    testimonial: '流程清楚、風險被前置處理，我們提前動工、心安很多。',
    tags: ['農地變更', '工業用地', '合規'],
  },
  {
    id: 'case2',
    title: '工廠擴廠用地登記',
    challenge: '目標用地用途模糊、先前申請被退件。',
    outcomes: [
      { label: '申請周期', value: '縮短至 3.5 個月' },
      { label: '退件風險', value: '降 40%' },
      { label: '登記通過', value: '一次成功' },
    ],
    testimonial: '把複雜拆成有序步驟，擴廠不再靠運氣。',
    tags: ['工廠登記', '流程優化', '跨機關'],
  },
  {
    id: 'case3',
    title: '多塊農地區域整合開發',
    challenge: '地塊分散、共有與法規條件不同，缺乏整體策略。',
    outcomes: [
      { label: '回收時間', value: '快 20%' },
      { label: '共有整合率', value: '95%' },
      { label: '社區反彈', value: '≈0' },
    ],
    testimonial: '從雜亂到有路徑，變更成為可預期的資產重整。',
    tags: ['土地整合', '分期開發', '社區共識'],
  },
];

export default function Actualcase() {
  return (
    <Container className="py-4">
      <header className="mb-4">
        <h2 className="fw-bold">實際案例</h2>
        <p className="text-muted">
          我們從前置可行性、法規審核到登記完成與後續履行，提供一條龍土地變更與用地登記合規服務，將潛力土地轉化為可操作、可驗證的資產，所有決策與成果皆有跡可循、風險事前管控。
        </p>
      </header>

      <Row className="g-4">
        {caseStudies.map((cs) => (
          <Col key={cs.id} xs={12} md={6} lg={4}>
            <CaseStudyCard cs={cs} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
