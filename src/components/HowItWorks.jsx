import './HowItWorks.css'

/*
  HowItWorks component - Shows the three-step process.
  
  This demonstrates the same .map() pattern as Categories:
  - Create an array of steps
  - Use .map() to render each step
*/
function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Find an Item',
      description: 'Browse thousands of items available for rent on our platform.',
      icon: '🔍',
    },
    {
      id: 2,
      number: '2',
      title: 'Request a Rental',
      description: 'Select your item, pick dates, and send a rental request to the owner.',
      icon: '📝',
    },
    {
      id: 3,
      number: '3',
      title: 'Meet and Use',
      description: 'Meet on campus, collect the item, and start using it immediately.',
      icon: '🤝',
    },
  ]

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <h2>How It Works</h2>
        <p>Three simple steps to get what you need</p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
