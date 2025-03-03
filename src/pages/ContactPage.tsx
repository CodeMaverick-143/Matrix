import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Get in touch with our cybersecurity experts</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="terminal">
            <p>$ contact_info</p>
            <p>Email: *********@gmail.com</p>
            <p>Phone: +** **********</p>
            <p>Location: Nst,Pune,India</p>
            <p>Hours: Monday-Friday, 9am-6pm </p>
            <p>$ <span className="blink">_</span></p>
          </div>
          
          <div className="contact-methods">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. Our team will get back to you shortly.</p>
              <button className="btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
            </div>
          ) : (
            <form
              action="https://formbase.dev/s/74OPa5RhV74Zk1l"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .page-container {
          padding: 2rem 0;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .page-title {
          color: var(--primary);
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .page-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-methods h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: inline-block;
          padding: 0.5rem 1rem;
          border: 1px solid var(--primary);
          color: var(--primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background-color: var(--primary);
          color: var(--darker);
        }
        
        .contact-form-container {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 2rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-group label {
          color: var(--primary);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--primary);
          color: var(--text);
          font-family: 'Courier New', monospace;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          box-shadow: 0 0 5px var(--primary);
        }
        
        .success-message {
          text-align: center;
          padding: 2rem;
        }
        
        .success-icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .success-message h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .success-message p {
          margin-bottom: 2rem;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactPage
