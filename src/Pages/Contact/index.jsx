import React, { useState } from 'react'
import Navbar from '../../components/NavBar/navbar.component'
import Sidebar from '../../components/SideBar/sidebar.component'


const Contact = () => {
  const [sidebarToggled,setSidebarToggled] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarToggled(!sidebarToggled);
  };
  
  return (
    <div>
        <Navbar toggleSidebar={toggleSidebar}></Navbar>
        <Sidebar isOpen={sidebarToggled} toggleSidebar={toggleSidebar}></Sidebar>
        Contact
    </div>
  )
}

export default Contact