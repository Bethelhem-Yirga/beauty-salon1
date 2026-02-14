import React from 'react'
import staff from '../data/staff'
export default function Staff() {
return (
<div>
<h2>Meet the Team</h2>
<div className="row">
{staff.map(member => (
<div key={member.id} className="col-md-6 col-lg-4 mb-4">
<div className="card h-100">
<img src={member.photo} className="card-img-top" alt={member.name} style={{height:220, objectFit:'cover'}} />
<div className="card-body">
<h5 className="card-title">{member.name}</h5>
<p className="text-muted">{member.role}</p>
<p className="card-text">{member.bio}</p>
<button className="btn btn-outline-primary btn-sm">View Availability</button>
</div>
</div>
</div>
))}
</div>
</div>
)
}