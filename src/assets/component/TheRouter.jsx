import React from 'react'
import Airlift from './page/airlift'
import AboutUs from './page/AboutUs'
import Header from './header'

import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
const TheRouter = () => {
  return (
  <>
     <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Airlift />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Airlift" element={<Airlift />} />
        </Routes>
      </Router>
  </>
  )
}

export default TheRouter