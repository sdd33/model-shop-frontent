const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
  const w = fs.createWriteStream("./x.jpg")
  req.on("data",(chunk) =>{
    w.write(chunk)
  } )

  req.on("end",()=>{
    w.end()
    res.end("图片保存成功")
  })

  w.on("error",(error)=>{
    console.log(error)
    res.end("图片保存失败")
  })
})

server.listen(3000)

