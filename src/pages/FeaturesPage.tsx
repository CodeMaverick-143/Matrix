import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import featuresData from '../data/features.json'

const FeaturesPage = () => {
  const [features, setFeatures] = useState([])
  const [selectedFeature, setSelectedFeature] = useState(null)

  useEffect(() => {
    setFeatures(featuresData)
    if (featuresData.length > 0) {
      setSelectedFeature(featuresData[0])
    }
  }, [])

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Security Features</h1>
        <p className="page-subtitle">Comprehensive cybersecurity solutions for modern threats</p>
      </div>

      <div className="features-container">
        <div className="features-sidebar">
          <ul className="features-list">
            {features.map((feature) => (
              <li 
                key={feature.id} 
                className={`feature-item ${selectedFeature && selectedFeature.id === feature.id ? 'active' : ''}`}
                onClick={() => setSelectedFeature(feature)}
              >
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-name">{feature.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="feature-details">
          {selectedFeature ? (
            <>
              <div className="feature-header">
                <span className="feature-icon large">{selectedFeature.icon}</span>
                <h2 className="feature-title">{selectedFeature.title}</h2>
              </div>
              <p className="feature-description">{selectedFeature.description}</p>
              <div className="terminal feature-terminal">
                <p>$ feature_info --name="{selectedFeature.title}"</p>
                <p>$ loading details...</p>
                <p>$ {selectedFeature.details}</p>
              </div>
            </>
          ) : (
            <div className="terminal">
              <p>$ select a feature to view details...</p>
              <p>$ <span className="blink">_</span></p>
            </div>
          )}
        </div>
      </div>

      <div className="cta-container">
        <h3>Ready to enhance your security posture?</h3>
        <Link to="/contact" className="btn">Get Started</Link>
      </div>

      <style jsx>{`
        .page-container {
          padding: 2rem 0;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .page-title {
          color: var(--primary);
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .page-subtitle {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .features-sidebar {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 1rem;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
        }
        
        .feature-item {
          padding: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px dashed rgba(0, 255, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .feature-item:hover {
          background-color: rgba(0, 255, 0, 0.1);
        }
        
        .feature-item.active {
          background-color: rgba(0, 255, 0, 0.2);
          border-left: 3px solid var(--primary);
        }
        
        .feature-icon {
          font-size: 1.5rem;
        }
        
        .feature-icon.large {
          font-size: 3rem;
          margin-right: 1rem;
        }
        
        .feature-details {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 2rem;
        }
        
        .feature-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .feature-title {
          color: var(--primary);
          font-size: 2rem;
          margin: 0;
        }
        
        .feature-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .feature-terminal {
          margin-top: 2rem;
        }
        
        .cta-container {
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          background-color: var(--darker);
          border: 1px solid var(--primary);
        }
        
        .cta-container h3 {
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .features-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default FeaturesPage 