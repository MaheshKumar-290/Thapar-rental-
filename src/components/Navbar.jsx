import './Navbar.css'

/*
  Navbar component - The top navigation bar of the website.
  
  This is a functional component (a regular JavaScript function)
  that returns JSX (which looks like HTML).
  
  It doesn't use props yet, but later we could pass data like
  user info or active page through props.
*/
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <span className="logo">🏠</span>
          <h1>ThaparRent</h1>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#browse">Browse</a>
          <a href="#list">List an Item</a>
          <a href="#login">Login</a>
        </div>

        {/* CTA Button */}
        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  )
}

export default Navbar
