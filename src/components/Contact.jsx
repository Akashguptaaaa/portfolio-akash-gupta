import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:akashagupta95.ag@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="card contact-section">
      <h2>Get In Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <strong>Email:</strong>
            <a href="mailto:akashagupta95.ag@gmail.com">akashagupta95.ag@gmail.com</a>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <span>+91 9167030544</span>
          </div>
          <div className="info-item">
            <strong>Location:</strong>
            <span>Mumbai, India</span>
          </div>
          <div className="info-item">
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/akashgupta95" target="_blank" rel="noreferrer">
              linkedin.com/in/akashgupta95
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
