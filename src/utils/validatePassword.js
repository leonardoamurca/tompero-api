const bcrypt = require("bcrypt");

function validatePassword(password, user) {
  return bcrypt.compare(password, user.password);
}

module.exports = validatePassword;
