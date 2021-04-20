module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("users", "avatar_image", {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: async (queryInterface) =>
    queryInterface.removeColumn("users", "avatar_image"),
};
