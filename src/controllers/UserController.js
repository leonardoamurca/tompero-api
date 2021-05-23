const User = require("../models/User");
const hashPassword = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");
const validatePassword = require("../utils/validatePassword");

module.exports = {
  async retrieveAll(req, res) {
    const users = await User.findAll({ attributes: { exclude: "password" } });

    return res.json(users);
  },

  async retrieveOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        attributes: { exclude: "password" },
      });

      return res.json(user);
    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
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

  async signIn(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findByEmail(email);
      if (user !== null) {
        const didPasswordsMatch = await validatePassword(password, user);

        if (didPasswordsMatch) {
          const token = await generateToken();
          const updatedUser = await User.updateToken(user, token);

          return res.status(200).json(updatedUser);
        }
      }

      return res.status(404).json({ error: "User not found!" });
    } catch (err) {
      return res.status(err.code).json({ error: err.message });
    }
  },
};
