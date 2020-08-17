const githubService = require("../services/github");
const scrape = require("../utils/scrape")

const execute = async (repositoryName) => {
  const page = await githubService.getRepository(repositoryName);
  const result = await scrape.getRepositoryInfo(page)
  return result;
};

module.exports = {
  execute,
};
