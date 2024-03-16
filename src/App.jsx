import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
