//add.js
const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
];

const getDB = () => {
  return DB;
};

const DB = {
  filterUsers: function (filter) {
    return users.filter(filter);
  },
};

module.exports = {
  getDB,
  DB,
};
