import { useState, useEffect } from 'react'
import aboutData from '../data/about.json'

const AboutPage = () => {
  const [about, setAbout] = useState<any>(null)

  useEffect(() => {
    setAbout(aboutData)
  }, [])

  if (!about) return <div className="loading">Loading...</div>

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About CyberGuard</h1>
        <p className="page-subtitle">Our mission, vision, and the team behind the technology</p>
      </div>

      <div className="about-section">
        <div className="terminal about-terminal">
          <p>$ cat mission.txt</p>
          <p className="terminal-output">{about.mission}</p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="about-text">{about.vision}</p>
      </div>

      <div className="about-section">
        <h2 className="section-title">Our History</h2>
        <p className="about-text">{about.history}</p>
      </div>

      <div className="about-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {about.values.map((value: any, index: number) => (
            <div key={index} className="value-card">
              <h3 className="value-title">{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">Our Team</h2>
        <div className="team-grid">
          {about.team.map((member: any, index: number) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                <div className="avatar-placeholder">{member.name.charAt(0)}</div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
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
        
        .about-section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          color: var(--primary);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--primary);
          padding-bottom: 0.5rem;
        }
        
        .about-text {
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .about-terminal {
          margin-bottom: 2rem;
        }
        
        .terminal-output {
          color: var(--text);
          line-height: 1.6;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .value-card {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 1.5rem;
        }
        
        .value-title {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .team-card {
          background-color: var(--darker);
          border: 1px solid var(--primary);
          padding: 1.5rem;
          text-align: center;
        }
        
        .team-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          overflow: hidden;
          border: 2px solid var(--primary);
        }
        
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 255, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: var(--primary);
        }
        
        .team-name {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .team-role {
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
          margin-bottom: 1rem;
        }
        
        .team-bio {
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  )
}

export default AboutPage 