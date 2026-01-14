module.exports = (sequelize, DataTypes) => {
  const Timer = sequelize.define('Timer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER, // w sekundach
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('running', 'paused', 'completed'),
      defaultValue: 'running'
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'recipes',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'timers',
    timestamps: true
  });

  Timer.associate = function(models) {
    Timer.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      as: 'recipe'
    });
    Timer.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return Timer;
};
