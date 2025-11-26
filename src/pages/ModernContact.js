// 現代風格聯絡我們頁面
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/modern-template.scss';
import logoImage from '../assets/images/chengtai.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faBuilding,
    faHandshake,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';

const ModernContact = () => {
    
    const address = '403台灣臺中市西區台灣大道一段728號';
    const phone = '04 2203 8088';
    const email = 'chengtai83121@gmail.com';
    const lineUrl = 'https://lin.ee/yourline';
    
    // 聯絡方式資料
    const contactMethods = [
        {
            title: '電話諮詢',
            desc: '專業顧問為您提供即時諮詢服務',
            icon: faPhone,
            contact: phone,
            link: `tel:${phone}`,
            details: '營業時間：週一至週五 09:00-18:00，提供免費初步諮詢，專業顧問將為您分析土地開發可行性。',
            benefits: ['免費諮詢', '專業分析', '即時回復']
        },
        {
            title: '電子郵件',
            desc: '詳細需求請透過郵件與我們聯繫',
            icon: faEnvelope,
            contact: email,
            link: `mailto:${email}`,
            details: '請在郵件中詳述您的土地位置、面積、開發需求，我們將在24小時內回復詳細的服務方案。',
            benefits: ['24小時內回復', '詳細方案', '文件傳遞']
        },
        {
            title: 'LINE官方帳號',
            desc: '加入好友獲得第一手開發資訊',
            icon: faLine,
            contact: '立即加入',
            link: lineUrl,
            details: '透過LINE官方帳號，您可以即時詢問法規問題、追蹤案件進度，並獲得最新的政策動態資訊。',
            benefits: ['即時通訊', '進度追蹤', '政策動態']
        },
        {
            title: '實地拜訪',
            desc: '歡迎蒞臨台中辦公室面對面諮詢',
            icon: faBuilding,
            contact: address,
            link: 'https://www.google.com/maps/place/%E8%AA%A0%E6%B3%B0%E5%9C%B0%E7%94%A2%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@24.1476938,120.6741478,17z/data=!3m1!4b1!4m6!3m5!1s0x34693da5f17f7369:0x9d07edfc8ce754e2!8m2!3d24.1476938!4d120.6741478!16s%2Fg%2F1pzs9c140?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D',
            details: '建議事先預約，我們將為您準備相關資料並安排專業顧問進行深度諮詢，現場可提供圖面分析。',
            benefits: ['預約制', '深度諮詢', '圖面分析']
        }
    ];

    return (
        <div className="modern-template">
            {/* 導航列 */}
            <nav className="navbar-modern">
                <Container>
                    <Row className="w-100 align-items-center">
                        <Col md={3}>
                            <div 
                                className="navbar-brand d-flex align-items-center btn" 
                                style={{cursor:"pointer"}}
                                onClick={() => window.location.href = '/modern'}
                            >
                                <img 
                                    src={logoImage} 
                                    alt="誠泰印章" 
                                    style={{
                                        height: '60px',
                                        width: '40px',
                                        objectFit: 'cover',
                                        marginRight: '12px',
                                        borderRadius: '8px'
                                    }}
                                />
                                誠泰開發
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex justify-content-center">
                                <a href="/modern/company-history" className="nav-link">公司沿革</a>
                                <a href="/modern/services" className="nav-link">服務項目</a>
                                <a href="/modern/cases" className="nav-link">實際案例</a>
                                <a href="/modern/news" className="nav-link">最新消息</a>
                            </div>
                        </Col>
                        <Col md={3} className="text-end">
                        <button className="btn-download" onClick={() => window.location.href = '/modern/contact'}>免費諮詢</button>
                        </Col>
                    </Row>
                </Container>
            </nav>

            {/* 主要英雄區 */}
            <section className="hero-section">
                <Container>
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                聯絡我們<br />
                                專業諮詢<br />
                                即刻開始
                            </h1>
                            <p className="hero-subtitle">
                                多元化聯絡方式，隨時為您服務<br />
                                專業土地開發諮詢，一通電話立即開始
                            </p>
                        </div>
                        
                        <div className="hero-visual">
                            <div className="phone-mockup">
                                <div className="phone-screen">
                                    <div className="portfolio-value">
                                        <div className="label">聯絡方式</div>
                                        <div className="amount">4</div>
                                        <div className="currency">種管道</div>
                                    </div>
                                    
                                    <div className="balance-info">
                                        <div className="current-balance">回復時間</div>
                                        <div className="balance-amount">24小時</div>
                                    </div>
                                    
                                    <div className="crypto-list">
                                        <div className="crypto-item">
                                            <div className="crypto-info">
                                                <div className="crypto-icon tether"></div>
                                                <div className="crypto-name">電話諮詢</div>
                                            </div>
                                            <div className="crypto-amount">即時</div>
                                        </div>
                                        <div className="crypto-item">
                                            <div className="crypto-info">
                                                <div className="crypto-icon solana"></div>
                                                <div className="crypto-name">LINE官方</div>
                                            </div>
                                            <div className="crypto-amount">便利</div>
                                        </div>
                                        <div className="crypto-item">
                                            <div className="crypto-info">
                                                <div className="crypto-icon ethereum"></div>
                                                <div className="crypto-name">實地拜訪</div>
                                            </div>
                                            <div className="crypto-amount">深度</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="decoration-circle"></div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 聯絡方式主要內容 */}
            <section className="features-section">
                <Container>
                    <div className="section-header">
                        <button className="btn btn-outline-secondary mb-3">聯絡方式</button>
                        <h2 className="section-title">
                            多元聯絡管道<br />
                            專業即時服務
                        </h2>
                        <p className="section-subtitle">
                            選擇最適合您的聯絡方式，我們的專業團隊<br />
                            將為您提供完整的土地開發諮詢服務。
                        </p>
                    </div>
                    
                    <Row className="g-4">
                        {contactMethods.map((method, index) => (
                            <Col key={index} md={6}>
                                <div className="contact-method-item">
                                    <div className="d-flex align-items-start mb-3">
                                        <div className="contact-content">
                                            <h4 className="contact-title">{method.title}</h4>
                                            <p className="contact-description">{method.desc}</p>
                                            <div className="contact-link-wrapper">
                                                <a 
                                                    href={method.link}
                                                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                                                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                                    className="contact-main-link"
                                                >
                                                    {method.contact}
                                                </a>
                                            </div>
                                            <div className="contact-benefits">
                                                {method.benefits.map((benefit, i) => (
                                                    <span key={i} className="benefit-tag">{benefit}</span>
                                                ))}
                                            </div>
                                            <p className="contact-details">{method.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* 地圖與公司資訊 */}
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <div className="text-center mb-4">
                                <span className="badge bg-secondary mb-3">辦公室位置</span>
                                <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>
                                    誠泰地產管理有限公司
                                </h2>
                                <p style={{fontSize: '1.1rem', color: 'var(--text-light)'}}>
                                    台中辦公室｜歡迎預約實地諮詢
                                </p>
                            </div>
                            
                            <Row className="g-4">
                                <Col md={6}>
                                    <div style={{
                                        padding: '2rem',
                                        background: 'var(--card-bg)',
                                        borderRadius: '20px',
                                        boxShadow: 'var(--shadow)',
                                        height: '100%'
                                    }}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                background: 'linear-gradient(135deg, var(--accent-green) 0%, #218838 100%)',
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '1rem'
                                            }}>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: 'white'}} />
                                            </div>
                                            <h5 style={{margin: 0, color: 'var(--text-dark)'}}>辦公室地址</h5>
                                        </div>
                                        <p style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '1rem'}}>
                                            {address}
                                        </p>
                                        <div className="d-flex gap-2">
                                            <span className="service-tag">
                                                <span><FontAwesomeIcon icon={faClock} /> 週一至週五</span>
                                            </span>
                                            <span className="service-tag">
                                                <span><FontAwesomeIcon icon={faHandshake} /> 預約制</span>
                                            </span>
                                        </div>
                                        <div style={{marginTop: '1.5rem'}}>
                                            <a
                                                href="https://www.google.com/maps/place/%E8%AA%A0%E6%B3%B0%E5%9C%B0%E7%94%A2%E7%AE%A1%E7%90%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@24.1476938,120.6741478,17z/data=!3m1!4b1!4m6!3m5!1s0x34693da5f17f7369:0x9d07edfc8ce754e2!8m2!3d24.1476938!4d120.6741478!16s%2Fg%2F1pzs9c140?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-details btn-shimmer"
                                                style={{
                                                    width: 'auto', 
                                                    padding: '0.6rem 1.2rem',
                                                    background: 'var(--accent-green)',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                }}
                                            >
                                                <span className="btn-text" style={{color: 'white', position: 'relative', zIndex: 1}}>查看路線</span>
                                                <span className="btn-arrow" style={{color: 'white', position: 'relative', zIndex: 1}}>→</span>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div style={{
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow)',
                                        height: '400px'
                                    }}>
                                        <iframe
                                            title="公司位置地圖"
                                            src="https://www.google.com/maps?q=24.14786512484884,120.67413707116442&z=16&output=embed"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ModernContact;