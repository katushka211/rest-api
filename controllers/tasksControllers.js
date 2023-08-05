const { getAllTasksService } = require("../services/tasksServices");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

getOneTask = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks };
