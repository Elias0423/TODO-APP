import { Router } from 'express';
import TaskController from '../controllers/task.controller';

const router = Router();
const PREFIX = '/api/tasks/';

router.get(PREFIX, TaskController.getAllTasks);
router.post(PREFIX, TaskController.saveTask);
router.patch(`${PREFIX}:id`, TaskController.updateTask);
router.delete(`${PREFIX}:id`, TaskController.deleteTask);

// NOT FOUND
router.use((req, res) => {
  res.status(404).json({ code: 404, success: false, message: 'Endpoint no encontrado. :(' });
});

export default router;
