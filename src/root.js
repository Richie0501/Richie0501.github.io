// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';

import Home from './pages/Home';
import SpecializationPage from './pages/Specialization';
import PlantPage from './pages/Plant';
import NotFound from './pages/NotFound';
import ActualcasePage from './pages/Actualcase';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';
import QuickContactFloating from './pages/common/QuickContactFloating';

function Root() {
  return (
    <Router>
      {/* 全站共用：Header */}
      <Header />

      {/* 主要內容區域 */}
      <div style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialization" element={<SpecializationPage />} />
          <Route path="/plants" element={<PlantPage />} />
          <Route path="/actualcase" element={<ActualcasePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 動態分支：若未匹配，導向 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <QuickContactFloating
        links={{
          phone: 'tel:+886912345678',
          facebook: 'https://www.facebook.com/你的粉專',
          line: 'https://line.me/R/ti/p/%40你的LineID',
        }}
      />
      {/* 全站共用：Footer */}
      <Footer />
    </Router>
  );
}

export default Root;
