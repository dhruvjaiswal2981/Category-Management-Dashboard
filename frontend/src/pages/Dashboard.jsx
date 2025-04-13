import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';  // Using alias @ to refer to src
import axios from '../api/axios';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  useEffect(() => {
    axios.get('/categories').then((res) => setCategories(res.data));
  }, []);

  // Navigate to EditCategory page
  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);  // Use the category ID to navigate
  };

  return (
    <DashboardLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
          Category Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative group bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={cat.imageUrl || '/placeholder.jpg'}
                alt={cat.name}
                className="w-full h-40 object-cover rounded-t-xl transform transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleEditClick(cat.id)}
                  className="bg-white text-blue-600 px-4 sm:px-6 py-2 rounded shadow-md text-sm font-semibold transform transition-transform duration-300 hover:scale-105"
                >
                  ✏️ Edit
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-semibold text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-2">
                  {cat.itemCount} items
                </p>
                <div className="text-xs sm:text-sm text-gray-600">
                  {cat.description || 'No description available'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>

  );
};

export default Dashboard;
