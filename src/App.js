import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [windowwidth, setWindowwidth] = useState(window.innerWidth)

   useEffect(() => {

    window.addEventListener("resize",updatewindowwidth)
    
   }, )

   const updatewindowwidth=()=>{
     setWindowwidth(window.innerWidth)
   }





  return (


    <div className="window">
      <h1>Window Size Checker </h1>
     <h2>The Window width => {windowwidth}</h2> 
    </div>
  )
}

export default App
