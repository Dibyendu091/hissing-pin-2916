import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Designers from '../Pages/Designers'
import Editorial from '../Pages/Editorial'
import Gifts from '../Pages/Gifts'
import Handbags from '../Pages/Handbags'
import Home from '../Pages/Home'
import Jwellery from '../Pages/Jwellery'
import Kids from '../Pages/Kids'
import Men from '../Pages/Men'
import Sale from '../Pages/Sale'
import Shoes from '../Pages/Shoes'
import Women from '../Pages/Women'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/designers' element={<Designers />} />
        <Route path='/editorial' element={<Editorial />} />
        <Route path='/gifts' element={<Gifts />} />
        <Route path='/handbags' element={<Handbags />} />
        <Route path='/home' element={<Home />} />
        <Route path='/jwellery' element={<Jwellery />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/men' element={<Men />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/women' element={<Women />} />
    </Routes>
  )
}

export default AllRoutes