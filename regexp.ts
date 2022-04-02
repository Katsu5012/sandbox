interface Task {
  id: number;
  content: string;
  isDone: boolean;
  userId: number;
}

// 画面に表示せず、変更を加えないタスク
const tasks: Task[] = [
  { id: 1, content: "hello", isDone: true, userId: 1 },
  { id: 2, content: "hello wold", isDone: false, userId: 2 },
  { id: 3, content: "Vue.js", isDone: false, userId: 3 },
  { id: 4, content: "Nuxt.js", isDone: true, userId: 4 },
  { id: 5, content: "TypeScript", isDone: true, userId: 1 },
  { id: 6, content: "Node.js", isDone: true, userId: 2 },
  { id: 7, content: "PHP", isDone: false, userId: 3 },
  { id: 8, content: "Golang", isDone: true, userId: 1 },
  { id: 9, content: "React", isDone: true, userId: 1 },
  { id: 10, content: "Next.js", isDone: false, userId: 3 },
];

// 画面に表示するtask
let displayTasks: Task[] = [];
// 無限スクロールの取得ページ数
let page = 1;
// 取得中フラグ(取得中にreload画面を表示したり、登録ボタンとかの制御に使ったりする)
let isGetting = false;

const fetchTasks = async () => {
    isGetting = true;
    
    // repositoryとか作成してtasksをTask[]にできるようにする
  await fetch(`/tasks?page=${page}`)
    .then((tasks: Task[]) => {
        // 初めて取得するときはそのまま取得したデータを配列に格納する
      if (displayTasks.length === 0) {
        displayTasks = tasks;
      } else {
          // ２度目以降は取得したデータと取得済みのデータを結合して格納する
        displayTasks = displayTasks.concat(tasks);
      }
    })
    .catch((e) => console.error(e))
    .finally(() => {
      page++;
      isGetting=false
    });
};
// セレクトボックスの変更を格納する場所
let filterUserId: number | "" = "";
let filterIsDone: boolean | "" = true;

const filterTasksbyUserId = (task: Task) => {
  // filterUserIdが選択されていない時は配列を受け取った配列のまま返す
  if (filterUserId === "") {
    return !!task;
  }

  return task.userId === filterUserId;
};

const filterTasksByIsDone = (task: Task) => {
  // filterIsDoneが選択されていない時は配列を受け取った配列のまま返す
  if (filterIsDone === "") {
    return !!task;
  }
  return task.isDone === filterIsDone;
};

const handleFilterTasks = () => {
  // 一旦空にする
  displayTasks = [];

  displayTasks = tasks.filter(filterTasksbyUserId).filter(filterTasksByIsDone);
};

// 絞り込みボタンを押した
handleFilterTasks();

console.log(displayTasks);
// const users = [
//   { id: 1, name: "田中太郎" },
//   { id: 2, name: "山田花子" },
//   { id: 3, name: "佐藤次郎" },
// ];

// const transformToDisplayTask = (task: {
//   id: number;
//   content: string;
//   isDone: boolean;
//   userId: number;
// }) => {
//   const user = users.find((user) => {
//     return task.userId === user.id;
//   });

//   const { id, content, isDone } = task;

//   return {
//     id,
//     content,
//     isDone,
//     user: user ? user : { id: task.userId, name: "" },
//   };
// };
