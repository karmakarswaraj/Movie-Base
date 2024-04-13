import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utilitiy/api";

function App() {
    useEffect(() => {
        apiTesting();
    },[])
    const apiTesting = () => {
      fetchDataFromApi('/movie/top_rated').then((data)=>{
        console.log(data);
      })
    }
  return 
  <>
    
  </>;
}

export default App;
