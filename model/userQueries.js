const findAllUsers = 'SELECT * FROM USERS;';
// const insertUser = 'INSERT INTO users SET ?;'
const insertUserQuery = 'INSERT INTO users (username) VALUES (?);';

module.exports = {
  findAllUsers,
  // insertUser,
  insertUserQuery,
};
