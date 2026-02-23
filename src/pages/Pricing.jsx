import React, { useState } from 'react'
import services, { getCategories } from '../data/services'
import { getServiceIcon } from '../utils/serviceHelpers'

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = getCategories();
  
  const displayedServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  // Find services - using ID is more reliable
  const manicure = services.find(s => s.id === 'manicure');
  const pedicure = services.find(s => s.id === 'pedicure');
  const fullMakeup = services.find(s => s.id === 'makeup');
  
  // Calculate package prices
  const packageTotal = (manicure?.price || 30) + (pedicure?.price || 45) + (fullMakeup?.price || 75);
  const packageDiscount = Math.round(packageTotal * 0.2);
  const packagePrice = packageTotal - packageDiscount;

  return (
    <div style={{ 
      padding: '2rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header Section - with inline styles */}
      <div style={{ 
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{ 
          fontSize: '3rem',
          fontWeight: 700,
          color: 'var(--services-title, #213547)',
          marginBottom: '1rem',
          position: 'relative',
          display: 'inline-block'
        }}>
          Our Pricing
          <span style={{
            content: '',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, var(--accent-color, #0d6efd), #ff6b6b)',
            borderRadius: '2px'
          }}></span>
        </h1>
        <p style={{ 
          fontSize: '1.2rem',
          color: 'var(--text-secondary, #6c757d)',
          maxWidth: '600px',
          margin: '1.5rem auto',
          lineHeight: 1.6
        }}>
          Transparent pricing for all our premium beauty services
        </p>
      </div>

      {/* Category Filters */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        margin: '2rem 0'
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '0.6rem 1.5rem',
              border: `2px solid ${activeCategory === category ? 'var(--accent-color, #0d6efd)' : 'var(--card-border, #dee2e6)'}`,
              background: activeCategory === category ? 'var(--accent-color, #0d6efd)' : 'transparent',
              color: activeCategory === category ? 'white' : 'var(--text-primary, #213547)',
              borderRadius: '30px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="pricing-filters animate-fade-in animate-delay-2">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="pricing-list">
        <div className="list-group">
          {displayedServices.length > 0 ? (
            displayedServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`list-group-item ${service.popular ? 'popular' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                  <span className="service-icon">{service.icon || getServiceIcon(service.name)}</span>
                  <div className="content">
                    <div className="h5 mb-1">
                      {service.name}
                      {service.popular && (
                        <span className="popular-badge">Popular</span>
                      )}
                    </div>
                    <small className="text-muted">{service.description}</small>
                    <div className="service-meta">
                      <span className="duration-badge">⏱️ {service.duration} min</span>
                      <span className="category-badge">{service.category}</span>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <strong>${service.price}</strong>
                  <button className="btn-book-small">Book</button>
                </div>
                <div className="shimmer"></div>
              </div>
            ))
          ) : (
            <div className="pricing-empty">
              <span className="icon">🔍</span>
              <h3>No services found</h3>
              <p>No services available in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary Section - Always shown */}
      <div className="pricing-summary animate-fade-in">
        <h3>Popular Package</h3>
        <div className="package-offer">
          <span className="package-icon">✨</span>
          <div className="package-details">
            <span className="package-name">Complete Beauty Package</span>
            <span className="package-services">
              {manicure?.name || 'Manicure'} + {pedicure?.name || 'Pedicure'} + {fullMakeup?.name || 'Full Makeup'}
            </span>
          </div>
          <div className="package-price">
            <span className="original-price">${packageTotal}</span>
            <span className="discounted-price">${packagePrice}</span>
          </div>
        </div>
        <button className="btn-book-all">Book Package (Save 20%)</button>
        <p className="note">*Limited time offer</p>
      </div>
    </div>
  )
}