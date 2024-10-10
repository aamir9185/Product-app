import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMoon } from "react-icons/io5";  // Import moon icon
import { LuSun } from "react-icons/lu";    // Import sun icon

function Navbar() {
  const [theme, setTheme] = useState('light');  // Default theme is 'light'

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);  // Apply theme to HTML element
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={'/'}>Future Shop</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/create'}>Create</Link>
            </li>
            {/* Add the toggle button for dark and light mode with icons */}
            <li>
              <button onClick={toggleTheme} className="btn mx-4">
                {theme === 'light' ? <IoMoon size={20} /> : <LuSun size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
