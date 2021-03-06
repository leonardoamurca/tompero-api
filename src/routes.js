const express = require("express");

const UserController = require("./controllers/UserController");
const RecipeController = require("./controllers/RecipeController");

const routes = express.Router();

// User routes
routes.get("/users/:id", UserController.retrieveOne);
routes.get("/users", UserController.retrieveAll);
routes.post("/users", UserController.store);
routes.post("/users/signin", UserController.signIn);
routes.post("/users/logout", UserController.endSession);
routes.post("/users/me", UserController.me);

// Recipe routes
routes.get("/recipes", RecipeController.retrieveAll);
routes.get("/recipes/:id", RecipeController.retrieveOne);
routes.get("/users/:user_id/recipes", RecipeController.retrieveUserRecipes);
routes.post("/users/:user_id/recipes", RecipeController.store);

module.exports = routes;
