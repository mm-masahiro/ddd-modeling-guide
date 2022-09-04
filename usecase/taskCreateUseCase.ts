import { TaskRepository } from '../repository/taskRepository';

class TaksCreateUseCase {
  taskRepository: TaskRepository;

  // crateTask(name: string, dueDate: Date): void {
  //   if (!name || !dueDate) {
  //     console.log('error occured');
  //   };

  //   const task = new Task();
  //   task.taskStatus = 'undone';  // 「タスクは未完了状態から始まる」というドメイン知識を実装
  //   task.name = name;
  //   task.dueDate = dueDate;
  //   task.postponeCount = 0;  // 「3回まで延期できる」というドメイン知識を表現するために、延期回数の初期状態をinitializeしている
  //   this.taskRepository.save(task)
  // };

	createTask(name: string, dueDate: Date) {
		// task生成のルール/制約がなくなっている = ドメイン知識を表現する実装を全く持たなくなった
		const task = new Task();
		task.createTask(name, dueDate);
		this.taskRepository.save(task);
	}
};
