const axios = require("axios");
const githubService = require("../services/github");

const get = async (url, params) => {
  try {
    const result = await axios.get(url, params);
    return [null, result];
  } catch (error) {
    return [error, null];
  }
};

module.exports = {
  get,
};
