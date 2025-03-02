import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span className="logo-text">Matrix</span>
          <span className="blink">_</span>
        </Link>
      </div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'x' : '≡'}
      </button>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link></li>
          <li><Link to="/tools" onClick={() => setMenuOpen(false)}>Tools</Link></li>
          <li><Link to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="contact-btn">Contact</Link></li>
        </ul>
      </nav>
      
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--primary);
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: var(--primary);
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-list a {
          color: var(--text);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .nav-list a:hover {
          color: var(--primary);
        }
        
        .contact-btn {
          display: inline-block;
          background-color: transparent;
          color: var(--primary) !important;
          border: 1px solid var(--primary);
          padding: 0.5rem 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .contact-btn:hover {
          background-color: var(--primary);
          color: var(--darker) !important;
          box-shadow: 0 0 15px var(--primary);
        }
        
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--primary);
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }
          
          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: var(--darker);
            transition: right 0.3s ease;
            z-index: 100;
            padding: 2rem;
          }
          
          .nav.open {
            right: 0;
          }
          
          .nav-list {
            flex-direction: column;
            padding-top: 3rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header 