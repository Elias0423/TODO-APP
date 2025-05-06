import { Router } from 'express';
import TaskController from '../controllers/task.controller';
import TaskService from '../services/task.service';

const router = Router();
const PREFIX = '/api/tasks/';

const taskService = new TaskService();
const taskController = new TaskController(taskService);

router.get(PREFIX, taskController.getAllTasks());
router.post(PREFIX, taskController.saveTask());
router.patch(`${PREFIX}:id`, taskController.updateTask());
router.delete(`${PREFIX}:id`, taskController.deleteTask());

// NOT FOUND
router.use((req, res) => {
  res.status(404).json({ code: 404, success: false, message: 'Endpoint no encontrado. :(' });
});

export default router;
