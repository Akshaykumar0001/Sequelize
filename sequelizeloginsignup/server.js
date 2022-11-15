const express = require("express");
const app = express();
const port = 8000;
var bodyParser = require("body-parser");
const credentials = require("./controller/userAuth");
const authenticate = require("./middleware/authentication");

require("./model/index");
app.use(bodyParser.json());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello Worldd");
});
// app.get("/user/:id", authenticate.authentication, credentials.getUserById);
// app.get('/login', credentials.loginuser);
app.get("/getuser", authenticate.authentication, credentials.getuser);
app.post("/signup", credentials.addUser);
app.get("/login", credentials.loginauthenticateduser);
app.post("/postdata", credentials.insertUserData);

app.listen(port, () => console.log(`app is litening to the port ${port}`));
