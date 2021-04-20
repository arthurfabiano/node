/* eslint-disable prettier/prettier */
import Sequelize from "sequelize";
import User from "../app/models/User";
import Driver from "../app/models/Driver";
import dbConfig from "../config/database";

const models = [User, Driver];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models)); // SE EXISTIR ELE CHAMA O ASSOCIETE
  }
}

export default new Database();
