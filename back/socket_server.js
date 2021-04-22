const express = require('express');
const app = express();

const http = require('http');
const http_server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(http_server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const db_Worker = require('./DataBase_Worker');
const DataWorker = new db_Worker("db.db")

const port = 8000
const hostname = "0.0.0.0"


io.on('connection', (socket) => {
    DataWorker.excute_request(`INSERT INTO messages VALUES ("User connected");`);
    io.emit('chat message', 'User connected!');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        DataWorker.excute_request(`INSERT INTO messages VALUES ("${msg}");`);

        console.log('Chat message received! Text: '+msg);
    });
    socket.on('disconnect', () => {
        DataWorker.excute_request(`INSERT INTO messages VALUES ("User disconnected");`)
        io.emit('chat message', 'User disconnected!');
    });
});


http_server.listen(port, hostname, () => console.log("Server Up on port: "+port))
