import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import Profile from './Profile'
import Demo from './Demo'
import Highlights from './Highlights'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Trainers from './Trainers'
import Price from './Price'
import Test from './Test'



function App() {
  
  return (
    <>
<Router>
      <Header/>
      <Banner/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/trainers' element={<Trainers/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/course' element={<Highlights/>}/>
          <Route exact path='/demo' element={<Demo/>}/>
          <Route exact path='/price' element={<Price/>}/>
          <Route exact path='/test' element={<Test/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
