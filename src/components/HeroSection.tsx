import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Secure Your Digital Fortress
          <span className="blink">_</span>
        </h1>
        <p className="hero-subtitle">
          Advanced cybersecurity tools and resources for ethical hackers, security professionals, and enthusiasts
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn">Get Started</Link>
          <Link to="/resources" className="btn btn-outline">Learn More</Link>
        </div>
      </div>
      <div className="terminal">
        <p>$ initiating security scan...</p>
        <p>$ checking for vulnerabilities...</p>
        <p>$ scanning network traffic...</p>
        <p>$ analyzing potential threats...</p>
        <p>$ <span className="blink">_</span></p>
      </div>
      
      <style jsx>{`
        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding: 4rem 0;
          min-height: 80vh;
          align-items: center;
        }
        
        .hero-title {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 500px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .btn-outline {
          background-color: transparent;
          color: var(--text);
          border: 1px solid var(--text);
        }
        
        .btn-outline:hover {
          background-color: var(--text);
          color: var(--darker);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection 