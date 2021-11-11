const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('home.html');
const contanct = fs.readFileSync('Contanct.html');
const about = fs.readFileSync('about.html');
const login = fs.readFileSync('login.html');

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (url=='/') {
      res.end(home);
  }
  else if (url=='/about') {
      res.end(about)
  }
  else if (url=='/Contanct') {
      res.end(contanct)
  }
  else if (url=='/login') {
      res.end(login)
  }
  else{
      res.statusCode = 404;
      res.end('<h1>404 not found</h1>')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});