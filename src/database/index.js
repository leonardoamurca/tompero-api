require("dotenv").config();
const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Recipe = require("../models/Recipe");

const connection = new Sequelize(dbConfig[process.env.NODE_ENV]);

User.init(connection);
Recipe.init(connection);

Recipe.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
