const express = require("express");
// const path = require("path");
// const rootDir = require("../utils/path-utils");
const userRouter = express.Router();
userRouter.get("/host/enter-house", (req, res) => {
  console.log("This is contact us get page", req.url, req.method);
  // res.sendFile(path.join(rootDir, "views", "contact-us.html"));
  res.render("enter-house", { pageTitle: "Enter House" });
});

const houseArray = [];
userRouter.post("/host/enter-house", (req, res) => {
  // console.log("This house's name is :", req.body.homename);
  houseArray.push({
    housename: req.body.homename,
    price: req.body.price,
    city: req.body.city,
    country: req.body.country,
  });
  // console.log('house name is ',houseArray)
  // res.sendFile(path.join(rootDir, "views", "contact-us-result.html"));
  // res.render('contact-us',{pageTitle:'House added'});// change the filename contact-us to house-added
  res.render("house-added", { pageTitle: "House added" });
});

exports.userRouter = userRouter;
exports.houseArray = houseArray;
