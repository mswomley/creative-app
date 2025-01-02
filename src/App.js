import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link} from "react-router-dom";
import Home from "./Home"
import Projects from "./Projects"

function App () {
  return (
<Router>
      <nav class="topnav">
        <Link class="topnav" to="/">Home</Link>
        <Link class="topnav" to="/projects">Projects</Link>
      </nav>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
  </Routes>
  <footer className="contact">
      <hr></hr>
      CONTACT<br></br>
      maggieswomley18@gmail.com<br></br>
      860-921-8824<br></br>
      <a href="https://www.linkedin.com/in/maggie-s-5427491a2/"><button className="button" >LinkedIn</button></a><br></br>
      <a href="https://github.com/mswomley"><button className="button" >Github</button></a>
      </footer>
</Router>
  )
}

export default App;
