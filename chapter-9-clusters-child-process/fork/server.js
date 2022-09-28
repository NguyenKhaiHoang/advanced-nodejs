const http = require('http');
const server = http.createServer();

server.on('request', (req, res)=> {
  if (req.url === '/compute'){
    const compute = fork('compute.js');
    compute.send('start');
    compute.on('message', sum => {
      res.send(`Sum is ${sum}`);
    })
  } else {
    res.end('ok');
  }
})



server.listen(3000);