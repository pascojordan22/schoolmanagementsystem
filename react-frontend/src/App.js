import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
              <div className="container">
                <Routes> 
                <Route path="/" element = {<ListStudentComponent/>}/>
                <Route path="/students" element = {<ListStudentComponent/>}/>
                </Routes>
              </div>
            <FooterComponent />
            </Router>
           </div>

  );
}

export default App;
