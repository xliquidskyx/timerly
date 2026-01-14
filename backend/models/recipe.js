module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.JSON,
      allowNull: false
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preparationSteps: {
      type: DataTypes.JSON,
      allowNull: true
    },
    cookingTime: {
      type: DataTypes.INTEGER, // w sekundach
      allowNull: false
    },
    cookingMethod: {
      type: DataTypes.ENUM('boiling', 'baking', 'grilling', 'steaming', 'frying', 'roasting', 'other'),
      allowNull: false
    },
    temperature: {
      type: DataTypes.INTEGER, // w stopniach Celsjusza
      allowNull: true
    },
    restTime: {
      type: DataTypes.INTEGER, // w sekundach
      allowNull: true
    },
    source: {
      type: DataTypes.ENUM('api', 'manual'),
      defaultValue: 'manual'
    },
    apiRecipeId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'recipes',
    timestamps: true
  });

  Recipe.associate = function(models) {
    Recipe.belongsToMany(models.Product, {
      through: 'RecipeProducts',
      foreignKey: 'recipeId',
      as: 'products'
    });
    Recipe.belongsToMany(models.Cookware, {
      through: 'RecipeCookware',
      foreignKey: 'recipeId',
      as: 'cookware'
    });
    Recipe.hasMany(models.Timer, {
      foreignKey: 'recipeId',
      as: 'timers'
    });
  };

  return Recipe;
};
