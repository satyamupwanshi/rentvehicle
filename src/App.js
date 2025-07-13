import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import About from './pages/About' ;
import Home from './pages/Home'
import Navbar from './pages/Navbar';

const App = () => {

        return (
          <>
        
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              
              <Route path="/about" element={<About/>}/>
            </Routes>
          </Router>
          </>
        )
      }

export default App ;
