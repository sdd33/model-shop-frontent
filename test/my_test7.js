const express = require("express");

const app = express();
const port = 3000 // 默认3000

app.get("/", (req, res) => {
  console.log("request.url:", req.url);
  console.log("request.method:", req.method);
  console.log("request.headers:", req.headers);
  console.log('请求参数：', req.query)
  res.send("Hello World????");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
