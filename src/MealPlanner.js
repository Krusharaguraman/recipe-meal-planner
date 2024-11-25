import React from 'react';

function MealPlanner({ mealPlan, removeFromMealPlan }) {
  return (
    <div>
      <h2>My Meal Plan</h2>
      <div className="meal-plan">
        {mealPlan.length === 0 ? (
          <p>No recipes added to your meal plan yet!</p>
        ) : (
          mealPlan.map((recipe) => (
            <div key={recipe.id} className="meal-plan-item">
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                alt={recipe.title}
              />
              <h3>{recipe.title}</h3>
              <button onClick={() => removeFromMealPlan(recipe.id)}>
                Remove from Meal Plan
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MealPlanner;
