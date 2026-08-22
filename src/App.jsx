import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import EntryGate from './components/EntryGate';
import HeroVideoBackground from './components/HeroVideoBackground';
import Header from './components/Header';
import MobilityHeader from './components/MobilityHeader';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import MobilityPage from './pages/MobilityPage';
import MobilityContactPage from './pages/MobilityContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [gatePassed, setGatePassed] = useState(false);
  const location = useLocation();
  const isMobility = location.pathname.startsWith('/mobility');
  const isRootPath = location.pathname === '/';

  const handleGateSelect = () => {
    setGatePassed(true);
  };

  // Deep links to a specific section (e.g. /mobility, /road-safety) skip the
  // gate entirely and show that page's content right away.
  useEffect(() => {
    if (!isRootPath && !gatePassed) {
      setGatePassed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRootPath]);

  return (
    <div className="app-container">
      <HeroVideoBackground />
      <Preloader />
      {!gatePassed && isRootPath && <EntryGate onSelect={handleGateSelect} />}
      {isMobility ? <MobilityHeader /> : <Header />}
      <main>
        <Routes>
          {/* Main Clean Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/road-safety" element={<HomePage />} />
          <Route path="/mobility" element={<MobilityPage />} />
          <Route path="/mobility/contact" element={<MobilityContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/checkout/:productId" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

          {/* Legacy ASP.NET ASPX/MVC Route Aliases */}
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Home/About" element={<AboutPage />} />
          <Route path="/Home/Products" element={<ProductsPage />} />
          <Route path="/Home/Hsrp" element={<ProductDetailPage />} />
          <Route path="/Home/ReflectiveTape" element={<ProductDetailPage />} />
          <Route path="/Home/TrafficJet" element={<ProductDetailPage />} />
          <Route path="/Home/Temporary" element={<ProductDetailPage />} />
          <Route path="/Home/Permanent" element={<ProductDetailPage />} />
          <Route path="/Home/Protective" element={<ProductDetailPage />} />
          <Route path="/Home/Contact" element={<ContactPage />} />
          <Route path="/Home/Privacy" element={<PrivacyPage />} />

          {/* Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
