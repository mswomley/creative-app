import React from 'react';
import './pages/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Art from "./pages/Art.js";
import Home from "./pages/Home.js";
import NoPage from "./pages/NoPage.js"


export default function App() {
  return (
    <BrowserRouter>
    <nav class="topnav">
        <Link class="topnav" to="/">Home</Link>
        <Link class="topnav" to="/Art">Art</Link>
      </nav>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/art" element={<Art />} />
      <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
