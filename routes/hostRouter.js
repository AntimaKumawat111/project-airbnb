const express = require("express");
const { houseArray } = require("./userRouter");

const hostRouter = express.Router();

hostRouter.get("/", (req, res) => {
  // console.log("Data from userRouter:", houseArray);
  // console.log("Home route middleware:", req.url, req.method);
  // Render the 'home' view with dynamic data
  res.render("home", { pageTitle: "Home", houseArray });
});

module.exports = hostRouter;
