import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'visible' : ''}`}>
      Sidebar content
      <IoCloseSharp className="close-icon" onClick={toggleSidebar} style={{ color: 'red', cursor: 'pointer', top: '5%', right: '5%' }}/>
     
    </aside>
  );
};

export default Sidebar;
