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

// const filterUser = (campaignAge) => {
//   return (user) => {
//     return user.age <= campaignAge;
//   };
// };

const hasBrotherUser = (user) => {
  return user.hasBrother;
};

const filterFuncUser = (func) => {
  return (user) => {
    return func(user);
  };
};

// const filterAgeAndFuncUser = (age) => {
//   return (func) => {
//     return (user) => {
//       return func(user) && user.age <= age;
//     };
//   };
// };

// const underTwentyUsers = users.filter(isUnderTwentyUser);

// const underTwentyAndHasBrotherUsers = underTwentyUsers.filter(hasBrotherUser);

// const hasBrotherUsers = users.filter(hasBrotherUser);

// const canpaignUser = users.filter(filterUser(30));

// const canUser = users.filter(filterFuncUser(hasBrotherUser));

// const filterAgeAndFuncUser = (age) => {
//   return (func) => {
//     return (user) => {
//       return func(user) && user.age <= age;
//     };
//   };
// };

// const canpaignUser = users.filter(filterAgeAndFuncUser(30)(hasBrotherUser));
// console.log(canpaignUser);

const filterAgeAndFuncUser = (filterAge, callback, user) => {
  return user.age <= filterAge && callback(user);
};

const filterUsers = users.filter((user) => {
  return filterAgeAndFuncUser(25, hasBrotherUser, user);
});

console.log(filterUsers);
