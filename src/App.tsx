import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import PersonalDetails from './components/PersonalDetails';
import StartStop from './pages/Start-Stop';
import GiftStore from './components/GiftStore';

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="PersonalDetails" element={<PersonalDetails/>} />
        <Route path="hit" element={<StartStop />} />
        <Route path="gift" element={<GiftStore />} />
      </Routes>
      <Navbar />
      </div>
    </Router>
  );
};

export default App;