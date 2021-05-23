const User = require("../models/User");
const hashPassword = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");

module.exports = {
  async retrieveAll(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      const psswdHash = await hashPassword(password);
      const token = await generateToken();
      const user = await User.create({
        name,
        email,
        password: psswdHash,
        token,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(err.code).json({ error: err.message });
    }
  },
};
