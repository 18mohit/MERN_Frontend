import { useState } from 'react'
import './App.css'
import Header from './components/Navbar/Header'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About_us from './components/pages/About/About_us';
import Team from './components/pages/Team/Team';
import Footer from './components/Navbar/Footer';
import AddImage from './components/pages/Gallery/AddImage';
import Signup from './components/pages/Login/SignUp';
import Login from './components/pages/Login/Login';
import SignUpSensei from './components/pages/Login/SignUpSensei';
import Profile from './components/Navbar/Profile';
import MyGallert from './components/pages/Gallery/MyGallert';

function App() {

  return (
    <>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/team" element={<Team />} />
        <Route path="/addimage" element={<AddImage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create/sensei" element={<SignUpSensei />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mygallery" element={<MyGallert />} />
        
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
