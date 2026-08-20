import './Hero.css'

/*
  Hero component - The main banner section with the main message.
  
  This section introduces the platform and includes:
  - Main headline
  - Supporting text
  - Search bar
  - Call-to-action buttons
*/
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Rent what you need. Share what you have.</h2>
        <p>
          Discover, rent, and share useful items within the Thapar student community.
          Quick. Safe. Affordable.
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for items, categories, or locations..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button className="btn btn-primary">Browse Rentals</button>
          <button className="btn btn-secondary">List an Item</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
