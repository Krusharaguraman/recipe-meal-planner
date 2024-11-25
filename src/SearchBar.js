import React from 'react';

function SearchBar({ ingredients, setIngredients, fetchRecipes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div>
      <h2>Search for Recipes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (e.g., chicken, tomato)"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
