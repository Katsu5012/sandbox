type Use = {
  name: "name";
  age: never;
  context: "context";
};

type A<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type aa=A<Use>