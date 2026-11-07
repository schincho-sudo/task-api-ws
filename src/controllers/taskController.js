import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;
  // completed has already passed validation (undefined or a valid boolean string).
  const completedFilter =
    completed === undefined
      ? undefined
      : completed === 'true' || completed === '1';
  const tasks = await taskService.getAllTasks(completedFilter);
  res.json(tasks);
}
    
export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
