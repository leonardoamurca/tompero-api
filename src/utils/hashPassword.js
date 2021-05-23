const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

function hashPassword(psswd) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(psswd, SALT_ROUNDS, (err, hash) => {
      err ? reject(err) : resolve(hash);
    });
  });
}

module.exports = hashPassword;
