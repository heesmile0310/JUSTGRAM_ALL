const http = require("http");
const https = require("https");
const fs = require("fs");
const app = require("./app");

const PORT = process.env.PORT;

const options = {
  key: fs.readFileSync("./key.pem", "utf-8"),
  cert: fs.readFileSync("./cert.pem", "utf-8"),
};

const server = http.createServer(app);
const httpsServer = https.createServer(options, app);

const start = () => {
  try {
    server.listen(PORT, () => {
      console.log(
        "start server http://localhost:3000/ https://localhost:3000/"
      );
    });
  } catch (err) {
    console.log(err);
  }
};

start();

// require("dotenv").config();

// const { createApp } = require("./app");

// const startServer = async () => {
//   const app = createApp();
//   const PORT = process.env.PORT;

//   app.listen(PORT, () => {
//     console.log(`Listening on Port ${PORT}`);
//   });
// };

// startServer();
