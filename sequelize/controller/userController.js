const { where } = require("sequelize");
var db = require("../model/index");
var User = db.user;

var addUser = async (req, res) => {
  //   const info = User.build({ firstName:'ALEX' ,lastName:'hill' });
  //   await info.save();
  const info = await User.create({ firstName: "Maria", lastName: "hill" });
  console.log("information is  saved to the database!");
  //   to update
  // await info.update({ firstName: "Quill", lastName: "hill" });
  //   info.set({
  //     firstName: "peter",
  //     lastName: "hill",
  //   });
  //   await info.save()
  // to delete
  // await info.destroy();
  // reload - BAISCALLY IT IS A SELECT QUERY
  // await info.reload();
  // console.log(info.firstName);
  console.log(info.toJSON());
  res.status(200).json(info.toJSON());
};
var getUser = async (req, res) => {
  const getData = await User.findAll({});
  res.status(200).json({ data: getData });
};
var singleUser = async (req, res) => {
  const getData = await User.findOne({ where: { id: req.params.id } });
  res.status(200).json({ data: getData });
};
var postUser = async (req, res) => {
  var postData = req.body;
  console.log(postData);
  if (postData.length > 1) {
    var data = await User.bulkCreate(postData);//to insert more than one user at a at time
  } else {
    var data = await User.create(postData);
  }
  res.status(200).json({ data: data });
};

var deleteUser = async (req, res) => {
  const deleteData = await User.destroy({ where: { id: req.params.id } });
  res.status(200).json("deleted successfully");
};

var patchUser = async (req, res) => {
    var update = req.body;
  const updateData = await User.update(update,{ where: { id: req.params.id } });
  res.status(200).json({data:updateData});
};
module.exports = {
  addUser,
  getUser,
  singleUser,
  postUser,
  deleteUser,
  patchUser
};
