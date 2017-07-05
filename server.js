"use strict";
const express = require("express");
const app = express();
const path = require("path");
const port = 3100;
const address = `http://localhost:${port}/`;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

app.listen(3100, function() {
  console.log(`App listening on ${address}`);
});

//переписать сервер под изоморф
