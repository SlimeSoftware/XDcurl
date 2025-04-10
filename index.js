// server-xd-final.js
const http = require('http');

const asciiXD = `
██   ██ ██████
 ██ ██  ██   ██
  ███   ██   ██
 ██ ██  ██   ██
██   ██ ██████
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(asciiXD);
});

server.listen(80, () => {
  console.log('Serveur lancé sur http://localhost');
});
