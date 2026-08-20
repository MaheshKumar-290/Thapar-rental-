import RentalCard from './RentalCard'
import './FeaturedRentals.css'

/*
  FeaturedRentals component - Shows featured rental items.
  
  This component demonstrates:
  1. Creating an array of data objects
  2. Using .map() to render a list
  3. Passing data to child components through props
  
  We have hardcoded rental data and pass each rental
  to the RentalCard component.
*/
function FeaturedRentals() {
  // Hardcoded rental data
  const rentals = [
    {
      id: 1,
      title: 'Casio Scientific Calculator',
      category: 'Electronics',
      price: 30,
      location: 'Patel Hall',
    },
    {
      id: 2,
      title: 'Mountain Bike - Trek X-Caliber',
      category: 'Cycles',
      price: 50,
      location: 'Main Gate',
    },
    {
      id: 3,
      title: 'Organic Chemistry Textbook',
      category: 'Books',
      price: 20,
      location: 'Library Annex',
    },
    {
      id: 4,
      title: 'Badminton Racket Set',
      category: 'Sports',
      price: 35,
      location: 'Sports Complex',
    },
    {
      id: 5,
      title: 'Microwave Oven',
      category: 'Hostel Essentials',
      price: 60,
      location: 'Hostel A',
    },
    {
      id: 6,
      title: 'Portable Study Lamp',
      category: 'Electronics',
      price: 25,
      location: 'South Campus',
    },
  ]

  return (
    <section className="featured-rentals-section">
      <div className="featured-rentals-container">
        <h2>Featured Rentals</h2>
        <p>Popular items trending on campus right now</p>

        {/* 
          Using .map() to render each rental.
          Each rental is passed to RentalCard as a prop.
          
          The syntax: rentals.map((rental) => ...)
          means: for each rental object in the array,
          create and return a <RentalCard /> component.
        */}
        <div className="rentals-grid">
          {rentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedRentals
