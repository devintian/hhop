module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define("recipe", {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    method: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    is_private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: true,
      },
    },
    creditTo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        is: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi,
      },
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {});
  recipe.associate = (models) => {
    recipe.belongsTo(models.user, {
      foreignKey: {
        name: "authorId",
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    });
    recipe.hasMany(models.favourite, {
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    });
  };
  return recipe;
};
