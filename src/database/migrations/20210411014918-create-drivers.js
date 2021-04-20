module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("drivers", {
      id_driver: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cnh: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        deafultValue: true,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id_user" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable("drivers"),
};
