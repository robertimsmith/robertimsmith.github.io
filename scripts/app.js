const http = require('http');
const fs = require('fs');

//create a server object on http://localhost:8080/
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('html/index.html').pipe(res)
  })
  
  server.listen(process.env.PORT || 8080)