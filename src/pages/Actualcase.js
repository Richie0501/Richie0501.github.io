// src/pages/ActualCase.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CaseStudyCard from './common/caseStudyCard';

const caseStudies = [
  {
    id: 'case1',
    title: '台中市大雅區自強段1742地號',
    challenge: '原為農牧用地、有申請農舍、變更難度中等。',
    outcomes: [
      { label: '變更核准速度', value: '送件起 6 個月' },
      { label: '土地價值提升', value: '4 倍以上' },
      { label: '行政異議', value: '0 件' },
    ],
    testimonial: '流程解釋得很清楚，且該怎麼做都有事先推擬好，讓我放心把案件全權交由你們辦理',
    tags: ['農地變更', '甲種建築用地'],
  },
  {
    id: 'case2',
    title: '苗栗縣三義鄉魚藤坪段189-1地號',
    challenge: '原有農牧用地、舊有房屋座落、更正難度高。',
    outcomes: [
      { label: '變更核准速度', value: '送件起算 7 個月' },
      { label: '申退件風險', value: '降 70 %' },
      { label: '土地價值提升', value: '3 倍以上' },
      
    ],
    testimonial: '在送件前已將所需之資料調閱得比我原本給的文件更加詳細，雖案件有波折，但依然順利地過件了',
    tags: ['更正編定', '丙種建築用地'],
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
