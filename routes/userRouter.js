const express = require("express");
const path = require("path");
const rootDir = require("../utils/path-utils");
const userRouter = express.Router();
userRouter.get("/host/contact-us", (req, res) => {
  console.log("This is contact us get page", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

const houseArray=[];
userRouter.post("/host/contact-us", (req, res) => {
  console.log("This house's name is :", req.body.homename);
  houseArray.push({housename : req.body.homename});
  console.log('tt',houseArray)
  res.sendFile(path.join(rootDir, "views", "contact-us-result.html"));
});

exports.userRouter = userRouter;
exports.houseArray = houseArray;

