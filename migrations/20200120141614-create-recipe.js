module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("recipe", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    ingredients: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    method: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    is_private: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: true,
      },
    },
    creditTo: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    source: {
      type: Sequelize.STRING(255),
      allowNull: true,
      validate: {
        is: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi,
      },
    },
    photo: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable("recipe"),
};
