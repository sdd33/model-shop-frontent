const http = require("http")
const fs = require("fs")
const {pipeline,Transform} = require('stream')

class myStream extends Transform{
  constructor(options) {
    super(options);
  }
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
}

const server = http.createServer((req,res)=>{
  const w = fs.createWriteStream("./x.txt")
  const t = new myStream()

  pipeline(req,t,w,(err)=>{
    console.log(err)
    res.end("保存失败")
  })
    res.end("保存成功")
})

server.listen(3000)

