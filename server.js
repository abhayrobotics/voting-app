// Express js

var express = require("express");

let app = express();
// require("dotenv").config()

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;




app.listen(PORT, () => {
  console.log("Express JS server is running at 3000");
});
