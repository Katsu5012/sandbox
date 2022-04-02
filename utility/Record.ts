const inputs = {
  userId: "",
  password: "",
};

type Errors = " 形式に合っていません" | "文字数が不足しています。";

const errors: Record<keyof typeof inputs, Errors[]> = {
  userId: [],
  password: [],
};
