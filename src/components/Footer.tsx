import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Matrix</h3>
          <p>Advanced cybersecurity tools and resources for the modern digital landscape.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/resources">Documentation</Link></li>
            <li><Link to="/resources">Learning Paths</Link></li>
            <li><Link to="/resources">Tools</Link></li>
            <li><Link to="/resources">Events</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Discord</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Matrix. All rights reserved.</p>
        <p>
          <span className="terminal-text">
            $ stay_secure<span className="blink">_</span>
          </span>
        </p>
      </div>
      
      <style jsx>{`
        .footer {
          margin-top: 4rem;
          border-top: 1px solid var(--primary);
          padding: 3rem 0 1rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: var(--text);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section a:hover {
          color: var(--primary);
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: inline-block;
          padding: 0.5rem 1rem;
          border: 1px solid var(--primary);
          color: var(--primary) !important;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          background-color: var(--primary);
          color: var(--darker) !important;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed rgba(0, 255, 0, 0.3);
          padding-top: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .terminal-text {
          font-family: 'Courier New', monospace;
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer 