const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          name: "admin",
          cpf: "01487753659",
          email: "arthur@gmail.com",
          telephone: "55 3134961475",
          data_birth: "20/10/1985",
          gender: "M",
          admin: true,
          password_hash: bcrypt.hashSync("admin", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: async () => {},
};
