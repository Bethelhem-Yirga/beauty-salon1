const services = [

  { 
    id: 'manicure', 
    name: 'Manicure', 
    duration: 45, 
    price: 30, 
    description: 'Classic manicure with finish.',
    icon: '💅',
    category: 'nails',
    popular: false
  },
  { 
    id: 'pedicure', 
    name: 'Pedicure', 
    duration: 60, 
    price: 45, 
    description: 'Relaxing pedicure and polish.',
    icon: '🦶',
    category: 'nails',
    popular: false
  },
  { 
    id: 'eyelash', 
    name: 'Eyelash Extensions', 
    duration: 90, 
    price: 120, 
    description: 'Full set of premium eyelash extensions.',
    icon: '👁️',
    category: 'eyes',
    popular: true
  },
  { 
    id: 'eyebrow', 
    name: 'Eyebrow Shaping', 
    duration: 30, 
    price: 25, 
    description: 'Professional waxing and threading.',
    icon: '✏️',
    category: 'eyes',
    popular: false
  },
  { 
    id: 'nailart', 
    name: 'Nail Art Design', 
    duration: 75, 
    price: 55, 
    description: 'Custom nail art and designs.',
    icon: '🎨',
    category: 'nails',
    popular: true
  },
  { 
    id: 'makeup', 
    name: 'Full Makeup', 
    duration: 60, 
    price: 75, 
    description: 'Professional makeup for any occasion.',
    icon: '💄',
    category: 'makeup',
    popular: false
  }
];


// Get services by category
export const getServicesByCategory = (category) => {
  if (category === 'all') return services;
  return services.filter(service => service.category === category);
};

// Get popular services
export const getPopularServices = () => {
  return services.filter(service => service.popular);
};

// Get service by ID
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

// Get all categories
export const getCategories = () => {
  const categories = [...new Set(services.map(service => service.category))];
  return ['all', ...categories];
};

// Calculate total price for multiple services
export const calculateTotal = (serviceIds) => {
  return serviceIds.reduce((total, id) => {
    const service = getServiceById(id);
    return total + (service?.price || 0);
  }, 0);
};

export default services;