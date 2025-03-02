const ToolsSection = () => {
  const tools = [
    {
      name: "Network Scanner",
      description: "Discover and map devices on your network, identify open ports and potential vulnerabilities.",
      category: "Reconnaissance"
    },
    {
      name: "Password Cracker",
      description: "Test password strength and recover lost passwords using advanced algorithms.",
      category: "Access"
    },
    {
      name: "Traffic Analyzer",
      description: "Monitor and inspect network traffic to detect suspicious activities and data exfiltration.",
      category: "Monitoring"
    },
    {
      name: "Exploit Framework",
      description: "Comprehensive platform for testing security vulnerabilities in controlled environments.",
      category: "Penetration Testing"
    },
    {
      name: "Encryption Tool",
      description: "Secure your sensitive data with military-grade encryption algorithms.",
      category: "Defense"
    },
    {
      name: "Forensic Analyzer",
      description: "Recover and analyze digital evidence for security incident investigations.",
      category: "Investigation"
    }
  ]

  return (
    <section id="tools" className="section">
      <h2 className="section-title">Security Tools</h2>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <div className="tool-header">
              <h3>{tool.name}</h3>
              <span className="tool-category">{tool.category}</span>
            </div>
            <p>{tool.description}</p>
            <button className="btn btn-sm">Learn More</button>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .tools-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .tool-card {
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--primary);
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .tool-card:hover {
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
        
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          margin-top: 1rem;
        }
      `}</style>
    </section>
  )
}

export default ToolsSection 