// src/pages/News.js
import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Placeholder,
  Button,
} from 'react-bootstrap';
import { formatDistanceToNowStrict, parseISO} from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faGavel,
  faClipboardCheck,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

const RAW_NEWS = [
  {
    id: 'n1',
    title: '農地變更申請流程簡化公告',
    summary: '某縣市政府公布新版農地變建程序，前置審查可提前線上提交，預估審核時間縮短 20%。',
    category: '政策',
    date: '2025-07-30T09:20:00+08:00',
    important: true,
  },
  {
    id: 'n2',
    title: '成功案例：三階段整合開發完成',
    summary: '整合 5 塊散落農地，透過分期變更策略完成開發前置，社區反彈率降至 0%。',
    category: '案例',
    date: '2025-08-01T14:10:00+08:00',
    important: false,
  },
  {
    id: 'n3',
    title: '工廠用地登記一次通過心得分享',
    summary: '某加工廠透過我們的文件整備與跨機關協調，登記週期從 6 個月縮短到 3.5 個月。',
    category: '案例',
    date: '2025-07-28T11:00:00+08:00',
    important: false,
  },
  {
    id: 'n4',
    title: '地政局新增土地權屬線上查核功能',
    summary: '新版系統接入，提高前置權屬清查效率，建議開發案提前整合資料輸出。',
    category: '合規',
    date: '2025-08-02T08:00:00+08:00',
    important: true,
  },
  {
    id: 'n5',
    title: '變更核准率報告 Q2/2025',
    summary: '本季度非都市農地變更核准率達 87%，申請文件補件率下降。',
    category: '數據',
    date: '2025-07-25T16:30:00+08:00',
    important: false,
  },
];

const categoryMeta = {
  政策: { label: '政策', icon: faGavel },
  案例: { label: '案例', icon: faClipboardCheck },
  合規: { label: '合規', icon: faBullhorn },
  數據: { label: '數據', icon: faNewspaper },
};

export default function News() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNews(RAW_NEWS);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const sorted = useMemo(() => {
    if (loading) return [];
    return [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [news, loading]);

  return (
    <Container className="py-4">
      <header className="mb-4">
        <h2 className="fw-bold">最新消息</h2>
        <p className="text-muted">
          即時合規動態，開發進度一目了然。
        </p>
      </header>

      <Row className="g-4">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <Col key={i} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={3} />
                      </Placeholder>
                    </div>
                    <Placeholder as="h5" animation="glow">
                      <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow">
                      <Placeholder xs={12} /> <Placeholder xs={10} />
                    </Placeholder>
                    <div className="d-flex justify-content-between mt-3">
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={4} />
                      </Placeholder>
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={3} />
                      </Placeholder>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : sorted.map((n) => (
              <Col key={n.id} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon
                          icon={categoryMeta[n.category]?.icon}
                          className="text-primary"
                          fixedWidth
                        />
                        <div className="fw-semibold">{n.title}</div>
                      </div>
                      {n.important && (
                        <Badge bg="danger" pill>
                          重要
                        </Badge>
                      )}
                    </div>

                    <div className="mb-2 small text-secondary d-flex gap-2 flex-wrap">
                      <Badge bg={'primary'}>
                        {categoryMeta[n.category]?.label}
                      </Badge>
                      <div>{formatDistanceToNowStrict(parseISO(n.date), { addSuffix: true })}</div>
                    </div>

                    <div className="flex-grow-1">
                      <p className="mb-3">{n.summary}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="text-muted small">
                        {new Date(n.date).toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <Button variant="link" size="sm">
                        查看詳情 →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
}
