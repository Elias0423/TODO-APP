import { DEFAULT_RESPONSE } from '../config/utils';
import { TaskModel } from '../models/task.model';
import { db } from '../db/firebase';
import moment from 'moment';

export default class TaskService {
  private taskReference: FirebaseFirestore.CollectionReference;

  constructor() {
    this.taskReference = db.collection('tasks');
  }

  public async getAll() {
    const tasks = await this.taskReference.get();
    if (!tasks.empty) {
      const formattedTasks = tasks.docs.map((task) => this.formatTask(task));
      return DEFAULT_RESPONSE(200, true, 'Tareas encontradas', formattedTasks);
    } else {
      return DEFAULT_RESPONSE(404, false, 'Tareas no encontradas', []);
    }
  }

  async save(data: TaskModel) {
    const newTask = await this.taskReference.add(data);
    const task = await this.taskReference.doc(newTask.id).get();
    const response = this.formatTask(task);
    return DEFAULT_RESPONSE(201, true, 'Tarea creada', response);
  }

  async update(taskId: string, status: 'pendiente' | 'completada') {
    await this.taskReference.doc(taskId).update({ status });
    return DEFAULT_RESPONSE(200, true, 'Tarea actualizada');
  }

  async delete(taskId: string) {
    await this.taskReference.doc(taskId).delete();
    return DEFAULT_RESPONSE(200, true, 'Tarea eliminada');
  }

  private formatTask(task: FirebaseFirestore.DocumentSnapshot) {
    const taskData = task.data() as TaskModel;
    return {
      id: task.id,
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
      createdAt: moment(taskData.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    };
  }
}
