const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Recipe = require("../models/Recipe");

const connection = new Sequelize(dbConfig);

User.init(connection);
Recipe.init(connection);

Recipe.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
