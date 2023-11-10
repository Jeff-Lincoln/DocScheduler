import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Router from  '../routes/Routers';


const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default Layout;
