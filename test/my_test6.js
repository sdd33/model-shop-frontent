const http = require("http")
const fs = require("fs")
const {pipeline} = require('stream')

const server = http.createServer((req,res)=>{
  const r = fs.createReadStream({},"nisishabima")

  pipeline(r,req,(err)=>{
    console.log(err)
    res.end("发送失败")
  })
    res.end("发送成功")
})


