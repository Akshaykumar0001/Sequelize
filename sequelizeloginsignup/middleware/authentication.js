const jwt = require("jsonwebtoken");
const db = require("../model");
require("dotenv").config();
var User = db.signin;
var Todo = db.Todo;
function authentication(req, res, next) {
  const authHeaders = req.headers["authorization"];
  var Token = authHeaders && authHeaders.split(" ")[1],
    decoded;
  try {
    decoded = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return res.status(401).send("unauthorized user");
  }
  console.log(decoded)
  var userid = decoded.id;

  Todo.findAll({ where: {id:userid} })
    .then(function (user) {
       req.user = user;
      next();
    })
    .catch((err) => {
      //  Todo: will implement the functionalities for error later
      console.log(err);
    });
}
module.exports = {
  authentication,
};
  //  User.findOne({where:{ id: userid }}).then(function(user) {
  //   console.log ("our user",user)
//  var decoded = jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET);
//  if (decoded) {
//    var useremail = decoded.email;
//     User.findOne({where:{ email: useremail }}).then(function(user) {
//      return res.send(user);
//     });
//  }
//  else{return res.status(401).send("unauthorized user");}

//  const authHeaders = req.headers["authorization"];
//  const Token = authHeaders && authHeaders.split(" ")[1];
//  jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
//    if (error) return res.status(401).json({ error: error.message });
//    req.user = user;
//    console.log(user);

//    next();
//  });
