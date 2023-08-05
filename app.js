const express = require("express");
const { tasksRouter } = require("./routes/tasks");

const app = express();

module.exports = app;

app.use("/tasks", tasksRouter);
