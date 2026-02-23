import services from '../data/services';

// Icon mapping based on service name
const iconMap = {
  'Haircut': '✂️',
  'Hair Color': '🎨',
  'Manicure': '💅',
  'Pedicure': '🦶',
  'Eyelash Extensions': '👁️',
  'Eyebrow Shaping': '✏️',
  'Nail Art Design': '🎨',
  'Full Makeup': '💄'
};

// Get icon for a service
export const getServiceIcon = (serviceName) => {
  return iconMap[serviceName] || '💇‍♀️';
};

// Get all services with icons
export const getServicesWithIcons = () => {
  return services.map(service => ({
    ...service,
    icon: iconMap[service.name] || '💇‍♀️'
  }));
};

// Group services by category
export const groupServicesByCategory = () => {
  return services.reduce((groups, service) => {
    const category = service.category || 'other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push({
      ...service,
      icon: iconMap[service.name] || '💇‍♀️'
    });
    return groups;
  }, {});
};