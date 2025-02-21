const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const rootDir = require("./utils/path-utils");
const hostRouter = require("./routes/hostRouter");
const { userRouter } = require("./routes/userRouter");
const { houseArray } = require("./routes/userRouter");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views"); // when html files's folder's name is different then 2nd views's name change into that name

app.use(express.static(path.join(rootDir, "public"))); //this is important to folder public
app.use(express.urlencoded());
app.use(hostRouter);
app.use(userRouter);
app.use("/", (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html")); // because of now .html file change into .ejs file
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
