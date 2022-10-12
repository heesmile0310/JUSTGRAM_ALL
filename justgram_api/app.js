const http = require("http");
const express = require("express");
const { createUser } = require("./controller/createUser");
const { addPost } = require("./controller/addPost");
const { postList } = require("./controller/postList");

const app = express();
app.use(express.json()); //req.body undefined 에러 해결(아마 express사용시 발생하는 에러인듯? 전에는 body-parser Install해서 해결한 기억이 있는데 그게 express 업데이트 되면서 express내장 기능으로 추가 된듯)
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "hi 연결했다 자식아" });
});

app.post("/signup", createUser);
app.post("/addpost", addPost);
app.get("/postlist", postList);
app.patch("/postchange", postChange);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("여기는 터미널 로그다 자식아");
});
