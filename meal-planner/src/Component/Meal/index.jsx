import React, { useState } from "react";
import "./style.css";

const API_KEY = "dc377628a1814736b158066c9cfab78c";

const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const weight = e.target.weight.value;
    const height = e.target.height.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const activity = e.target.activity.value;

    let bmr =
      gender === "male"
        ? 66.47 + 13.75 * weight + 5 * height - 6.75 * age
        : 655.1 + 9.56 * weight + 1.85 * height - 4.67 * age;

    const activityFactor = {
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
    };

    const calories = Math.round(bmr * activityFactor[activity]);

    const res = await fetch(
      `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calories}&apiKey=${API_KEY}`
    );
    const data = await res.json();

    setMeals(data.meals);
    setRecipe(null);
    setLoading(false);
  };
  
  const getRecipe = async (id) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    const data = await res.json();
    setRecipe(data);
  };

  return (
    <div className="meal-c">
    <div className="meal-container">
      <h1>Personalized Meal Plan</h1>
      <p>Enter your details to get personalized meal recommendations</p>
        <div className="card">
          <h2>Your Information</h2>
        <form className="meal-form" onSubmit={handleSubmit}>
        <input type="number" name="weight" placeholder="Weight (kg)" required />
        <input type="number" name="height" placeholder="Height (cm)" required />
        <input type="number" name="age" placeholder="Age" required />

        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select name="activity">
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
        </select>

        <button type="submit">Generate Meal Plan</button>
      </form>
      </div>
  
      {loading && <p className="loading">Loading meals...</p>}

     
      <div className="meals">
        {meals.map((meal, index) => (
          <div className="meal-card" key={meal.id}>
            <h3>{["Breakfast", "Lunch", "Dinner"][index]}</h3>

           
            <img
              src={`https://spoonacular.com/recipeImages/${meal.id}-312x231.jpg`}
              alt={meal.title}
              className="meal-img"
            />

            <p>{meal.title}</p>

            <button onClick={() => getRecipe(meal.id)}>
              Get Recipe
            </button>
          </div>
        ))}
      </div>

     
      {recipe && (
        <div className="recipe-box">
          <h2>{recipe.title}</h2>

          <h3>Ingredients</h3>
          <ul>
            {recipe.extendedIngredients.map((i) => (
              <li key={i.id}>{i.original}</li>
            ))}
          </ul>

          <h3>Steps</h3>
          <ol>
            {recipe.analyzedInstructions[0]?.steps.map((s) => (
              <li key={s.number}>{s.step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
    </div>
  );
};

export default Meal;
