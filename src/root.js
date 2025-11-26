// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuickContactFloating from './pages/common/QuickContactFloating';
import ModernLandingPage from './pages/ModernLandingPage';
import ModernCompanyHistory from './pages/ModernCompanyHistory';
import ModernServices from './pages/ModernServices';
import ModernCases from './pages/ModernCases';
import ModernNews from './pages/ModernNews';
import ModernContact from './pages/ModernContact';

function Root() {
  return (
    <Router>
      <Routes>
        {/* 現代風格頁面 - 不使用共用組件 */}
        <Route path="/modern" element={<>
          <ModernLandingPage />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        <Route path="/modern/company-history" element={<>
          <ModernCompanyHistory />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        <Route path="/modern/services" element={<>
          <ModernServices />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        <Route path="/modern/cases" element={<>
          <ModernCases />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        <Route path="/modern/news" element={<>
          <ModernNews />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        <Route path="/modern/contact" element={<>
          <ModernContact />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        <Route path="/" element={<>
          <ModernLandingPage />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
        {/* 動態分支：若未匹配，導向 404 */}
        <Route path="*" element={<>
          <ModernLandingPage />
          <QuickContactFloating
            links={{
              phone: 'tel:+886912345678',
              facebook: 'https://www.facebook.com/你的粉專',
              line: 'https://line.me/R/ti/p/%40你的LineID',
            }}
          />
        </>} />
      </Routes>
    </Router>
  );
}

export default Root;
