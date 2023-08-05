const fs = require("fs/promises");

const path = require("path");

const tasksPath = path.join(__dirname, "..", "db", "tasks.json");

const { HttpError } = require("../helpers/HttpError");

const getAllTasksService = async () => {
  const data = await fs.readFile(tasksPath);
  return JSON.parse(data);
};

const getOneTaskService = async (id) => {
  const tasks = await getAllTasksService();
  const oneTask = await tasks.find((task) => task.id === id);
  if (!oneTask) {
    throw new HttpError(404, "Task not found");
  }
  return oneTask;
};

module.exports = { getAllTasksService, getOneTaskService };
