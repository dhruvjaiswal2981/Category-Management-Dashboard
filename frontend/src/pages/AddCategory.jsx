import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/categories', { name, itemCount, imageUrl });
      navigate('/');
    } catch (err) {
      alert('Failed to add category');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Category</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Name */}
          <div>
            <input
              type="text"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Item Count */}
          <div>
            <input
              type="number"
              placeholder="Item Count"
              value={itemCount}
              onChange={(e) => setItemCount(e.target.value)}
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Image URL */}
          <div>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none rounded-lg transition-all transform hover:scale-105"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>

  );
};

export default AddCategory;
