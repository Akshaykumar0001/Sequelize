const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtToken({ email, Username,id }) {
  const user = { email, Username,id };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  return accessToken;
}
module.exports = {
  jwtToken,
};
