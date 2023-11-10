import React from 'react'

import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contacts';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorsDetails';

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return ( <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/doctors" element={<Doctors />}/>
      <Route path="doctors/:id" element={<DoctorsDetails/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Routers
