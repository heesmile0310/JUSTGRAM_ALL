import { app } from "./app.js";
import http from "http";

const server = http.createServer(app);

const start = () => {
  try {
    server.listen(3000, () =>
      console.log("start server http://localhost:3000/")
    );
  } catch (err) {
    console.log(err);
  }
};

// 함수형으로 바꿔서 실행시켜줘야함
start();
// 다른 표현식
// server.listen(3000, () => {
//   console.log("start server http://localhost:3000/");
// });
