import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Staff from './pages/Staff'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import './styles/main.css'

export default function App() {
return (
<div>
<Header />
<main className="container my-5">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/contact" element={<Contact />} />
<Route path="/staff" element={<Staff />} />
<Route path="/pricing" element={<Pricing />} />
</Routes>
</main>
<Footer />
</div>
)
}