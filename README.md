# 💇‍♀️ Beauty Salon - Web Application
![Services Page Screenshot](/img/home.gif)
*Figure 1: Our home page 

![Services Page Screenshot](/img/staffs.png)
*Figure 2: staffs page 

![Services Page Screenshot](/img/gallary.png)
*Figure 3: gallary page 

![Services Page Screenshot](/img/profile.png)
*Figure 4: staff profile page 



A modern, responsive beauty salon website built with React, featuring glass morphism design, dark/light theme switching, and complete business functionality.


# 📋 Table of Contents
Features

Tech Stack

Project Structure

Installation

Configuration

Pages Overview

Components

Styling

Theme System

API Integration

Deployment

Contributing

License

## ✨ Features
## 🎨 Design Features

Glass Morphism UI - Modern frosted glass effects throughout

Dark/Light Theme - Toggle between themes with persistent storage

Fully Responsive - Works perfectly on all devices

Smooth Animations - Scroll-triggered animations and hover effects

Accessibility - WCAG compliant with keyboard navigation

# 📄 Pages & Functionality

## Home Page
Hero section with floating animations

Featured services cards

Statistics counter

Call-to-action buttons

## Services Page
Service catalog with icons

Category filtering

Service details (duration, price)

Popular service badges

Book now functionality

## Pricing Page
Dynamic pricing display

Category filters

Package deals with discounts

Price comparison

Service descriptions

## Staff Page
Team member profiles

Category filtering (nails, eyes, makeup)

Staff ratings and experience

Modal popups for details

Social media links

## Gallery Page
Masonry image grid

Category filtering

Lightbox modal for full-size view

Image navigation

Loading skeletons

## About Page
Company story with timeline

Mission & Vision cards

Core values

Team founders

Testimonials

Features showcase

## Contact Page
Contact information cards

Working hours

Social media links

Contact form with validation

Google Maps integration

FAQ section

## 🔧 Technical Features
React Router for navigation

Custom theme context

Local storage for preferences

Responsive images

Lazy loading

Error boundaries

Print stylesheets

# 🛠 Tech Stack
## Frontend
React 18 - UI library

React Router 6 - Navigation

React Bootstrap - Grid system & components

CSS3 - Custom styling with variables

Vite - Build tool and development server

## Development Tools
ESLint - Code linting

Prettier - Code formatting

Git - Version control

## APIs & Integrations
Google Maps - Location display

Unsplash - Placeholder images

EmailJS (optional) - Form submission

# 📁 Project Structure

```bash
beauti-salon/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeIcons.jsx
│   ├── data/
│   │   ├── services.js
│   │   └── staff.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Staff.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── accessibility.css
│   │   ├── responsive.css
│   │   ├── print.css
│   │   ├── components/
│   │   │   ├── header.css
│   │   │   ├── footer.css
│   │   │   ├── theme-icons.css
│   │   │   ├── service-card.css
│   │   │   └── package.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── services.css
│   │       ├── pricing.css
│   │       ├── staff.css
│   │       ├── gallery.css
│   │       ├── about.css
│   │       └── contact.css
│   ├── utils/
│   │   └── serviceHelpers.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

# 🚀 Installation
## Prerequisites
Node.js (v14 or higher)

npm or yarn

## Steps
### 1. Clone the repository
```bash
git clone https://github.com/yourusername/beauti-salon.git
cd beauti-salon
```
### 2. Install dependencies
```bash
npm install
# or
yarn install
```
### 3. Start development server
```bash
npm run dev
# or
yarn dev
```

# ⚙️ Configuration
## Environment Variables
Create a .env file in the root directory:

```bash
env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```
## Theme Configuration
Edit src/styles/variables.css to customize colors:

```bash
css

:root {
  --accent-color: #0d6efd;
  --accent-hover: #0b5ed7;
  --text-primary: #213547;
  --bg-primary: #ffffff;
  /* ... other variables */
}
```

# 🧩 Components
## Header
Fixed navigation bar

Theme toggle (sun/moon icons)

Responsive mobile menu

Shimmer animation effect

## Footer
Full-width design

Quick links

Service categories

Contact information

Copyright notice

## Service Card
Glass morphism design

Icon display

Title and description

Price and duration

Book button

Shimmer effect on hover

## Theme Icons
Sun/moon toggle buttons

Active state indicator

Smooth transitions

Glow animations

# 🎨 Styling
## CSS Architecture
Modular CSS - Separate files per component/page

CSS Variables - Centralized theme management

Mobile First - Responsive from the ground up

BEM Naming - Consistent class naming

## Key Animations
fadeIn - Opacity transitions

slideUp - Element entrance

scaleUp - Card appearances

float - Continuous floating

pulse - Attention-grabbing effects

shimmer - Loading and hover effects

# Glass Morphism
```bash
css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```
# 🌓 Theme System
## Light Theme (Default)
Clean white backgrounds

Dark text for readability

Subtle shadows

## Dark Theme
Dark backgrounds

Light text

Reduced eye strain

Smooth transitions

## Theme Switching
Persisted in localStorage

System preference detection

Smooth transitions

No flash on page load

# 🔌 API Integration
## Google Maps
```bash
javascript

// In Contact page
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
```
## Email Service (Optional)
```bash
javascript

// Contact form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  await emailjs.send(
    'service_id',
    'template_id',
    form,
    'user_id'
  );
};
```
