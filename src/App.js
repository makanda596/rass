import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Gallery from './Pages/Gallery.jsx'; // Example of another page component
import Services from './Pages/Services.jsx'; // Example of another page component
import Contact from './Pages/Contact.jsx'; // Example of another page component
import Footer from './Components/Footer.jsx'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
