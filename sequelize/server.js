const express = require("express");
//  const user = require("./model/user");
//  const Contact = require("./model/contact")
require("./model/index");
const userCtrl = require("./controller/userController");
var bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.json()); 
app.use(express.json());
// user.sync({ force: true});
// Contact.sync({force: true});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/adduser", userCtrl.addUser);
app.get("/getuser", userCtrl.getUser);
app.get("/singleuser/:id", userCtrl.singleUser);
app.post("/postuser", userCtrl.postUser);
app.delete("/deleteuser/:id", userCtrl.deleteUser);
app.patch("/updateuser/:id", userCtrl.patchUser);

app.listen(port, () => console.log(`app is listening to port ${port}`));
