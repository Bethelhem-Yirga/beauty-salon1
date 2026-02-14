import React from 'react'
export default function Footer() {
return (
<footer className="bg-light py-4 mt-5">
<div className="container text-center">
<p className="mb-1">© {new Date().getFullYear()} Beauty Salon</p>
<small className="text-muted">123 Main St — (555) 123-4567 — info@beautysalon.com</small>
</div>
</footer>
)
}