const express= require('express');
const {houseArray} = require('./userRouter');
const path= require('path');
const rootDir = require('../utils/path-utils');

const hostRouter = express.Router();
hostRouter.get("/", (req, res) => {
  console.log('this data is from userRouter : ',houseArray)
  console.log("This is homeroute middleware",req.url,req.method);
  res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = hostRouter;