import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import  Projects  from './pages/Projects';
const Home = React.lazy(() => import(`./pages/Home`))
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Suspense } from 'react';
import Scene3D from './components/Scene3D';
import NextStateHomepage from './pages/NextStateHome';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Suspense fallback={<h1>loading</h1>}>
          <Routes>
            <Route path="/2" element={<Home />} />
            <Route path="/" element={<NextStateHomepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;