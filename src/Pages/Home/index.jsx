// Home.jsx
import React, { useState } from 'react';
import Navbar from '../../components/NavBar/navbar.component';
import Sidebar from '../../components/SideBar/sidebar.component';


const Home = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const toggleSidebar = () => {
    setSidebarToggled(!sidebarToggled);
  };

  return (
    <div> 
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarToggled} toggleSidebar={toggleSidebar} />
      Home
    </div>
  );
};


export default Home

