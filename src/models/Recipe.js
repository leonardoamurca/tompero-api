const { Model, DataTypes } = require("sequelize");

class Recipe extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        directions: DataTypes.STRING,
        image_url: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Recipe;
