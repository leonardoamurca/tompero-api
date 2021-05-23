require("dotenv/config");
module.exports = {
  development: {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASS,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
};
