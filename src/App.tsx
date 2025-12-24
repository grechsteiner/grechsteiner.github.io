import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';

import './App.css'

export default function App() {
  return (
    <Router basename="/grechsteiner.github.io/">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
}
