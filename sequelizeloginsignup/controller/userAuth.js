var db = require("../model/index");
const { jwtToken } = require("../utils/jsonwebtoken");
var User = db.signin;
var Todo = db.Todo;
const bcrypt = require("bcrypt");
const { where } = require("sequelize");

const getuser = async (req, res) => {
 res.json(req.user);
};

// const getUserById = async (req, res) => {
//   const getuser = await User.findOne({ where: { id: req.params.id } });
//   res.status(200).json(getuser);
// };

var addUser = async (req, res) => {
  const { password, email, Username } = req.body;
  const existingUser = await User.findOne({
    where: { Username: Username },
  });
  if (existingUser) {
    return res.status(400).json("username already exists");
  }
  const existingemail = await User.findOne({
    where: { email: email },
  });
  if (existingemail) {
    return res.status(400).json("email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(req.body);
  let data = await User.create({ password: hashedPassword, email, Username });
  res.send(data);
};

// const loginuser = async (req, res) => {
//   const { email, password, Username } = req.body;
//   const userName = await User.findOne({ where: { Username: Username } });
//   const userEmail = await User.findOne({ where: { email: email } });
//   const encryptedpassword = await bcrypt.compare(password, userName.password);
//   if (userEmail && userName && encryptedpassword) {
//     return res.status(201).json("successfully logged in ");
//   } else {
//     res.send("invalid credentials");
//   }
// };

const loginauthenticateduser = async (req, res) => {
  const { email, password } = req.body;
  const userEmail = await User.findOne({ where: { email: email } });
  let Token = jwtToken(userEmail);
  const encryptedpassword = await bcrypt.compare(password, userEmail.password);
  if (encryptedpassword) {
//     const todo = Todo.findOne({ where: { userName:userEmail} });
// if (todo) {
//   res.status(200).json({Token,todo})
// }
res.status(200).json({Token:Token})
  } else {
    res.send("wrong password");
  }
};

const insertUserData = async (req, res) => {
  const {todo, UpdatedTodo, completed, userName } = req.body;
  try {
    const UserName = await User.findOne({ where: { Username: userName } });
    let Token = jwtToken(UserName);
    if (UserName) {
      const data = await Todo.create({todo, UpdatedTodo, completed, userName});
      return res.send({data,Token});
    }
    else{
      res.send("not user")
    }
  } catch (error) {
    return res.send("not correct");
  }
};

module.exports = {
  addUser,
  // getUserById,
  // loginuser,
  loginauthenticateduser,
  getuser,
  insertUserData,
 
};
