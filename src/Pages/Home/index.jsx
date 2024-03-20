import React, { useEffect, useRef, useState } from 'react';

import Navbar from '../../components/NavBar/navbar.component';



const Home = () => {
  const [sidebarToggled,setSidebarToggled] = useState(false);
  const sidebarRef = useRef(null);
  useEffect(() => {
    function handler(e){
      if(sidebarRef.current){
        if(!e.target.classList.contains("sidebar") && !e.target.classList.contains("sidebar-toggle")){
          setSidebarToggled(false);
        }
      }
    }
    document.addEventListener("click",handler);
    return () => {
      document.removeEventListener("click",handler);
    }
  },[]);
  const toggleSidebar = () => {
    setSidebarToggled(!sidebarToggled);
  };
  return (
    <div> 
            <Navbar toggleSidebar={toggleSidebar} />

     
      <aside ref={sidebarRef} className={`sidebar ${sidebarToggled ? "visible" :"" }`}>Sidebar</aside>
      Home
    </div>
    
  )
}

export default Home
