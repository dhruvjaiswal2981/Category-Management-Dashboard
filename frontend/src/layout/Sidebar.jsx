import React from 'react';
import { FaTshirt, FaUser, FaTags, FaCog, FaInbox, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden",
          { hidden: !isOpen }
        )}
        onClick={toggleSidebar}
      />

      {/* Sidebar panel */}
      <div
        className={classNames(
          "fixed z-40 top-0 left-0 w-64 bg-gradient-to-b from-blue-800 via-blue-700 to-indigo-600 text-white p-6 h-full transform transition-transform duration-300 ease-in-out",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
            "md:translate-x-0 md:static md:block": true,
          }
        )}
      >
        {/* Close button on mobile */}
        <button className="md:hidden mb-4 text-white" onClick={toggleSidebar}>
          <FaTimes size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center mb-6 space-x-2">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">🛒</div>
          <h1 className="text-2xl font-semibold">Dhruv-Cart</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <p className="font-semibold text-gray-200 text-xs">Main Menu</p>
          {[
            { icon: <FaTshirt />, label: 'Orders' },
            { icon: <FaTags />, label: 'Products' },
            { icon: <FaTshirt />, label: 'Categories', active: true },
            { icon: <FaUser />, label: 'Customers' },
            { icon: <FaInbox />, label: 'Inbox' },
          ].map(({ icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={classNames(
                'flex items-center space-x-3 p-3 rounded-lg transition-all duration-300',
                active
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'hover:bg-blue-500 hover:shadow-lg'
              )}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto text-xs text-gray-200 pt-6">
          <hr className="border-gray-600 my-4" />
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">D</div>
            <p className="font-medium">Dhruv Jaiswal</p>
          </div>
          <p className="mt-2 text-gray-400 cursor-pointer hover:text-white transition">View Profile</p>

          <p className="mt-6 font-semibold">Settings</p>
          <a href="#" className="text-gray-400 hover:text-white mr-2">Personal</a>
          <a href="#" className="text-gray-400 hover:text-white">Global</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
