import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import ToolsPage from './pages/ToolsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ResourcesPage from './pages/ResourcesPage'
import Footer from './components/Footer'
import TerminalEffect from './components/TerminalEffect'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <TerminalEffect />
  }

  return (
    <Router>
      <div className="cyber-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
