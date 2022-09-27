import React from "react";

import TopNav from "../Component/Nevigation/TopNav";
import {Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Business from "../Pages/Business/Business";
import Categories from "../Pages/Categories/Categories";
import Contact from "../Pages/Contact/Contact";
import Politics from "../Pages/Politics/Politics";
import Sports from "../Pages/Sports/Sports";




const Routing=()=>{
    return(
        <>
        
       <TopNav/>
    
       <Routes>
        <Route path="/" element={<Home />} />

       
       
        <Route path="/categories" element={<Categories />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sports" element={<Sports />} />
      </Routes>
        </>
    )

}
export default Routing;
