import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyResume from './pages/MyResume';
import MyPortfolio from './pages/MyPortfolio';
import ContactMe from './pages/ContactMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavigationMenu />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<MyResume />} />
          <Route path="/portfolio" element={<MyPortfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;