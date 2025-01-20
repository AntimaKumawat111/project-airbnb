const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const rootDir = require("./utils/path-utils");
const hostRouter = require("./routes/hostRouter");
const { userRouter } = require("./routes/userRouter");
const { houseArray } = require("./routes/userRouter");

const app = express();
const PORT = 3000;

// app.use('view engine','ejs');
// app.use('views','views');

app.use(express.static(path.join(rootDir, "public"))); //this is important to folder public
app.use(express.urlencoded());
app.use(hostRouter);
app.use(userRouter);
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
