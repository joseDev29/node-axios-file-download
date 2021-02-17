const { createWriteStream } = require("fs");
const { writeFile } = require("fs/promises");
const Path = require("path");
const Axios = require("axios");

function createFileStream(path) {
  return writeFile(path, "").then(() => {
    return createWriteStream(path);
  });
}

async function downloadFile(
  url,
  configuration = { path, filename, extension }
) {
  const { path, filename, extension } = configuration;

  const writer = await createFileStream(
    Path.resolve(__dirname, path, `${filename}${extension}`)
  );

  const response = await Axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

module.exports = downloadFile;
