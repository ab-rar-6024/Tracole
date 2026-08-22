import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Tag, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

const CheckoutPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = PRODUCTS.find(
    (p) => p.id === productId || p.slug === productId || p.legacyPath.toLowerCase().endsWith(productId?.toLowerCase() || '')
  ) || PRODUCTS[0];

  const [formData, setFormData] = useState({ name: '', address: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="checkout-page">
      <section className="checkout-header">
        {product.bgImage && (
          <div className="pd-banner-bg"><img src={product.bgImage} alt="" aria-hidden="true" /></div>
        )}
        <div className="pd-banner-overlay"></div>
        <div className="container pd-banner-content">
          <button onClick={() => navigate(-1)} className="btn btn-secondary back-to-products-btn">
            <ArrowLeft size={18} /> Back
          </button>
          <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Secure Order</span>
          <h1>Checkout</h1>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="checkout-layout">
            {/* Visual Panel */}
            <div className="checkout-visual">
              <div className="checkout-visual-image">
                <img src={product.detailImg || product.bannerImg || product.image} alt={product.title} />
              </div>
              <h3 className="checkout-visual-title">{product.shortTitle || product.title}</h3>
              <p className="checkout-visual-desc">{product.description}</p>

              <div className="checkout-trust-list">
                <div className="checkout-trust-item">
                  <ShieldCheck size={20} />
                  <span>Certified & compliant road-safety product</span>
                </div>
                <div className="checkout-trust-item">
                  <Truck size={20} />
                  <span>Pan-India dispatch from Chennai & Noida facilities</span>
                </div>
                <div className="checkout-trust-item">
                  <BadgeCheck size={20} />
                  <span>Dedicated technical support after order placement</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="checkout-card">
              <div className="checkout-summary">
                <div className="checkout-summary-row">
                  <span>Product:</span>
                  <strong>{product.shortTitle || product.title}</strong>
                </div>
                <div className="checkout-summary-row">
                  <span>Price:</span>
                  <strong className="checkout-price">
                    <Tag size={15} />
                    {product.price}
                  </strong>
                </div>
              </div>

              {submitted ? (
                <div className="checkout-success">
                  <CheckCircle size={48} style={{ color: '#16a34a', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.35rem', color: '#15803d', marginBottom: '0.5rem' }}>Order Received!</h3>
                  <p style={{ color: '#166534' }}>
                    Thank you, {formData.name}. Our sales team will contact you shortly at {formData.phone} to confirm your order for {product.shortTitle || product.title}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="checkout-form">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Address *</label>
                    <textarea
                      required
                      className="form-input form-textarea"
                      placeholder="Delivery address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="checkout-submit-btn">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
