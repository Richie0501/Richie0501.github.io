// src/components/CaseStudyCard.jsx
import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import {
  faCheckCircle,
  faIndustry,
  faBuilding,
  faLayerGroup,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap = {
  '非都市農地變更為工業用地': faIndustry,
  '工廠擴廠用地登記': faBuilding,
  '多塊農地區域整合開發': faLayerGroup,
};

const OutcomeBadge = ({ label, value }) => (
  <div className="outcome-badge">
    <div className="label">{label}</div>
    <div className="value">{value}</div>
  </div>
);

export default function CaseStudyCard({ cs }) {
  return (
    <Card className="case-study-card h-100">
      <div className="stripe-left" aria-hidden="true" />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="icon-wrapper">
            <FontAwesomeIcon
              icon={iconMap[cs.title] || faShieldHalved}
              size="lg"
              aria-hidden="true"
            />
          </div>
          <Card.Title className="h5 mb-0">{cs.title}</Card.Title>
        </div>

        <div className="small mb-2 text-secondary">
          <Badge bg="outline-secondary" className="me-1">
            挑戰
          </Badge>
          {cs.challenge}
        </div>
        <div className="small mb-3">
          <Badge bg="outline-info" className="me-1">
            作法
          </Badge>
          {cs.solution}
        </div>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {cs.outcomes.map((o) => (
            <OutcomeBadge key={o.label} label={o.label} value={o.value} />
          ))}
        </div>

        <div className="mt-auto">
          <div className="d-flex align-items-start mb-1">
            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
            <div>
              <div className="small text-muted">客戶推薦</div>
              <blockquote className="testimonial mb-0">
                <p className="mb-0">“{cs.testimonial}”</p>
              </blockquote>
            </div>
          </div>
          <div className="tags mt-2">
            {cs.tags.map((t) => (
              <Badge key={t} bg="light" text="dark" className="me-1 small tag-pill">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
