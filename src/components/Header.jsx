import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
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

  const setLightTheme = () => {
    setTheme('light')
  }

  const setDarkTheme = () => {
    setTheme('dark')
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
            {/* Icon-based Theme Toggle - No Tooltips */}
            <div className="theme-icons" role="group" aria-label="Theme selector">
              <button
                className={`theme-icon-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={setLightTheme}
                aria-label="Switch to light theme"
                aria-pressed={theme === 'light'}
              >
                <span className="theme-icon" aria-hidden="true">☀️</span>
              </button>
              
              <button
                className={`theme-icon-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={setDarkTheme}
                aria-label="Switch to dark theme"
                aria-pressed={theme === 'dark'}
              >
                <span className="theme-icon" aria-hidden="true">🌙</span>
              </button>
            </div>

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