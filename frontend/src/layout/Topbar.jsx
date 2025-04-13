import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Topbar = ({ toggleSidebar, user }) => {
  const navigate = useNavigate();

  const handleAddCategoryClick = () => {
    navigate('/add');
  };

  const getUserInitial = (user) => {
    if (user?.name) return user.name.split(' ')[0].charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  };

  const userInitial = getUserInitial(user);

  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-4 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        {/* Left: Title + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <FaBars size={22} />
          </button>
          <h2 className="text-2xl font-bold">Categories</h2>
        </div>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-auto px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-black placeholder-gray-500"
          />

          <button
            onClick={handleAddCategoryClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition hover:scale-105"
          >
            + Add Category
          </button>

          <div className="relative group">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
              {userInitial}
            </div>
            <div className="absolute top-12 left-0 hidden group-hover:block bg-white text-black p-2 rounded shadow-lg text-xs z-10">
              <p className="font-semibold">{user?.name || 'User'}</p>
              <a href="#" className="text-blue-600 hover:underline">View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
