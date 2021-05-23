const crypto = require("crypto");
const BYTES = 16;

function generateToken() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(BYTES, (err, data) => {
      err ? reject(err) : resolve(data.toString("base64"));
    });
  });
}

module.exports = generateToken;
