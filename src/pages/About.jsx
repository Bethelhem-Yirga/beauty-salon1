import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">About Us</h1>
          <p className="hero-subtitle animate-fade-in animate-delay-1">
            Where beauty meets expertise and passion
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Journey</span>
            <h2 className="section-title">The Beauty Salon Story</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="story-grid">
            <div className="story-content animate-slide-right">
              <p className="story-text">
                Founded in 2015, Beauty Salon has grown from a small studio to a premier 
                destination for beauty and wellness. What started as a dream to create a 
                space where everyone feels beautiful has become a reality with thousands 
                of satisfied clients.
              </p>
              <p className="story-text">
                Our journey has been defined by our commitment to excellence, continuous 
                learning, and the belief that beauty is not just about appearance—it's 
                about confidence, self-care, and feeling your absolute best.
              </p>
              
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15k+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Services</span>
                </div>
              </div>
            </div>

            <div className="story-image-wrapper animate-slide-left">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" 
                alt="Our beautiful salon"
                className="story-image"
              />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card animate-scale-up">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To help clients look and feel their best through exceptional beauty services, 
                personalized care, and a commitment to using the highest quality products.
              </p>
            </div>

            <div className="mission-card animate-scale-up animate-delay-1">
              <div className="card-icon">✨</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading beauty destination known for innovation, artistry, and 
                exceptional customer experiences. A sanctuary for beauty, wellness, and 
                personal transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="title-underline"></div>
          </div>

          <div className="values-grid">
            <div className="value-card animate-scale-up">
              <div className="value-icon">⭐</div>
              <h4>Excellence</h4>
              <p>We strive for perfection in every service, ensuring the highest quality results.</p>
            </div>

            <div className="value-card animate-scale-up animate-delay-1">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>Honest, transparent communication with every client, building lasting trust.</p>
            </div>

            <div className="value-card animate-scale-up animate-delay-2">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Constantly learning new techniques and embracing the latest trends.</p>
            </div>

            <div className="value-card animate-scale-up animate-delay-3">
              <div className="value-icon">❤️</div>
              <h4>Compassion</h4>
              <p>Treating everyone with kindness, respect, and genuine care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Meet The Team</span>
            <h2 className="section-title">Our Expert Stylists</h2>
            <div className="title-underline"></div>
          </div>

          <div className="team-grid">
            <div className="team-card animate-scale-up">
              <div className="team-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1494790108777-766fd1f29712?w=400&h=400&fit=crop" 
                  alt="Sarah Johnson"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Sarah Johnson</h3>
              <p className="team-role">Master Stylist & Founder</p>
              <p className="team-bio">
                15+ years of experience in creative styling and color expertise.
              </p>
              <div className="team-social">
                <span className="social-icon">📱</span>
                <span className="social-icon">📧</span>
                <span className="social-icon">💼</span>
              </div>
            </div>

            <div className="team-card animate-scale-up animate-delay-1">
              <div className="team-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                  alt="Emily Davis"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Emily Davis</h3>
              <p className="team-role">Senior Nail Artist</p>
              <p className="team-bio">
                Specializes in creative nail art and luxurious manicures.
              </p>
              <div className="team-social">
                <span className="social-icon">📱</span>
                <span className="social-icon">📧</span>
                <span className="social-icon">💼</span>
              </div>
            </div>

            <div className="team-card animate-scale-up animate-delay-2">
              <div className="team-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" 
                  alt="Michael Chen"
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Michael Chen</h3>
              <p className="team-role">Wellness Specialist</p>
              <p className="team-bio">
                Expert in skincare, facials, and holistic beauty treatments.
              </p>
              <div className="team-social">
                <span className="social-icon">📱</span>
                <span className="social-icon">📧</span>
                <span className="social-icon">💼</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💧</div>
              <h4>Hygienic</h4>
              <p>Sterilized equipment for your safety</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h4>Premium Products</h4>
              <p>Only the best for your beauty</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h4>Flexible Hours</h4>
              <p>Early mornings & late evenings</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h4>Best Price</h4>
              <p>Quality services at fair prices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h4>Convenient Location</h4>
              <p>Easy access and parking</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>Award Winning</h4>
              <p>Recognized for excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Client Love</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="title-underline"></div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-scale-up">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Best salon experience ever! The team is professional, friendly, and truly talented.
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Client" />
                <div>
                  <h4>Jessica Martinez</h4>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-scale-up animate-delay-1">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                I've been coming here for years and always leave feeling amazing. Highly recommended!
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop" alt="Client" />
                <div>
                  <h4>Amanda Lee</h4>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-scale-up animate-delay-2">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                The attention to detail and customer service is unmatched. My go-to salon!
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Client" />
                <div>
                  <h4>David Kim</h4>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Look?</h2>
            <p className="cta-text">
              Experience the difference of professional beauty services
            </p>
            <Link to="/contact" className="cta-button">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}