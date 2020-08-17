const http = require("../lib/http");
const to = require("await-to-js").default;

const githubUrl = "https://github.com";

const getRepository = async (repositoryName) => {
  const repositoryUrl = `${githubUrl}/${repositoryName}`;
  const [err, result] = await http.get(repositoryUrl);

  if (err) {
    throw new Error("Error to fetch repository");
  }

  return result.data;
};


const getRepositoryItem = async (href) => {
  const repositoryUrl = `${githubUrl}${href}`;
  const [err, result] = await http.get(repositoryUrl);

  if (err) {
    throw new Error("Error to fetch repository");
  }

  return result.data;
};

module.exports = {
  getRepository,
  getRepositoryItem
};
