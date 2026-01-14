module.exports = (sequelize, DataTypes) => {
  const Cookware = sequelize.define('Cookware', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.ENUM('pan', 'pot', 'grill', 'oven', 'steamer', 'other'),
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true
    },
    compatibilityData: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'cookware',
    timestamps: true
  });

  Cookware.associate = function(models) {
    Cookware.belongsToMany(models.Recipe, {
      through: 'RecipeCookware',
      foreignKey: 'cookwareId',
      as: 'recipes'
    });
  };

  return Cookware;
};
