import React from 'react';

function RecipeList({ recipes, addToMealPlan }) {
  return (
    <div>
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
              alt={recipe.title}
            />
            <h3>{recipe.title}</h3>
            <button onClick={() => addToMealPlan(recipe)}>Add to Meal Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
