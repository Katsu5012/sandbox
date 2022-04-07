const inputs = {
  userId: "",
  password: "",
};

type Errors = " 形式に合っていません" | "文字数が不足しています。";

const errors: Record<keyof typeof inputs, Errors[]> = {
  userId: [],
  password: [],
};



// typoを見つけられないので以下の形は注意
// const errors: Record<string, Errors[]> = {
//   userId: [],
//   password: [],
// };

// errors.userid;
