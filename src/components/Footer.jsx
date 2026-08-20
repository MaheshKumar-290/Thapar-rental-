import './Footer.css'

/*
  Footer component - The bottom section with links and info.
  
  This is a simple, presentational component.
  It doesn't use props or complex logic - just displays static content.
*/
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand and Description */}
        <div className="footer-section">
          <h3>🏠 ThaparRent</h3>
          <p>
            A trusted campus rental platform helping Thapar students
            discover, rent, and share resources easily and safely.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#browse">Browse</a>
            </li>
            <li>
              <a href="#list">List an Item</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <p>Email: support@thaparrent.com</p>
          <p>Campus: Thapar University, Patiala</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 ThaparRent. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
