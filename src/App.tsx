import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Use Link from react-router-dom
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

// Navigation Button with hex hover effect
const HoverButton: React.FC<{ text: string; to: string }> = ({ text, to }) => {
  const [displayText, setDisplayText] = useState(text);

  // Function to convert text to hex
  const toHex = (str: string) => {
    return Array.from(str)
      .map((char) => char.charCodeAt(0).toString(16))
      .join('');
  };

  // Handle mouse enter (convert text to hex)
  const handleMouseEnter = () => {
    setDisplayText(toHex(text));
  };

  // Handle mouse leave (restore original text)
  const handleMouseLeave = () => {
    setDisplayText(text);
  };

  return (
    <Link
      to={to} // Use Link to navigate
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </Link>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Cyber Portfolio</h1>
        </header>
        
        {/* Navigation under the header */}
        <nav className="navigation">
          <ul>
            <li><HoverButton text="Home" to="/" /></li>
            <li><HoverButton text="Projects" to="/projects" /></li>
            <li><HoverButton text="Resume" to="/resume" /></li>
          </ul>
        </nav>

        <div className="main-content">
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>

        <footer className="footer">
          <p>&copy; 2024 Cyber Portfolio</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;








