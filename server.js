// POST 요청의 정보 파싱
const bodyParser = require("body-parser");

// express 써서 쉽게 api 구성할 수 있음
const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// POST 응답
app.post("/api", (req, res) => {
   res.json("post success");

   console.log("post success");
});


// GET 응답
app.get("/api", (req, res) => {
   res.json("get success");

   console.log("get success");
});


// 8080 포트 사용한다는 뜻
app.listen(8080, () => console.log("server start!~!~~!"));




// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });