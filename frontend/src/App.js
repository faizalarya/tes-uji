import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import LandingPage from './landingpage';

import Login from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardAdmin from './dashboard_admin';
import TambahMobil from './tambahmobil';
import Logout from './logout';
import Rental from './rental';
import ListRent from './listrent';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardAdmin />} />
        <Route path='/dashboard/tambahmobil' element={<TambahMobil />} />
        <Route path='/dashboard/logout' element={<Logout />} />
        <Route path='/rental/:id' element={<Rental />} />
        <Route path='/dashboard/listrent' element={<ListRent />} />
       
      </Routes>
    </Router>
    
  );
}

export default App;
