const users = [
  { id: 1, age: 20, hasBrother: true },
  { id: 2, age: 30, hasBrother: false },
  { id: 3, age: 35, hasBrother: false },
  { id: 4, age: 40, hasBrother: true },
  { id: 5, age: 10, hasBrother: false },
  { id: 6, age: 5, hasBrother: true },
  { id: 7, age: 70, hasBrother: true },
  { id: 8, age: 80, hasBrother: true },
  { id: 9, age: 25, hasBrother: true },
  { id: 10, age: 18, hasBrother: true },
];

const isUnderTwentyUser = (user) => {
  return user.age <= 20;
};

const hasBrotherUser = (user) => {
  return user.hasBrother;
};

const underTwentyUsers = users.filter(isUnderTwentyUser);

const underTwentyAndHasBrotherUsers = underTwentyUsers.filter(hasBrotherUser);

const hasBrotherUsers = users.filter(hasBrotherUser);
