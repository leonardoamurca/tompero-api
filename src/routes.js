const express = require("express");

const UserController = require("./controllers/UserController");
const RecipeController = require("./controllers/RecipeController");

const routes = express.Router();

routes.get("/users", UserController.retrieveAll);
routes.post("/users", UserController.store);

routes.get("/recipes", RecipeController.retrieveAll);
routes.get("/users/:user_id/recipes", RecipeController.retrieveUserRecipes);
routes.post("/users/:user_id/recipes", RecipeController.store);
module.exports = routes;
