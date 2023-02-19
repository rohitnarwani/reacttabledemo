import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [menuItems, setMenuItems] = useState([
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' }
    ]);


    return (
        <div className="sidebar">
        <nav>
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>

            </nav>
            </div>
    );
}

export default Sidebar;
