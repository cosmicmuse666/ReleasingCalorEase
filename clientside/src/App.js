import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Track from './pages/Track';
import Nav1 from './inc/Nav1';
import Selectpage from './pages/Selectpage';
import Container from "react-bootstrap/Container";
import Update from './pages/Update';


import Contact from './pages/Contact';

function App(){


  return(
    <>
    <BrowserRouter>
    <Nav1/>
    <Container/>
    <Routes>
    <Route exact path="/home" element={<Home/>} />
    <Route path="/track" element={<Track/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/select" element={<Selectpage/>} />
    <Route path="/update/:uid" element={<Update/>}/>

    </Routes> 
    </BrowserRouter>
    </>
  )}
export default App;