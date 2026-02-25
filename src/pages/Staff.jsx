import React, { useState } from 'react'
import staff, { getCategories, getStaffByCategory } from '../data/staff'

export default function Staff() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const categories = getCategories();
  
  const displayedStaff = activeCategory === 'all' 
    ? staff 
    : staff.filter(member => member.category === activeCategory);

  // Category icons mapping
  const categoryIcons = {
    'all': '👥',
    'nails': '💅',
    'eyes': '👁️',
    'makeup': '💄'
  };

  return (
    <div className="staff-page">
      {/* Header Section */}
      <div className="staff-header">
        <h1 className="staff-title animate-slide-up">Meet Our Beauty Experts</h1>
        <p className="staff-subtitle animate-slide-up animate-delay-1">
          Professional artists dedicated to making you look and feel your best
        </p>
      </div>

      {/* Category Filters */}
      <div className="staff-filters animate-fade-in animate-delay-2">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            <span className="filter-icon">{categoryIcons[category] || '👤'}</span>
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <span className="filter-count">
              ({category === 'all' ? staff.length : staff.filter(m => m.category === category).length})
            </span>
          </button>
        ))}
      </div>

      {/* Staff Grid */}
      <div className="row g-4">
        {displayedStaff.map((member, index) => (
          <div 
            key={member.id} 
            className="col-md-6 col-lg-4"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="staff-card animate-scale-up">
              {/* Card Badge based on category */}
              <div className="staff-badge">
                {member.category === 'nails' && '💅'}
                {member.category === 'eyes' && '👁️'}
                {member.category === 'makeup' && '💄'}
              </div>

              {/* Profile Image */}
              <div className="staff-image-wrapper">
                <img 
                  src={member.photo} 
                  className="staff-image" 
                  alt={member.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&size=400&background=0D6EFD&color=fff`;
                  }}
                />
                <div className="staff-rating">
                  ⭐ {member.rating}
                </div>
              </div>

              {/* Staff Info */}
              <div className="staff-info">
                <h3 className="staff-name">{member.name}</h3>
                <p className="staff-role">
                  {member.role}
                  <span className="staff-specialty">{member.specialty}</span>
                </p>
                
                {/* Experience Badge */}
                <div className="staff-experience">
                  <span className="exp-icon">⏱️</span>
                  {member.experience}
                </div>

                {/* Services Offered */}
                <div className="staff-services">
                  {member.services.slice(0, 3).map((service, idx) => (
                    <span key={idx} className="service-tag">{service}</span>
                  ))}
                  {member.services.length > 3 && (
                    <span className="service-tag more">+{member.services.length - 3}</span>
                  )}
                </div>

                {/* Bio */}
                <p className="staff-bio">{member.bio}</p>

                {/* Availability */}
                <div className="staff-availability">
                  <span className="availability-icon">📅</span>
                  <span className="availability-text">{member.availability}</span>
                </div>

                {/* Action Buttons */}
                <div className="staff-actions">
                  <button 
                    className="btn-view"
                    onClick={() => setSelectedMember(member)}
                  >
                    View Profile
                  </button>
                  <button className="btn-book">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Shimmer Effect */}
              <div className="card-shimmer"></div>
            </div>
          </div>
        ))}
      </div>

      {/* If no staff in category */}
      {displayedStaff.length === 0 && (
        <div className="staff-empty">
          <span className="empty-icon">🔍</span>
          <h3>No specialists found</h3>
          <p>No staff available in this category</p>
        </div>
      )}

      {/* Staff Profile Modal (if selected) */}
      {selectedMember && (
        <div className="staff-modal" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>×</button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedMember.photo} alt={selectedMember.name} />
              </div>
              <div className="modal-info">
                <h2>{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
                <p className="modal-specialty">{selectedMember.specialty}</p>
                
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Experience</span>
                    <span className="detail-value">{selectedMember.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Rating</span>
                    <span className="detail-value">⭐ {selectedMember.rating}/5.0</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Availability</span>
                    <span className="detail-value">{selectedMember.availability}</span>
                  </div>
                </div>

                <div className="modal-bio">
                  <h4>About</h4>
                  <p>{selectedMember.bio}</p>
                </div>

                <div className="modal-services">
                  <h4>Services</h4>
                  <div className="service-list">
                    {selectedMember.services.map((service, idx) => (
                      <span key={idx} className="service-item">{service}</span>
                    ))}
                  </div>
                </div>

                <button className="btn-book-modal">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}