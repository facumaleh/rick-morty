import React, { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 
  return (
    <div className="App">
       <Header />
       <Container/>
       <Footer/>
    </div>
  );
}

export default App;
