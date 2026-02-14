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

useEffect(() => {
const root = document.documentElement // apply theme globally
if (!root) return
if (theme === 'dark') {
root.classList.add('theme-dark')
root.classList.remove('theme-light')
} else {
root.classList.add('theme-light')
root.classList.remove('theme-dark')
}
try {
localStorage.setItem(THEME_KEY, theme)
} catch (e) {}
}, [theme])

const reducedMotion =
typeof window !== 'undefined' &&
window.matchMedia &&
window.matchMedia('(prefers-reduced-motion: reduce)').matches

return (
<header id="app-header" className="glass-header">
<Navbar expand="lg" className="px-3">
<Container fluid>
<Navbar.Brand as={Link} to="/" className="brand" aria-label="Home">
<span className="brand-logo" aria-hidden>💇‍♀️</span>
<span className="brand-text">Beauty Salon</span>
</Navbar.Brand>


      <div className="header-controls d-flex align-items-center">
        <Form className="theme-toggle-form me-2" role="group" aria-label="Theme toggle">
          <div className="form-check form-switch my-0">
            <input
              className="form-check-input"
              type="checkbox"
              id="themeSwitch"
              checked={theme === 'dark'}
              onChange={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
              aria-checked={theme === 'dark'}
              aria-label="Toggle dark theme"
            />
            <label className="form-check-label small ms-2" htmlFor="themeSwitch">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </label>
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

  {reducedMotion ? <span className="visually-hidden">Reduced motion enabled</span> : null}
</header>

)
}