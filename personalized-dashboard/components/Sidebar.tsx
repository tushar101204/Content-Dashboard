import React from 'react';
import { FaHome, FaFilm, FaNewspaper, FaStar, FaCog } from 'react-icons/fa';

const navItems = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'News', icon: <FaNewspaper /> },
  { name: 'Movies', icon: <FaFilm /> },
  { name: 'Favorites', icon: <FaStar /> },
  { name: 'Settings', icon: <FaCog /> },
];

const Sidebar: React.FC = () => (
  <aside className="w-20 md:w-64 bg-white dark:bg-gray-800 shadow flex flex-col items-center md:items-start py-4">
    <nav className="w-full">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name} className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
            <span className="text-xl">{item.icon}</span>
            <span className="hidden md:inline">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
