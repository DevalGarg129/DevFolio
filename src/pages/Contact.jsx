import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-wrapper">
      <div className="container section">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p className="section-subtitle">// contact_me.send()</p>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
              Drop me a message and I'll get back to you soon!
            </p>

            <div className="contact-links">
              <a href="mailto:devalgarg129@gmail.com" className="contact-link">
                <span className="contact-link-icon">✉️</span>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-val">devalgarg129@gmail.com</div>
                </div>
              </a>
              <a href="https://github.com/DevalGarg129" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">🐙</span>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-val">github.com/DevalGarg129</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/devalgarg" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">💼</span>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-val">linkedin.com/in/devalgarg</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap card">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({...f, name: e.target.value}))}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({...f, email: e.target.value}))}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Say something nice..."
                    value={form.message}
                    onChange={e => setForm(f => ({...f, message: e.target.value}))}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
