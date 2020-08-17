const getBytes = (info) => {
  const parenthesesIndex = info.indexOf(")");
  const bytesConfig = getBytesConfig(info);

  const bytes = Number(
    info.substring(parenthesesIndex + 1, bytesConfig.bytesIndex)
  );

  return Math.round(bytes * bytesConfig.multiplier);
};

const getBytesConfig = (info) => {
  let multiplier = 1;
  let bytesIndex = info.indexOf("BYTES");
  if (bytesIndex == -1) {
    bytesIndex = info.indexOf("KB");
    multiplier *= 1024;
  }

  if (bytesIndex == -1) {
    bytesIndex = info.indexOf("MB");
    multiplier *= 1024;
  }

  if (bytesIndex == -1) {
    throw new Error("Not Found Greatness");
  }

  return {
    bytesIndex,
    multiplier,
  };
};

const getLines = (info) => {
  const linesIndex = info.indexOf("LINES");

  const lines = Number(info.substring(0, linesIndex));
  return lines;
};

const getInfo = (text, filename) => {
  let info = text
    .trim()
    .replace(/(\r\n|\s|\t|\r)/gm, "")
    .toUpperCase();
  return info;
};

module.exports = {
  getBytes,
  getInfo,
  getLines,
};
