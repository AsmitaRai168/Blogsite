import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing/Routing";

export const App = () =>{
  return (
   <>
   <BrowserRouter>
        <Routing />
        
      </BrowserRouter>
   </>
    
    
  );
};