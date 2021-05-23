const User = require("../models/User");

async function isAuthenticated(token) {
  const user = await User.findByToken(token);
  return user !== null; 
}

module.exports = isAuthenticated;
