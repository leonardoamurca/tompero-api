const Recipe = require("../models/Recipe");
const User = require("../models/User");
const isAuthenticated = require("../utils/isAuthenticated");

module.exports = {
  async retrieveUserRecipes(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: "recipes" },
    });

    return res.json(user);
  },

  async retrieveAll(req, res) {
    const recipes = await Recipe.findAll();

    return res.json(recipes);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { token } = req.headers;
    const { name, description, ingredients, directions, image_url } = req.body;

    const isAuth = await isAuthenticated(token);
    if (isAuth) {
      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({ error: "User not found!" });
      }

      const recipe = await Recipe.create({
        name,
        description,
        ingredients,
        directions,
        image_url,
        user_id,
      });

      return res.json(recipe);
    } else {
      return res.status(403).json({ message: "You are not logged in!" });
    }
  },
};
