const http = require('http')
const  fs = require('fs')
// creating a sever using raw node.js 

const server = http.createServer()

// listener 

server.on('request', (req, res) => {
  if(req.url === '/read-file'  && req.method === "GET");

//   stream file reading 

const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt')

readableStream.on('data', (buffer) =>{

  res.statusCode = 200
    res.write(buffer)
})
readableStream.on('end', () =>{
  res.statusCode = 200
  res.end("The streaming is over !!")
})

readableStream.on('error', (error) =>{
  console.log(error)
  res.statusCode = 200
  res.end("Something went wrong !!")
})
  
})

server.listen(5000, () =>{
    console.log(`server is lesting on port 5000`)
})