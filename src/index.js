import React from 'react';
import './pages/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mouse from "./pages/mouse.js";
import Home from "./pages/Home.js";
import NoPage from "./pages/NoPage.js"
import Bear from "./pages/bear.js"
import Skunk from "./pages/skunk.js"


export default function App() {
  return (
    <BrowserRouter>
    <nav class="topnav">
        <Link class="topnav" to="/">bunny</Link>
        <Link class="topnav" to="/mouse">mouse</Link>
        <Link class="topnav" to="/bear">bear</Link>
        <Link class="topnav" to="/skunk">skunk</Link>
      </nav>
     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/mouse" element={<Mouse />} />
      <Route path="/bear" element={<Bear />} />
      <Route path="/skunk" element={<Skunk />} />
      <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
