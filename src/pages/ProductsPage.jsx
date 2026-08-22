import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronRight, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import GooeyNav from '../components/GooeyNav';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Number Plates', 'Reflective Materials', 'Printing Systems', 'Traffic Control', 'Highway Infrastructure', 'Protective Films'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #090d16 100%)',
        color: '#ffffff',
        padding: '8rem 0 4rem 0',
        borderBottom: '3px solid var(--color-accent)'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Comprehensive Solutions</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Road Safety Product Catalog
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '720px' }}>
            High performance retroreflective sheeting, MORTH HSRP plates, TrafficJet printers, work zone safety sheeting, and protective overlay films.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ marginBottom: '3rem', minHeight: '3rem' }}>
            <GooeyNav
              items={categories.map((cat) => ({ label: cat, href: '#' }))}
              initialActiveIndex={categories.indexOf(selectedCategory)}
              onItemClick={(item) => setSelectedCategory(item.label)}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Product Stack */}
          <ScrollStack
            key={selectedCategory}
            className="products-stack"
            useWindowScroll
            itemDistance={140}
            itemScale={0.035}
            itemStackDistance={40}
            baseScale={0.82}
            rotationAmount={0}
            blurAmount={0}
          >
            {filteredProducts.map((prod) => (
              <ScrollStackItem key={prod.id} itemClassName="product-stack-card">
                <div
                  className="product-stack-content"
                  onClick={() => navigate(`/products/${prod.slug}`)}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/products/${prod.slug}`)}
                >
                  <div className="product-stack-img-wrapper">
                    <img src={prod.image} alt={prod.title} />
                    <span className="product-stack-tag">{prod.tag}</span>
                  </div>
                  <div className="product-stack-body">
                    <h3>{prod.title}</h3>
                    <p>{prod.description}</p>
                    <span className="product-link">
                      View Specifications & Features
                      <ChevronRight size={18} />
                    </span>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
