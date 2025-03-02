import { useState, useEffect } from 'react'
import toolsData from '../data/tools.json'

const ToolsPage = () => {
  const [tools, setTools] = useState<any[]>([])
  const [selectedTool, setSelectedTool] = useState<any>(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    setTools(toolsData)
    if (toolsData.length > 0) {
      setSelectedTool(toolsData[0])
    }
  }, [])

  const categories = ['All', ...new Set(toolsData.map(tool => tool.category))]

  const filteredTools = filter === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === filter)

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Security Tools</h1>
        <p className="page-subtitle">Professional-grade cybersecurity tools for every security need</p>
      </div>

      <div className="tools-filter">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="tools-grid">
        {filteredTools.map((tool) => (
          <div 
            key={tool.id} 
            className={`tool-card ${selectedTool && selectedTool.id === tool.id ? 'active' : ''}`}
            onClick={() => setSelectedTool(tool)}
          >
            <div className="tool-header">
              <h3>{tool.name}</h3>
              <span className="tool-category">{tool.category}</span>
            </div>
            <p>{tool.description}</p>
            <button className="btn btn-sm">View Details</button>
          </div>
        ))}
      </div>

      {selectedTool && (
        <div className="tool-details">
          <div className="tool-details-header">
            <h2>{selectedTool.name}</h2>
            <span className="tool-category large">{selectedTool.category}</span>
          </div>
          
          <div className="terminal">
            <p>$ tool_info --name="{selectedTool.name}"</p>
            <p>$ {selectedTool.details}</p>
            <p>$ list_features</p>
            <ul className="feature-list">
              {selectedTool.features.map((feature: string, index: number) => (
                <li key={index}>- {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="tool-actions">
            <button className="btn">Download Demo</button>
            <button className="btn btn-outline">Documentation</button>
          </div>
        </div>
      )}

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
        
        .tools-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          justify-content: center;
        }
        
        .filter-btn {
          background-color: transparent;
          border: 1px solid var(--primary);
          color: var(--text);
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover, .filter-btn.active {
          background-color: var(--primary);
          color: var(--darker);
        }
        
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .tool-card {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .tool-card:hover, .tool-card.active {
          transform: translateY(-5px);
          box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
        }
        
        .tool-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          border-bottom: 1px dashed var(--primary);
          padding-bottom: 0.5rem;
        }
        
        .tool-header h3 {
          color: var(--primary);
          margin: 0;
        }
        
        .tool-category {
          background-color: rgba(0, 255, 0, 0.1);
          color: var(--primary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .tool-category.large {
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          margin-top: 1rem;
        }
        
        .tool-details {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 2rem;
          margin-top: 2rem;
        }
        
        .tool-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--primary);
          padding-bottom: 1rem;
        }
        
        .tool-details-header h2 {
          color: var(--primary);
          margin: 0;
        }
        
        .feature-list {
          list-style: none;
          padding-left: 1rem;
        }
        
        .feature-list li {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        
        .tool-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
          .tool-details-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .tool-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default ToolsPage