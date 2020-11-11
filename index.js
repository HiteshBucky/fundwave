const express = require("express");
const app = express();
const { data } = require("./data");
const { k } = require("./function");

// console.log(data);

app.get("/", (req, res) => {
  console.log("helow");
  res.send(k);
});

app.listen(3000, () => console.log("Server is  running on 3000"));
