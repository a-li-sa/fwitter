const { findAllUsers } = require('./userQueries');
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

module.exports = {
  fetchUsers,
};
