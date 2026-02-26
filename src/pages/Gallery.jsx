import React, { useState } from 'react'

// Sample gallery images (replace with your actual images)
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
    title: 'Elegant Manicure',
    category: 'nails',
    description: 'Classic red manicure with glossy finish'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop',
    title: 'Pedicure Paradise',
    category: 'nails',
    description: 'Relaxing pedicure treatment'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&h=400&fit=crop',
    title: 'Nail Art Design',
    category: 'nails',
    description: 'Intricate floral nail art design'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1583001938182-7a5b4c9c7b3b?w=600&h=400&fit=crop',
    title: 'Eyelash Extensions',
    category: 'eyes',
    description: 'Voluminous lash extensions'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583001938182-7a5b4c9c7b3b?w=600&h=400&fit=crop',
    title: 'Eyebrow Shaping',
    category: 'eyes',
    description: 'Perfectly arched eyebrows'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop',
    title: 'Makeup Transformation',
    category: 'makeup',
    description: 'Glamorous evening makeup look'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop',
    title: 'Bridal Makeup',
    category: 'makeup',
    description: 'Elegant bridal makeup'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=600&h=400&fit=crop',
    title: 'Salon Interior',
    category: 'salon',
    description: 'Our beautiful salon space'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&h=400&fit=crop',
    title: 'Hair Styling',
    category: 'hair',
    description: 'Professional hair styling'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
    title: 'Hair Color',
    category: 'hair',
    description: 'Beautiful balayage technique'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop',
    title: 'Nail Art Collection',
    category: 'nails',
    description: 'Latest nail art designs'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    title: 'Spa Treatment',
    category: 'spa',
    description: 'Relaxing facial treatment'
  }
];

// Get unique categories
const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter images based on category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Category icons mapping
  const categoryIcons = {
    'all': '🖼️',
    'nails': '💅',
    'eyes': '👁️',
    'makeup': '💄',
    'hair': '✂️',
    'salon': '🏢',
    'spa': '💆‍♀️'
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <div className="gallery-header">
        <h1 className="gallery-title animate-slide-up">Our Gallery</h1>
        <p className="gallery-subtitle animate-slide-up animate-delay-1">
          Explore our beautiful work and transformations
        </p>
      </div>

      {/* Category Filters */}
      <div className="gallery-filters animate-fade-in animate-delay-2">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            <span className="filter-icon">{categoryIcons[category] || '📷'}</span>
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <span className="filter-count">
              ({category === 'all' ? galleryImages.length : galleryImages.filter(img => img.category === category).length})
            </span>
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item animate-scale-up"
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => handleImageClick(image)}
          >
            <div className="gallery-image-wrapper">
              <img 
                src={image.src} 
                alt={image.title}
                className="gallery-image"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && <div className="image-loader"></div>}
              
              {/* Overlay */}
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <h3 className="overlay-title">{image.title}</h3>
                  <p className="overlay-description">{image.description}</p>
                  <span className="overlay-category">
                    {categoryIcons[image.category]} {image.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="gallery-empty">
          <span className="empty-icon">🔍</span>
          <h3>No images found</h3>
          <p>No images available in this category</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            
            <button className="modal-nav modal-prev" onClick={handlePrev}>
              ‹
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="modal-image"
              />
            </div>
            
            <button className="modal-nav modal-next" onClick={handleNext}>
              ›
            </button>

            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <span className="modal-category">
                {categoryIcons[selectedImage.category]} {selectedImage.category}
              </span>
            </div>

            <div className="modal-counter">
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}