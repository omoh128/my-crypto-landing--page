import React from 'react'

const Main = () => {
  return (
    <main>
      
        <section className="featured-section">
          <h3>Featured Cryptocurrencies</h3>
          <div className="featured-cryptos">
            <div className="crypto-card">
              <img src="https://via.placeholder.com/150" alt="Bitcoin" />
              <h4>Bitcoin</h4>
              <p>$50,000</p>
            </div>
            <div className="crypto-card">
              <img src="https://via.placeholder.com/150" alt="Ethereum" />
              <h4>Ethereum</h4>
              <p>$2,000</p>
            </div>
            <div className="crypto-card">
              <img src="https://via.placeholder.com/150" alt="Dogecoin" />
              <h4>Dogecoin</h4>
              <p>$0.05</p>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Main