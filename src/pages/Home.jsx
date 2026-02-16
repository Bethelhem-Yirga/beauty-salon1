import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Beauty Salon</h1>
          <p className="col-md-8 fs-5 hero-description">
            Relax. Refresh. Renew. Book your appointment online or call us today.
          </p>
          <Link to="/services" className="btn btn-primary btn-lg">
            View Services
          </Link>
        </div>
      </div>
      
      {/* Featured Services Section - Transparent Cards */}
      <div className="featured-services mt-5">
        <h2 className="text-center mb-4 section-title">Our Featured Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="service-card p-4 rounded-3">
              <div className="service-icon mb-3">💆‍♀️</div>
              <h3>Expert Stylists</h3>
              <p className="service-description">
                Our professional team is dedicated to making you look and feel your best.
              </p>
              <Link to="/services" className="service-link">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-4 rounded-3">
              <div className="service-icon mb-3">✨</div>
              <h3>Premium Products</h3>
              <p className="service-description">
                We use only high-quality products for lasting results.
              </p>
              <Link to="/services" className="service-link">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-4 rounded-3">
              <div className="service-icon mb-3">⭐</div>
              <h3>5-Star Service</h3>
              <p className="service-description">
                Join our satisfied customers who trust us with their beauty needs.
              </p>
              <Link to="/services" className="service-link">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}