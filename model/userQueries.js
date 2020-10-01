const findAllUsers = 'SELECT * FROM USERS;';

const insertUser = 'INSERT INTO users SET ?;';

module.exports = {
  findAllUsers,
  insertUser,
};
