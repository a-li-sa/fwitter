const { findAllUsers, insertUserQuery } = require('./userQueries');
// const { findAllUsers, insertUser } = require('./userQueries');

const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
    // resolve is like .then
  } catch (e) {
    return Promise.reject(e);
  }
};

// const insertUserToDb = async (userInput) => {
//   try {
//     // connection.query(query, userInput, (err) => {
//     //   if (err) throw err;
//     // });
//     // res.send(`added ${userInput.username} to database`);
//     return await connection.query(insertUser, userInput);
//   } catch (e) {
//     throw new Error(e);
//   }
// };

const insertUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUserQuery, username);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchUsers,
  insertUserToDb,
};
