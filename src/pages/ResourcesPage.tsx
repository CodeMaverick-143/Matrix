import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import resourcesData from '../data/resources.json'

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('documentation')
  const [resources, setResources] = useState<any>(null)

  useEffect(() => {
    setResources(resourcesData)
  }, [])

  if (!resources) {
    return <div className="loading">Loading resources...</div>
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'documentation':
        return (
          <div className="resources-grid">
            {resources.documentation.map((item: any) => (
              <div key={item.id} className="resource-card">
                <div className="resource-header">
                  <span className="resource-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <span className="resource-type">{item.type}</span>
                </div>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                  View Document
                </a>
              </div>
            ))}
          </div>
        )
      case 'tools':
        return (
          <div className="resources-grid">
            {resources.tools.map((item: any) => (
              <div key={item.id} className="resource-card">
                <div className="resource-header">
                  <span className="resource-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <span className="resource-type">{item.type}</span>
                </div>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                  Access Tool
                </a>
              </div>
            ))}
          </div>
        )
      case 'roadmaps':
        return (
          <div className="resources-grid">
            {resources.roadmaps.map((item: any) => (
              <div key={item.id} className="resource-card">
                <div className="resource-header">
                  <span className="resource-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <span className="resource-type">{item.type}</span>
                </div>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                  View Roadmap
                </a>
              </div>
            ))}
          </div>
        )
      case 'events':
        return (
          <div className="resources-grid">
            {resources.events.map((item: any) => (
              <div key={item.id} className="resource-card event-card">
                <div className="resource-header">
                  <span className="resource-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <span className="event-date">{item.date}</span>
                </div>
                <p>{item.description}</p>
                <p className="event-location">
                  <span className="location-icon">📍</span> {item.location}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                  Event Details
                </a>
              </div>
            ))}
          </div>
        )
      case 'torflow':
        return (
          <div className="torflow-container">
            <div className="terminal">
              {resources.torflow.steps.map((step: string, index: number) => (
                <p key={index}>$ {step}</p>
              ))}
              <p>$ <span className="blink">_</span></p>
            </div>
            <div className="iframe-container">
              <iframe 
                src={resources.torflow.link} 
                title="TorFlow Visualization" 
                className="torflow-iframe"
              ></iframe>
            </div>
            <div className="tool-description">
              <h3>About TorFlow</h3>
              <p>{resources.torflow.description}</p>
              <a 
                href={resources.torflow.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn"
              >
                Open in New Window
              </a>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Resources</h1>
        <p className="page-subtitle">Cybersecurity tools, documentation, and learning materials</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'documentation' ? 'active' : ''}`}
          onClick={() => setActiveTab('documentation')}
        >
          Documentation
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
        <button 
          className={`tab-btn ${activeTab === 'roadmaps' ? 'active' : ''}`}
          onClick={() => setActiveTab('roadmaps')}
        >
          Learning Paths
        </button>
        <button 
          className={`tab-btn ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button 
          className={`tab-btn ${activeTab === 'torflow' ? 'active' : ''}`}
          onClick={() => setActiveTab('torflow')}
        >
          TorFlow
        </button>
      </div>

      <div className="tab-content">
        {renderTabContent()}
      </div>

      <div className="cta-container">
        <h3>Need Custom Resources?</h3>
        <p>
          Our team can develop specialized security resources tailored to your organization's needs.
          Contact us to discuss custom training, tools, or documentation.
        </p>
        <Link to="/contact" className="btn">Contact Us</Link>
      </div>

      <style jsx>{`
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .tab-btn {
          background-color: transparent;
          border: 1px solid var(--primary);
          color: var(--text);
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tab-btn:hover, .tab-btn.active {
          background-color: var(--primary);
          color: var(--darker);
        }
        
        .tab-content {
          margin-bottom: 3rem;
        }
        
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .resource-card {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
        }
        
        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px dashed var(--primary);
          padding-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        
        .resource-header h3 {
          color: var(--primary);
          margin: 0;
          flex: 1;
        }
        
        .resource-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        .resource-type, .event-date {
          background-color: rgba(0, 255, 0, 0.1);
          color: var(--primary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .event-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .location-icon {
          color: var(--primary);
        }
        
        .cta-container {
          text-align: center;
          margin-top: 3rem;
          padding: 2rem;
          background-color: var(--darker);
          border: 1px solid var(--primary);
        }
        
        .cta-container h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .cta-container p {
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .torflow-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .iframe-container {
          position: relative;
          overflow: hidden;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          border: 1px solid var(--primary);
          background-color: #000;
        }
        
        .torflow-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        
        .tool-description {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 1.5rem;
        }
        
        .tool-description h3 {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
          .tabs {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .tab-btn {
            width: 100%;
            text-align: left;
          }
          
          .resource-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ResourcesPage 