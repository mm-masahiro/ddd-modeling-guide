class Task {
	static readonly MAX_POSTPONE_COUNT = 3;

  id: number;
	name: string;
	dueDate: Date;
	taskStatus: string;
	postponeCount: number;

	createTask(name: string, dueDate: Date) {
		if (!name || !dueDate) {
			console.log('error occured');
		};
		this.name = name;
		this.dueDate = dueDate;
		this.taskStatus = 'undone';
		this.postponeCount = 0;
	}
};
