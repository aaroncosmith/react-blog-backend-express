const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan");


const indexRouter = require("./routes/index"),
  usersRouter = require("./routes/users"),
  blogRouter = require("./routes/blogRouter");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/index", indexRouter);
app.use("/users", usersRouter);
app.use("/", blogRouter);

module.exports = app;