import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
return (
<div>
    <div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">Welcome to Beauty Salon</h1>
    <p className="col-md-8 fs-5">Relax. Refresh. Renew. Book your appointment online or call us today.</p>
    <Link to="/services" className="btn btn-primary btn-lg">View Services</Link>
    </div>
    </div>
</div>
)
}