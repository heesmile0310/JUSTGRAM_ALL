const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "123124",
  },
  {
    id: 3,
    name: "seaya",
    email: "seaya@gmail.com",
    password: "2643654",
  },
  {
    id: 4,
    name: "ian",
    email: "ian@naver.com",
    password: "asdfas!!!f",
  },
  {
    id: 5,
    name: "seonghee",
    email: "seonghee@gmail.com",
    password: "psdafds21312",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 2,
  },
  {
    id: 3,
    title: "고차함수 어렵네",
    content: "map filter 알아보기",
    userId: 3,
  },
  {
    id: 4,
    title: "백엔드도 프론트 다 별로다",
    content: "뭐해!",
    userId: 5,
  },
  {
    id: 5,
    title: "개발조아",
    content: "Request/Response와 Stateless!!",
    userId: 4,
  },
  {
    id: 6,
    title: "데이터센터 화제",
    content: "라인으로 가즈아!!!",
    userId: 5,
  },
];
//-----------------------------------------------------------------------------------------------data
//-----------------------------------------------------------------------------------------------

const http = require("http");
const express = require("express");

const app = express();
app.use(express.json()); //req.body undefined 에러 해결(아마 express사용시 발생하는 에러인듯? 전에는 body-parser Install해서 해결한 기억이 있는데 그게 express 업데이트 되면서 express내장 기능으로 추가 된듯)
// app.use(express.urlencoded({ extended: false }));

const createUser = (req, res) => {
  //회원가입 함수
  let { name, email, password } = req.body.data;

  console.log(req.body);
  users.push({
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
  });
  // console.log(users);
  res.json({ message: "userCreated" });
};

const addPost = (req, res) => {
  //게시글 등록하기 함수
  const { title, content } = req.body.data;

  posts.push({
    id: posts.length + 1,
    title: title,
    content: content,
    userId: 1,
  });

  // console.log("나는 포스트입니다:" + posts);
  res.statue(201).json({ message: "postCreated" }); //201 생성 성공
};

const postList = (req, res) => {
  //다른 방식 찾아보기
  //게시글 목록 조회하기 함수
  const newPosts = posts.map((post) => {
    //배열안에 객체로 이루어져서 요소하나씩 map으로 접근한다.
    const user = users.find((user) => post.userId === user.id); //users의 Id 값을 find로 찾아 비교한후 그 값을 user에 저장한다.
    console.log(user);
    return {
      userID: post.userId,
      userName: user.name,
      postingId: post.id,
      postingTitle: post.title,
      postingContent: post.content,
    };
  });

  res.json({ data: newPosts });
};

const postChange = (req, res) => {
  // const id = 1;

  const { title, content } = req.body.data;
  // console.log(newPosts);

  const changePost = posts.map((post) => {
    // console.log(post);
    const user = users.find((user) => post.userId === user.id); //users의 Id 값을 find로 찾아 비교한후 그 값을 user에 저장한다.
    // console.log(user);
    if (title === post.title) {
      //유저정보를 어떻게 가져오는지 헷갈림
      return {
        userID: post.userId,
        userName: user.name,
        postingId: post.id,
        postingTitle: title,
        postingContent: content,
      };
    }
  });
  res.json({ data: changePost });
};

const removePost = (req, res) => {
  const { id, title, content } = req.body.data;

  const findRemovePost = posts.filter((post) => post.id !== id);
  console.log(findRemovePost);
  res.json({ message: "postingDeleted" });
};

const userPost = (req, res) => {
  const { id } = req.body.data;

  const findUser = users.filter((user) => id === user.id);
  // console.log(findUser);

  const userPostInfo = posts.filter((post) => id === post.userId);

  const result = {
    userId: id,
    userName: findUser[0].name,
    postings: userPostInfo,
  };

  res.json({ message: "success", data: result });
};

app.get("/", (req, res) => {
  res.json({ message: "hi 연결했다 자식아" });
});

app.post("/signup", createUser);
app.post("/addpost", addPost);
app.get("/postlist", postList);
app.patch("/postchange", postChange);
app.delete("/removepost", removePost);
app.get("/userpostinfo", userPost);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("start server http://localhost:3000/");
});
