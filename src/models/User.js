const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar_url: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = User;
