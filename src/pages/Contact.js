// src/pages/ContactPage.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactPage() {
    const address = '403台灣臺中市西區台灣大道一段728號';
    const phone = '04 2203 8088';
    const email = 'is.eason0975@gmail.com';
    const lineUrl = 'https://lin.ee/yourline'; // 換成實際 LINE 加好友連結
    const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1234567890123!2d120.659...`; // 用實際 embed URL 換掉

    return (
        <Container className="py-3 contact-page">
            <header className="mb-3">
                <h2 className="fw-bold">聯絡我們</h2>
                <p className="text-muted">
                有土地開發或農地變更的需求嗎？歡迎聯絡我們，誠泰專精土地變更申請，提供農地開發、農地變建地、露營區申請、特定工廠登記業務輔導等多元服務。我們熟悉土地規定與都市計畫流程，協助您掌握土地最適用法規。無論是土地變更申請或開發諮詢，專業團隊皆能提供完整規劃與協辦。
                </p>
            </header>
            <Row className="g-4 align-items-start">
                {/* 左側資訊 */}
                <Col xs={12} md={6}>
                    <div className="company-header mb-3">
                        <h3 className="fw-bold mb-1">誠泰地產管理有限公司</h3>
                        <div className="text-muted mb-2">[ 台中辦公室 ]</div>
                    </div>

                    <div
                        className="contact-block"
                        itemScope
                        itemType="http://schema.org/Organization"
                    >
                        <div className="mb-3 d-flex align-items-start">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
                            </div>
                            <div className="info">
                                <div className="label small text-uppercase text-secondary">
                                    地址
                                </div>
                                <div className="value" itemProp="address">
                                    {address}
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 d-flex align-items-start">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} fixedWidth />
                            </div>
                            <div className="info">
                                <div className="label small text-uppercase text-secondary">
                                    免費諮詢電話
                                </div>
                                <div className="value">
                                    <a href={`tel:${phone}`} itemProp="telephone">
                                        {phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 d-flex align-items-start">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                            </div>
                            <div className="info">
                                <div className="label small text-uppercase text-secondary">
                                    電子郵件
                                </div>
                                <div className="value">
                                    <a href={`mailto:${email}`} itemProp="email">
                                        {email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="mb-2">
                                歡迎加入 <strong>誠泰官方 LINE 帳號</strong>，我們將竭誠為您服務。
                            </p>
                            <Button
                                href={lineUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="line-btn"
                                aria-label="加入官方 LINE 好友"
                            >
                                <FontAwesomeIcon icon={faLine} className="me-2" />
                                加入好友
                            </Button>
                        </div>

                        <div className="description text-muted">
                            <p className="mb-0">
                                有土地開發或農地變更的需求嗎？我們專精農地變建、工廠用地登記與整合開發前置，提供法規評估、文件代辦、登記輔導與後續履行支援。
                            </p>
                        </div>
                    </div>
                </Col>

                {/* 右側地圖 */}
                <Col xs={12} md={6}>
                    <div className="map-wrapper shadow-sm">
                        <iframe
                            title="公司位置地圖"
  src="https://www.google.com/maps?q=24.14786512484884,120.67413707116442&z=16&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: 8 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="directions-link">
                            <a
                                href="https://www.google.com/maps/place/%E8%AA%A0%E6%B3%B0%E5%9C%B0%E7%94%A2%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@24.1476938,120.6741478,17z/data=!3m1!4b1!4m6!3m5!1s0x34693da5f17f7369:0x9d07edfc8ce754e2!8m2!3d24.1476938!4d120.6741478!16s%2Fg%2F1pzs9c140?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                查看路線 →
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
