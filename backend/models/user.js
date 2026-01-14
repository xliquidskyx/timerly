module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    preferences: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {
        language: 'en',
        favoriteRecipes: []
      }
    }
  }, {
    tableName: 'users',
    timestamps: true
  });

  User.associate = function(models) {
    User.hasMany(models.Timer, {
      foreignKey: 'userId',
      as: 'timers'
    });
  };

  return User;
};
