import { useState, useEffect } from 'react'

const TerminalEffect = () => {
  const [text, setText] = useState('')
  const fullText = `
> Initializing CyberGuard system...
> Checking security protocols...
> Loading encryption modules...
> Establishing secure connection...
> Scanning for vulnerabilities...
> System ready. Welcome to CyberGuard.
  `.trim()
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="loading-container">
      <div className="terminal loading-terminal">
        <pre>{text}<span className="blink">_</span></pre>
        
        <style jsx>{`
          .loading-terminal {
            width: 80%;
            max-width: 600px;
            height: 300px;
            overflow: auto;
            padding: 1.5rem;
            font-size: 1.1rem;
            line-height: 1.6;
          }
          
          pre {
            margin: 0;
            white-space: pre-wrap;
          }
        `}</style>
      </div>
    </div>
  )
}

export default TerminalEffect 