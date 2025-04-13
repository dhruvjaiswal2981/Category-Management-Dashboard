import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/categories`).then((res) => {
      const cat = res.data.find((c) => c.id === parseInt(id));
      if (cat) {
        setName(cat.name);
        setItemCount(cat.itemCount);
        setImageUrl(cat.imageUrl);
      }
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/categories/${id}`, { name, itemCount, imageUrl });
      navigate('/');
    } catch (err) {
      alert('Failed to update category');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Edit Category</h2>

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
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none rounded-lg transition-all transform hover:scale-105"
          >
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
