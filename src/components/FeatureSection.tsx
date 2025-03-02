const FeatureSection = () => {
  const features = [
    {
      title: "Network Security",
      description: "Advanced tools for monitoring and securing network infrastructure against unauthorized access and data breaches.",
      icon: "🔒"
    },
    {
      title: "Penetration Testing",
      description: "Comprehensive suite of ethical hacking tools to identify and address security vulnerabilities.",
      icon: "🛡️"
    },
    {
      title: "Threat Intelligence",
      description: "Real-time monitoring and analysis of emerging cyber threats and attack vectors.",
      icon: "🔍"
    },
    {
      title: "Security Training",
      description: "Interactive learning resources to develop cybersecurity skills and stay ahead of attackers.",
      icon: "📚"
    }
  ]

  return (
    <section id="features" className="section">
      <h2 className="section-title">Features</h2>
      <div className="grid">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="card-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  )
}

export default FeatureSection 