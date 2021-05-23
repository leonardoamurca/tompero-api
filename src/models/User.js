const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar_url: DataTypes.STRING,
        token: DataTypes.TEXT,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Recipe, { foreignKey: "user_id", as: "recipes" });
  }

  static async findByEmail(email) {
    return this.findOne({ where: { email } });
  }

  static async findByToken(token) {
    return this.findOne({ where: { token } });
  }

  static async updateToken(user, token) {
    return user.update({ token });
  }
}

module.exports = User;
