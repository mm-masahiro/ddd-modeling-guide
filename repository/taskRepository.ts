export interface TaskRepository {
  save: (task) => void;
	findById: (id) => void;
};
