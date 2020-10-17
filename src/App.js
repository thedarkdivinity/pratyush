import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import MainArea from './MainArea';
import Carousel from './Carousel';


function App() {
  return (
    <div >
     
     
    <Navbar/>
   
   <Carousel/>
    

    </div>
  );
}

export default App;
