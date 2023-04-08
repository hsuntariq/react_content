import File from './router/Nav'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './router/Home';
import About from './router/About';
import Contact from './router/Contact';
function App() {
  return (
    <>
      <Router>
    <File/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
