import './Categories.css'

/*
  Categories component - Shows different rental categories.
  
  KEY REACT CONCEPT: .map()
  
  Below we have an array of category objects.
  We use .map() to loop through each category and create
  a <div> for each one. This is how you render lists in React.
  
  Syntax: array.map((item) => {
    // return JSX for each item
  })
  
  .map() returns a new array of React elements.
*/
function Categories() {
  // This is our hardcoded data
  // In a real app, this would come from an API or database
  const categories = [
    { id: 1, name: 'Books', icon: '📚' },
    { id: 2, name: 'Electronics', icon: '💻' },
    { id: 3, name: 'Cycles', icon: '🚴' },
    { id: 4, name: 'Sports', icon: '⚽' },
    { id: 5, name: 'Hostel Essentials', icon: '🛏️' },
    { id: 6, name: 'Other', icon: '📦' },
  ]

  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2>Browse by Category</h2>
        <p>Find what you need in seconds</p>

        {/* 
          .map() transforms the categories array into JSX.
          Each category becomes a clickable card.
          The 'key' prop helps React identify which items have changed.
        */}
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
