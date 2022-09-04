class Task {
	constructor(name: string, dueDate: Date) {};
  id: number;

  set name(name: string) {
    this.name = name;
  };

  set taskStatus(taskStatus: string) {
    this.taskStatus = taskStatus;
  };

  set dueDate(dueDate: Date) {
    this.dueDate = dueDate;
  };

  set postponeCount(postponeCount: number) {
    this.postponeCount = postponeCount;
  };

	get postponeCount() {
		return this.postponeCount;
	}
};
