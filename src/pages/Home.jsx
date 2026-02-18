import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all animated elements
    if (titleRef.current) observer.observe(titleRef.current)
    if (descriptionRef.current) observer.observe(descriptionRef.current)
    if (buttonRef.current) observer.observe(buttonRef.current)
    
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    // Cleanup
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      {/* Hero Section with Floating Animation */}
      <div 
        ref={heroRef}
        className="hero-section p-5 mb-4 rounded-3 animate-float"
      >
        <div className="container-fluid py-5">
          <h1 
            ref={titleRef}
            className="display-5 fw-bold animate-slide-up"
          >
            Welcome to Beauty Salon
          </h1>
          <p 
            ref={descriptionRef}
            className="col-md-8 fs-5 hero-description animate-slide-up animate-delay-1"
          >
            Relax. Refresh. Renew. Book your appointment online or call us today.
          </p>
          <Link 
            ref={buttonRef}
            to="/services" 
            className="btn btn-primary btn-lg animate-slide-up animate-delay-2 animate-pulse-hover"
          >
            View Services
          </Link>
        </div>

        {/* Animated background elements */}
        <div className="floating-elements">
          <div className="floating-element floating-1">💇‍♀️</div>
          <div className="floating-element floating-2">💅</div>
          <div className="floating-element floating-3">✨</div>
          <div className="floating-element floating-4">🌸</div>
        </div>
      </div>
      
      {/* Featured Services Section */}
      <div className="featured-services mt-5">
        <h2 className="text-center mb-4 section-title animate-fade-in">
          Our Featured Services
        </h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div 
              ref={el => cardsRef.current[0] = el}
              className="service-card p-4 rounded-3 animate-scale-up"
            >
              <div className="service-icon mb-3 animate-bounce">💆‍♀️</div>
              <h3>Expert Stylists</h3>
              <p className="service-description">
                Our professional team is dedicated to making you look and feel your best.
              </p>
              <Link to="/services" className="service-link">
                Learn More <span aria-hidden="true">→</span>
              </Link>

              {/* Shimmer effect on hover */}
              <div className="card-shimmer"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div 
              ref={el => cardsRef.current[1] = el}
              className="service-card p-4 rounded-3 animate-scale-up animate-delay-1"
            >
              <div className="service-icon mb-3 animate-bounce animate-delay-2">✨</div>
              <h3>Premium Products</h3>
              <p className="service-description">
                We use only high-quality products for lasting results.
              </p>
              <Link to="/services" className="service-link">
                Learn More <span aria-hidden="true">→</span>
              </Link>

              {/* Shimmer effect on hover */}
              <div className="card-shimmer"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div 
              ref={el => cardsRef.current[2] = el}
              className="service-card p-4 rounded-3 animate-scale-up animate-delay-2"
            >
              <div className="service-icon mb-3 animate-bounce animate-delay-3">⭐</div>
              <h3>5-Star Service</h3>
              <p className="service-description">
                Join our satisfied customers who trust us with their beauty needs.
              </p>
              <Link to="/services" className="service-link">
                Learn More <span aria-hidden="true">→</span>
              </Link>

              {/* Shimmer effect on hover */}
              <div className="card-shimmer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Counters */}
      <div className="stats-section mt-5 p-5 rounded-3">
        <div className="row g-4">
          <div className="col-md-3 col-6">
            <div className="stat-item animate-count">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item animate-count animate-delay-1">
              <div className="stat-number">15+</div>
              <div className="stat-label">Expert Stylists</div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item animate-count animate-delay-2">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item animate-count animate-delay-3">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}