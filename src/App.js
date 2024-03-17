// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import SideBar from "./SideBar";
import Certificates from "./Certificates";
import More from "./More";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="main-content">
          <Header />
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/more" element={<More />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
