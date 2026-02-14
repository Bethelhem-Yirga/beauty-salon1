import React from 'react'
import services from '../data/services'
export default function Services() {
return (
<div >
<h2>Services</h2>
<div className="row">
{services.map(s => (
<div key={s.id} className="col-md-6 col-lg-4 mb-4">
<div className="card h-100">
<div className="card-body d-flex flex-column surface card-compact">
<h5 className="card-title">{s.name}</h5>
<p className="card-text">{s.description}</p>
<div className="mt-auto">
<strong>${s.price}</strong> • {s.duration} min
<button className="btn btn-outline-primary btn-sm float-end">Book</button>
</div>
</div>
</div>
</div>
))}
</div>
</div>
)
}