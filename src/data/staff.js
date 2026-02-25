const staff = [
  // Nail Specialists
  { 
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'Senior Nail Artist',
    specialty: 'Nail Art & Design',
    category: 'nails',
    bio: 'With over 8 years of experience, Sarah creates stunning nail art designs that turn heads. Specializes in 3D nail art and gel extensions.',
    photo: 'https://images.unsplash.com/photo-1494790108777-766fd1f29712?w=400&h=400&fit=crop', // Professional woman
    experience: '8 years',
    availability: 'Mon-Fri',
    rating: 4.9,
    services: ['Manicure', 'Pedicure', 'Nail Art Design']
  },
  { 
    id: 'mike-chen',
    name: 'Mike Chen',
    role: 'Nail Technician',
    specialty: 'Manicure & Pedicure',
    category: 'nails',
    bio: 'Mike brings precision and care to every manicure and pedicure. Known for his gentle technique and attention to detail.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', // Professional man
    experience: '5 years',
    availability: 'Tue-Sat',
    rating: 4.8,
    services: ['Manicure', 'Pedicure']
  },
  { 
    id: 'lisa-wong',
    name: 'Lisa Wong',
    role: 'Nail Art Specialist',
    specialty: 'Custom Nail Designs',
    category: 'nails',
    bio: 'Lisa specializes in custom nail art designs, from simple elegance to elaborate masterpieces. Your nails are her canvas.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', // Professional woman
    experience: '6 years',
    availability: 'Wed-Sun',
    rating: 4.9,
    services: ['Manicure', 'Nail Art Design']
  },

  // Eye Specialists
  { 
    id: 'emma-davis',
    name: 'Emma Davis',
    role: 'Senior Lash Artist',
    specialty: 'Eyelash Extensions',
    category: 'eyes',
    bio: 'Emma is certified in advanced lash techniques, creating natural-looking volume and dramatic styles that enhance your natural beauty.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', // Professional woman
    experience: '7 years',
    availability: 'Mon-Thu',
    rating: 5.0,
    services: ['Eyelash Extensions', 'Lash Lift']
  },
  { 
    id: 'rachel-green',
    name: 'Rachel Green',
    role: 'Eyebrow Specialist',
    specialty: 'Eyebrow Shaping & Microblading',
    category: 'eyes',
    bio: 'Rachel has an eye for symmetry and shape, creating perfectly arched eyebrows that frame your face beautifully.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop', // Professional woman
    experience: '5 years',
    availability: 'Tue-Fri',
    rating: 4.8,
    services: ['Eyebrow Shaping', 'Microblading', 'Threading']
  },
  { 
    id: 'sophia-lee',
    name: 'Sophia Lee',
    role: 'Lash & Brow Artist',
    specialty: 'Lash Extensions & Brow Styling',
    category: 'eyes',
    bio: 'Sophia combines lash and brow expertise to create harmonious, balanced looks that highlight your best features.',
    photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop', // Professional woman
    experience: '4 years',
    availability: 'Thu-Sun',
    rating: 4.7,
    services: ['Eyelash Extensions', 'Eyebrow Shaping', 'Lash Tinting']
  },

  // Makeup Specialists
  { 
    id: 'olivia-martinez',
    name: 'Olivia Martinez',
    role: 'Lead Makeup Artist',
    specialty: 'Bridal & Special Events',
    category: 'makeup',
    bio: 'Olivia creates flawless makeup looks for weddings, photoshoots, and special occasions. Her airbrush technique is unmatched.',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop', // Professional woman
    experience: '10 years',
    availability: 'By appointment',
    rating: 5.0,
    services: ['Full Makeup', 'Bridal Makeup', 'Airbrush Makeup']
  },
  { 
    id: 'isabella-rossi',
    name: 'Isabella Rossi',
    role: 'Makeup Artist',
    specialty: 'Natural & Glam Looks',
    category: 'makeup',
    bio: 'Isabella specializes in both natural everyday looks and dramatic glamour styles. She teaches you how to enhance your natural beauty.',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop', // Professional woman
    experience: '6 years',
    availability: 'Mon-Fri',
    rating: 4.8,
    services: ['Full Makeup', 'Makeup Lessons', 'Evening Makeup']
  },
  { 
    id: 'chloe-williams',
    name: 'Chloe Williams',
    role: 'Special Effects Makeup',
    specialty: 'Creative & Editorial Makeup',
    category: 'makeup',
    bio: 'Chloe brings creativity to life with editorial and special effects makeup. Perfect for photoshoots and creative projects.',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop', // Professional woman
    experience: '5 years',
    availability: 'Weekends',
    rating: 4.9,
    services: ['Full Makeup', 'Editorial Makeup', 'Special Effects']
  }
];

// Helper functions
export const getStaffByCategory = (category) => {
  if (category === 'all') return staff;
  return staff.filter(member => member.category === category);
};

export const getStaffById = (id) => {
  return staff.find(member => member.id === id);
};

export const getCategories = () => {
  return ['all', ...new Set(staff.map(member => member.category))];
};

export const getStaffByService = (serviceName) => {
  return staff.filter(member => 
    member.services?.some(service => 
      service.toLowerCase().includes(serviceName.toLowerCase())
    )
  );
};

export default staff;