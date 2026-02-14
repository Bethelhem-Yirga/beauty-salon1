import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="glass-footer" role="contentinfo" aria-label="Footer">
      <div className="main-container" style={{ padding: "2rem 1rem" }}>
        <div className="footer-inner">
          {/* Column 1: Brand + brief */}
          <div className="footer-col">
            <div style={{ display: "flex", gap: ".6rem", alignItems: "center" }}>
              <span className="brand-logo" aria-hidden>💇‍♀️</span>
              <span className="brand-text" style={{ fontWeight: 700 }}>Beauty Salon</span>
            </div>
            <div className="u-muted" style={{ marginTop: ".4rem", fontSize: ".92rem" }}>
              Professional beauty services — elegant looks, friendly service.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <div className="footer-heading">Quick Links</div>
            <nav className="footer-nav" aria-label="Quick links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/gallery" className="footer-link">Gallery</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/staff" className="footer-link">Our Staff</Link>
              <Link to="/pricing" className="footer-link">Pricing</Link>
            </nav>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <div className="footer-heading">Our Services</div>
            <div className="footer-services">
              <div className="u-muted">Manicure</div>
              <div className="u-muted">Pedicure</div>
              <div className="u-muted">Eyelash Extensions</div>
              <div className="u-muted">Eyebrow Shaping</div>
              <div className="u-muted">Nail Art Design</div>
              <div className="u-muted">Full Makeup</div>
            </div>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="footer-col">
            <div className="footer-heading">Get In Touch</div>
            <address style={{ fontStyle: "normal" }}>
              <div className="u-muted">Gerji Alfoz Plaza, 4th Floor</div>
              <div className="u-muted">Addis Ababa, Ethiopia</div>
              <div style={{ marginTop: ".5rem" }}>
                <a href="tel:+2519xxxxxxxx" className="footer-link">+251 9xx xxxxxx</a><br/>
                <a href="tel:+2519xxxxxxxx" className="footer-link">+251 9xx xxxxxx</a>
              </div>
              <div style={{ marginTop: ".4rem" }}>
                <a href="mailto:info@xxxxxx.et" className="footer-link">info@xxxxxx.et</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright row - full width */}
      <div className="copyright-row">
        <div className="copyright-content">
          © {new Date().getFullYear()} Beauty Salon — All rights reserved.
        </div>
      </div>
    </footer>
  );
}