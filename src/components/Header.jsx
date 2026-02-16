import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const THEME_KEY = 'glass-theme' // 'dark' or 'light'
const prefersDarkScheme = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'dark' || saved === 'light') return saved
    } catch (e) {}
    return prefersDarkScheme() ? 'dark' : 'light'
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    
    // Apply theme classes
    if (theme === 'dark') {
      root.classList.add('theme-dark')
      root.classList.remove('theme-light')
      root.setAttribute('data-bs-theme', 'dark')
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#1a1a1a')
      }
    } else {
      root.classList.add('theme-light')
      root.classList.remove('theme-dark')
      root.setAttribute('data-bs-theme', 'light')
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]')
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#ffffff')
      }
    }
    
    // Save theme preference
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch (e) {}
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }))
  }, [theme])

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  // Don't render theme toggle until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <header id="app-header" className="glass-header">
        <Navbar expand="lg" className="px-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="brand" aria-label="Home">
              <span className="brand-logo" aria-hidden>💇‍♀️</span>
              <span className="brand-text">Beauty Salon</span>
            </Navbar.Brand>

            <div className="header-controls d-flex align-items-center">
              <Navbar.Toggle aria-controls="main-nav" />
            </div>

            <Navbar.Collapse id="main-nav">
              <Nav className="ms-auto align-items-lg-center">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                <Nav.Link as={Link} to="/staff">Staff</Nav.Link>
                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="btn-contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }

  return (
    <header id="app-header" className="glass-header">
      <Navbar expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand" aria-label="Home">
            <span className="brand-logo" aria-hidden>💇‍♀️</span>
            <span className="brand-text">Beauty Salon</span>
          </Navbar.Brand>

          <div className="header-controls d-flex align-items-center">
            {/* Enhanced Theme Toggle */}
            <Form className="theme-toggle-form me-3" role="group" aria-label="Theme toggle">
              <div className="d-flex align-items-center">
                {/* Sun icon for light mode */}
                <span 
                  className="theme-icon" 
                  aria-hidden="true"
                  style={{ 
                    opacity: theme === 'light' ? 1 : 0.5,
                    transition: 'opacity 0.2s',
                    marginRight: '0.5rem'
                  }}
                >
                  ☀️
                </span>
                
                <div className="form-check form-switch my-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="themeSwitch"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    aria-checked={theme === 'dark'}
                    aria-label="Toggle dark theme"
                    style={{ cursor: 'pointer' }}
                  />
                  <label 
                    className="form-check-label small ms-2" 
                    htmlFor="themeSwitch"
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="visually-hidden">
                      {theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled'}
                    </span>
                    <span aria-hidden="true">
                      {theme === 'dark' ? 'Dark' : 'Light'}
                    </span>
                  </label>
                </div>

                {/* Moon icon for dark mode */}
                <span 
                  className="theme-icon ms-2" 
                  aria-hidden="true"
                  style={{ 
                    opacity: theme === 'dark' ? 1 : 0.5,
                    transition: 'opacity 0.2s'
                  }}
                >
                  🌙
                </span>
              </div>
            </Form>

            <Navbar.Toggle aria-controls="main-nav" />
          </div>

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
              <Nav.Link as={Link} to="/staff">Staff</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="btn-contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {reducedMotion ? (
        <span className="visually-hidden">Reduced motion enabled</span>
      ) : null}
    </header>
  )
}