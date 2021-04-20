import Sequelize, { Model } from "sequelize";

class Driver extends Model {
  static init(sequelize) {
    super.init(
      {
        id_driver: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        cnh: Sequelize.BIGINT,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize,

        // PARA GARANTIR QUE MATENHA O NOME DA TABELA QUE EU DIGITEI *Ñ OBRIGATORIO
        // SE NÃO COLOCAR ESSES PARAMETROS O SEQUELIZE ACRESCENTA UM 'S' NO FINAL DE CADA NOME DA TABELA
        freezeTableName: "drivers",
        tableName: "drivers",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
  }
}

export default Driver;
