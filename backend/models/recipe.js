// models/recipe.js
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    ingredients: DataTypes.JSON,
    instructions: DataTypes.STRING,
  });
  return Recipe;
};
