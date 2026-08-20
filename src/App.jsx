import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedRentals from './components/FeaturedRentals'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import './App.css'

/*
  App.jsx is the main component that brings together all
  the different sections of the homepage.
  
  In React, components are just JavaScript functions that return JSX.
  JSX looks like HTML but is actually JavaScript.
*/
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedRentals />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default App
