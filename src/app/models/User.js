import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id_user: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
        telephone: Sequelize.STRING,
        date_birth: Sequelize.DATEONLY,
        gender: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      {
        sequelize,

        // PARA GARANTIR QUE MATENHA O NOME DA TABELA QUE EU DIGITEI *Ñ OBRIGATORIO
        // SE NÃO COLOCAR ESSES PARAMETROS O SEQUELIZE ACRESCENTA UM 'S' NO FINAL DE CADA NOME DA TABELA
        freezeTableName: "users",
        tableName: "users",
      }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
