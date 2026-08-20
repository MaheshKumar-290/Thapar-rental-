import './RentalCard.css'

/*
  RentalCard component - A reusable card to display a rental item.
  
  KEY REACT CONCEPT: Props
  
  Props are how you pass data from a parent component to a child component.
  They're like function parameters.
  
  Instead of hardcoding the item details, we receive them through props:
  - rental (an object with id, title, category, price, location)
  
  In the parent component (FeaturedRentals.jsx), we'll use this component
  like: <RentalCard rental={rentalObject} />
  
  Then we access the props in this component using: props.rental
*/
function RentalCard({ rental }) {
  return (
    <div className="rental-card">
      {/* Image placeholder */}
      <div className="card-image">
        <img src="https://via.placeholder.com/250x200?text=Item+Image" alt={rental.title} />
      </div>

      {/* Card content */}
      <div className="card-content">
        <div className="card-category">{rental.category}</div>
        <h3>{rental.title}</h3>
        <p className="card-location">📍 {rental.location}</p>

        {/* Price and action */}
        <div className="card-footer">
          <div className="price">₹{rental.price}/day</div>
          <button className="view-button">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default RentalCard
