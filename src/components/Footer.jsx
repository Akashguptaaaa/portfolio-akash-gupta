function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Akash Ashok Gupta</h3>
          <p>Laravel Developer | Backend Engineer</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://linkedin.com/in/akashgupta95" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:akashagupta95.ag@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Akash Ashok Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
