const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',  // replace with your React app's domain
    methods: ['GET', 'POST'],
    credentials: true,
  };
  
app.use(cors(corsOptions));

const io = require('socket.io')(server, {
    cors: corsOptions,
});


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});