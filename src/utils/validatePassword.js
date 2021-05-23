const bcrypt = require("bcrypt");

function validatePassword(password, user) {
  return new Promise((resolve, reject) =>
    bcrypt.compare(password, user.password, (err, res) => {
      if (err) {
        reject(err);
      } else if (res) {
        resolve(res);
      } else {
        reject(new Error("Passwords do not match."));
      }
    })
  );
}

module.exports = validatePassword;
