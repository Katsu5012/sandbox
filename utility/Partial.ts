interface Todo {
  title: string;
  description: string;
}

// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(todo1);
console.log(todo2);
// todo1に破壊的変更を加えるので使い所を考える
console.log(Object.assign(todo1, { description: "hellloworld" }));