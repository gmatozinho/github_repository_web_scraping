const cheerio = require("cheerio");
const githubService = require("../services/github");
const parseText = require("./parseText");

const githubRepositoryItemClass = ".js-navigation-item";
const desireElementType = "div";

getRepositoryInfo = async (hmtl) => {
  const files = await getFilesFromPage(hmtl, []);

  const obj = {};

  await Promise.all(
    files.map(async (file) => {
      const fileSplit = file.name.split(".");
      const extension = fileSplit[fileSplit.length - 1];

      const fileInfo = await getFileInfo(file);

      if (!obj[extension]) {
        obj[extension] = fileInfo;
      } else {
        obj[extension].lines += fileInfo.lines;
        obj[extension].bytes += fileInfo.bytes;
      }
    })
  );

  return obj;
};

const getFilesFromPage = async (html, files) => {
  const $ = cheerio.load(html);
  const directory = [];

  $(githubRepositoryItemClass).each(async (index, element) => {
    if (element.name == desireElementType) {
      const type = $("svg", element).attr("aria-label");
      const href = $("span a", element).attr("href");

      const fileInfo = {
        type,
        href,
      };
      if (type == "File") {
        fileInfo["name"] = $("span a", element).attr("title");
        files.push(fileInfo);
      } else if (type == "Directory") {
        directory.push(fileInfo);
      }
    }
  });
  if (directory.length) {
    await getItensFromDirectory(directory, files);
  }

  return files;
};

const getItensFromDirectory = async (directory, files) => {
  await Promise.all(
    directory.map(async (item) => {
      const directoryHtml = await githubService.getRepository(item.href);
      await getFilesFromPage(directoryHtml, files);
    })
  );
};

const getFileInfo = async (file) => {
  const filePage = await githubService.getRepositoryItem(file.href);
  const $ = cheerio.load(filePage);
  let text = ""
  const divText = $(".flex-md-items-center").each((index, element) => {
    const div = $(".mt-md-0", element);

    if(div){
      text = div.text()
    }
  });
  const info = parseText.getInfo(text, file.name);

  const lines = parseText.getLines(info);
  const bytes = parseText.getBytes(info);
  return {
    lines,
    bytes,
  };
};

module.exports = {
  getRepositoryInfo,
};
