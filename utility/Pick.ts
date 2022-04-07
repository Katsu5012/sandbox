interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
