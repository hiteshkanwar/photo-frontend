import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from '../Pages/Gallery/Gallery';

const PublicRoutes=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRoutes