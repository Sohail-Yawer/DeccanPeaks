import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'visible' : ''}`}>
      Sidebar content
      <button onClick={toggleSidebar}>Close</button>
    </aside>
  );
};

export default Sidebar;
