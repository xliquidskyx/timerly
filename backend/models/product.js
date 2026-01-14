module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('meat', 'vegetable', 'grain', 'dairy', 'spice', 'other'),
      allowNull: false
    }
  }, {
    tableName: 'products',
    timestamps: true
  });

  Product.associate = function(models) {
    Product.belongsToMany(models.Recipe, {
      through: 'RecipeProducts',
      foreignKey: 'productId',
      as: 'recipes'
    });
  };

  return Product;
};
