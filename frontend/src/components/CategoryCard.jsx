import React from 'react';

const CategoryCard = ({ category, onEdit }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      {/* Image */}
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      
      {/* Category Name */}
      <h3 className="text-lg font-bold">{category.name}</h3>
      
      {/* Item Count */}
      <p className="text-sm text-gray-600">Items: {category.itemCount}</p>

      {/* Edit Button */}
      <button
        onClick={() => onEdit(category)}
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
      >
        Edit
      </button>
    </div>
  );
};

export default CategoryCard;
