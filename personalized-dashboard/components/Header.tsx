import React from 'react';
import { FaSearch, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { toggleDarkMode } from '../store/preferencesSlice';

const Header: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.preferences.darkMode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center gap-2 w-1/2">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle dark mode"
          onClick={() => dispatch(toggleDarkMode())}
          className="focus:outline-none"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
        </button>
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-gray-500 dark:text-gray-300" />
          <span className="hidden md:inline text-gray-700 dark:text-gray-200">User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
