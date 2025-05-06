import { DEFAULT_RESPONSE } from '../config/utils';
import { Response, Request } from 'express';
import TaskService from '../services/task.service';

export default class TaskController {
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  getAllTasks = () => async (req: Request, res: Response) => {
    let response;
    try {
      response = await this.taskService.getAll();
    } catch (error) {
      console.log(error);
      response = DEFAULT_RESPONSE(500, false, 'Error interno', error);
    }
    res.status(response.code).json(response);
  };

  saveTask = () => async (req: Request, res: Response) => {
    let response;
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        response = DEFAULT_RESPONSE(400, false, 'Asegurese de enviar el campo de titulo y descripción');
      } else response = await this.taskService.save({ title, description, status: 'pendiente', createdAt: Date.now() });
    } catch (error) {
      response = DEFAULT_RESPONSE(500, false, 'Error interno', error);
    }
    res.status(response.code).json(response);
  };

  updateTask = () => async (req: Request, res: Response) => {
    let response;
    try {
      const { status } = req.body;
      const taskId = <string>req.params.id;
      if (!status || !['pendiente', 'completada'].includes(status)) {
        response = DEFAULT_RESPONSE(400, false, 'El estado debe ser pendiente o completada');
      } else response = await this.taskService.update(taskId, status);
    } catch (error) {
      response = DEFAULT_RESPONSE(500, false, 'Error interno', error);
    }
    res.status(response.code).json(response);
  };

  deleteTask = () => async (req: Request, res: Response) => {
    let response;
    try {
      const taskId = <string>req.params.id;
      response = await this.taskService.delete(taskId);
    } catch (error) {
      response = DEFAULT_RESPONSE(500, false, 'Error interno', error);
    }
    res.status(response.code).json(response);
  };
}
