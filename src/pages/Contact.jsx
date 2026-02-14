import React, { useState } from 'react'
export default function Contact() {
const [form, setForm] = useState({ name:'', email:'', message:'' })
const [sent, setSent] = useState(false)

function handleChange(e) {
setForm(prev => ({...prev, [e.target.name]: e.target.value}))
}
function handleSubmit(e) {
e.preventDefault()
// TODO: send to backend or email service
console.log('contact form', form)
setSent(true)
}

return (
<div>
<h2>Contact</h2>
{sent ? <div className="alert alert-success">Thanks — we will get back to you shortly.</div> : (
<form onSubmit={handleSubmit} className="row g-3">
<div className="col-md-6">
<label className="form-label">Name</label>
<input name="name" value={form.name} onChange={handleChange} className="form-control" required />
</div>
<div className="col-md-6">
<label className="form-label">Email</label>
<input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
</div>
<div className="col-12">
<label className="form-label">Message</label>
<textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required />
</div>
<div className="col-12">
<button className="btn btn-primary" type="submit">Send Message</button>
</div>
</form>
)}
</div>
)
}

