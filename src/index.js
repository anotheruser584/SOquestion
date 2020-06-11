import express from "express";
const app = express();
const globalSetup = require("./global.setup");

async function setup() {
  await globalSetup.setVars();
}
setup();

/**
 * From here and below I want VS code to know what is "ports"
 * Also this global variable will be used not only in this file
 * so I need something on the root level to tell VS Code what are my global vars
 * */

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(ports.default.primary, function () {
  console.log(`Example app listening on port ${ports.default.primary}!`);
});
