import { Response, Request } from 'express';

class TaskController {
  async getAllTasks(req: Request, res: Response) {}

  async saveTask(req: Request, res: Response) {}

  async updateTask(req: Request, res: Response) {}

  async deleteTask(req: Request, res: Response) {}
}

export default new TaskController();
