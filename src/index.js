const downloadFile = require("./downloadFile");

downloadFile(
  `https://images.unsplash.com/photo-1534832847687-ed24b3a9d3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80`,
  {
    path: "./public/files",
    filename: `leopardo`,
    extension: `.jpg`,
  }
);
