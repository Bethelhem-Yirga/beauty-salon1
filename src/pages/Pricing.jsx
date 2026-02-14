import React from 'react'
import services from '../data/services'
export default function Pricing() {
return (
<div>
<h2>Pricing</h2>
<div className="list-group">
{services.map(s => (
<div key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
<div>
<div className="h5 mb-1">{s.name}</div>
<small className="text-muted">{s.description}</small>
</div>
<div>
<strong>${s.price}</strong>
</div>
</div>
))}
</div>
</div>
)
}

