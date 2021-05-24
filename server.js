const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");


// require routes
const breakfastRouter = require('./routes/breakfast')
const lunchRouter = require("./routes/lunch");
const dinnerRouter = require("./routes/dinner");

const app = express();



// misc middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// router middleware
app.use("/breakfast", breakfastRouter);
app.use("/lunch", lunchRouter);
app.use('/dinner', dinnerRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
