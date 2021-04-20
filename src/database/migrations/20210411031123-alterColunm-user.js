module.exports = {
  up: async (queryInterface) =>
    queryInterface.renameColumn("users", "data_birth", "date_birth"),
};
