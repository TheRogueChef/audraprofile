import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import AboutMe from './components/AboutMe';
import Main from './views/Main';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import MapPage from './components/MapPage';

function App() {


  return (
    <div className="App">
      <Router>
        <LoadScript>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/' element={<Main/>}default/>
            <Route path='/AboutMe' element={<AboutMe/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/MapPage' element={<MapPage/>} />
          </Routes>
        </LoadScript>
      </Router>
    </div>
  );
}

export default App;
