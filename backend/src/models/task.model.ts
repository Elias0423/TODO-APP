interface TaskModel {
  id?: string;
  title: string;
  description: string;
  status: 'pendiente' | 'completada';
  createdAt?: number;
}

export { TaskModel };
