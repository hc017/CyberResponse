import React, { useState } from 'react';

const DisplayData = () => {
  // Sample data for categories and subcategories
  const sampleCategories = ['Category 1', 'Category 2', 'Category 3'];
  const sampleSubcategories = ['Subcategory A', 'Subcategory B', 'Subcategory C'];

  // Setting initial state with sample data
  const [categories] = useState(sampleCategories);
  const [subcategories] = useState(sampleSubcategories);

  return (
    <div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <h2>Subcategories:</h2>
      <ul>
        {subcategories.map((subcategory, index) => (
          <li key={index}>{subcategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
