const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 80;
const app = express();

const root = '../build/';
app.use(express.static(root));
app.use((req, res) => {
  fs.createReadStream(path.join(root, 'index.html')).pipe(res);
})

const server = http.createServer(app);
server.listen(port, () => console.log('server run at port', port));
