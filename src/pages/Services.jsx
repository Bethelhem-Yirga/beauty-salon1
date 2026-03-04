import React, { useEffect, useRef } from 'react'

// Services data
const services = [
  {
    id: 1,
    name: 'Manicure',
    description: 'Professional hand care with nail shaping, cuticle treatment, and polish application for beautiful, healthy nails.',
   
    popular: true,
    features: ['Nail shaping', 'Cuticle care', 'Polish application', 'Hand massage']
  },
  {
    id: 2,
    name: 'Pedicure',
    description: 'Luxurious foot treatment including exfoliation, nail care, and relaxing massage to refresh your feet.',
    price: 45,
    duration: 60,
    popular: true,
    features: ['Foot soak', 'Callus removal', 'Nail care', 'Foot massage']
  },
  {
    id: 3,
    name: 'Eyelash Extensions',
    description: 'Get gorgeous, full lashes with our professional eyelash extension service for a stunning look.',
    price: 85,
    duration: 90,
    popular: false,
    features: ['Semi-permanent', 'Natural look', 'Various lengths', 'Long-lasting']
  },
  {
    id: 4,
    name: 'Eyebrow Shaping',
    description: 'Expert eyebrow shaping and grooming to enhance your natural features and frame your face beautifully.',
    price: 25,
    duration: 30,
    popular: false,
    features: ['Waxing/threading', 'Precision shaping', 'Natural look', 'Complimentary trim']
  },
  {
    id: 5,
    name: 'Nail Art Design',
    description: 'Express your style with custom nail art designs created by our talented nail artists.',
    price: 55,
    duration: 75,
    popular: true,
    features: ['Custom designs', 'Premium colors', '3D elements', 'Long-lasting']
  },
  {
    id: 6,
    name: 'Full Makeup',
    description: 'Complete makeup application for any occasion, from natural daytime looks to glamorous evening styles.',
    price: 65,
    duration: 60,
    popular: false,
    features: ['Professional products', 'Custom look', 'Long-wearing', 'Skin preparation']
  }
]

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
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

    // Observe title
    if (titleRef.current) observer.observe(titleRef.current)
    
    // Observe all cards
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card)
    })

    // Cleanup
    return () => observer.disconnect()
  }, [])

  // Helper function to get icon based on service name
  const getServiceIcon = (name) => {
    const icons = {
      'Manicure': '💅',
      'Pedicure': '🦶',
      'Eyelash Extensions': '👁️',
      'Eyebrow Shaping': '✏️',
      'Nail Art Design': '🎨',
      'Full Makeup': '💄'
    }
    return icons[name] || '💇‍♀️'
  }

  return (
    <div className="services-page" ref={sectionRef}>
      {/* Header Section */}
      <div className="services-header mb-5">
        <h1 
          ref={titleRef}
          className="services-title animate-slide-up"
        >
          Our Premium Services
        </h1>
        <p className="services-subtitle animate-slide-up animate-delay-1">
          Experience luxury and professionalism with our comprehensive beauty treatments
        </p>
        
        {/* Category Filters */}
        <div className="service-filters animate-fade-in animate-delay-2">
          <button className="filter-btn active">All Services</button>
          <button className="filter-btn">Nail Care</button>
          <button className="filter-btn">Eye Care</button>
          <button className="filter-btn">Makeup</button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="col-md-6 col-lg-4"
          >
            <div 
              ref={el => cardsRef.current[index] = el}
              className={`service-card-wrapper animate-scale-up animate-delay-${index % 3 + 1}`}
            >
              <div className="service-card h-100">
                {/* Card Badge */}
                {service.popular && (
                  <div className="card-badge">
                    <span>🔥 Popular</span>
                  </div>
                )}
                
                {/* Card Icon */}
                <div className="card-icon">
                  {getServiceIcon(service.name)}
                </div>

                {/* Card Content */}
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{service.name}</h3>
                  <p className="card-description">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                

                  {/* Action Buttons */}
                  <div className="card-actions">
                    <button className="btn-book">
                      <span>Book Now</span>
                      <span className="btn-icon">→</span>
                    </button>
                    <button className="btn-details" title="More Details">
                      <span className="btn-icon">ℹ️</span>
                    </button>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="card-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Package Section */}
      <div className="special-package mt-5 p-5 rounded-3">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2 className="package-title">Complete Beauty Package</h2>
            <p className="package-description">
              Treat yourself to our signature beauty package including Manicure, Pedicure, and Full Makeup
            </p>
            <div className="package-features">
              <span className="package-feature">✓ 3 Premium Services</span>
              <span className="package-feature">✓ 25% Discount</span>
              <span className="package-feature">✓ Free Consultation</span>
              <span className="package-feature">✓ Priority Booking</span>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <button className="btn-package">Book Package</button>
          </div>
        </div>
      </div>

      {/* Service Benefits */}
      <div className="service-benefits mt-5">
        <h3 className="benefits-title text-center mb-4">Why Choose Our Services</h3>
        <div className="row g-4">
          <div className="col-md-3 col-6">
            <div className="benefit-item">
              <div className="benefit-icon">✨</div>
              <h4>Expert Stylists</h4>
              <p>Licensed professionals</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="benefit-item">
              <div className="benefit-icon">🌟</div>
              <h4>Premium Products</h4>
              <p>Top quality materials</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="benefit-item">
              <div className="benefit-icon">💧</div>
              <h4>Hygienic</h4>
              <p>Sterilized equipment</p>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="benefit-item">
              <div className="benefit-icon">⭐</div>
              <h4>Satisfaction</h4>
              <p>100% guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}