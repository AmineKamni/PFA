import React from 'react'
import "./style.css"
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (

    <div className="container mt-5">
      <div className="label"><h2 >Contact</h2></div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="Message">
            <div className="mb-3">
            <label className="form-label" htmlFor="message">
                Message
            </label>
            <textarea className="form-control" id="message" required />
            </div>
        </div>
        <div className="Button">
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
        </div>
      </form>
    </div>

  )
}
export default ContactForm