import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import MealPlanner from './MealPlanner';
import './App.css';

const API_KEY = '5f2b2430e5c44e198d129111f4afa6d5'; // Replace with your API key
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);

  // Function to fetch recipes based on ingredients
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          apiKey: API_KEY,
          query: ingredients,
          number: 10, // Limit to 10 recipes
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Function to add a recipe to the meal plan
  const addToMealPlan = (recipe) => {
    setMealPlan((prevMealPlan) => [...prevMealPlan, recipe]);
  };

  // Function to remove a recipe from the meal plan
  const removeFromMealPlan = (recipeId) => {
    setMealPlan(mealPlan.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <div className="App">
      <h1>Recipe Finder & Meal Planner</h1>

      {/* Search Bar */}
      <SearchBar
        ingredients={ingredients}
        setIngredients={setIngredients}
        fetchRecipes={fetchRecipes}
      />

      {/* Recipe List */}
      <RecipeList recipes={recipes} addToMealPlan={addToMealPlan} />

      {/* Meal Planner */}
      <MealPlanner mealPlan={mealPlan} removeFromMealPlan={removeFromMealPlan} />
    </div>
  );
}

export default App;
