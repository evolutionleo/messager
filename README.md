# Messager
A minimalistic social network, created using NodeJS + ReactJS.

## Project Structure

The project consists of two parts:
- `front` folder contains the Next.js app
- `back` folder contains the Express.js server

---
## How does it work (back)?

We use socket.io + express bundle.
Socket_server.js is responsible for receiving messages and forwarding them.
```js
const express = require ('express');
const app = express ();
const http = require ('http');
const server = http.createServer (app);
const {Server} = require ("socket.io");
const io = new Server (server);
const db_Worker = require ('./ DataBase_Worker');

const DataWorker = new db_Worker ("db.db")

const port = 3000
const hostname = "0.0.0.0"

app.use (express.static ('public'))

io.on ('connection', (socket) => {
    DataWorker.excute_request (`INSERT INTO messages VALUES (" User connected ");`)
    socket.on ('chat message', (msg) => {
        // io.emit ('chat message', msg);
        DataWorker.excute_request (`INSERT INTO messages VALUES (" $ {msg} ");`)
    });
    socket.on ('disconnect', () => {
        DataWorker.excute_request (`INSERT INTO messages VALUES (" User disconnected ");`)
    });
});

server.listen (port, hostname, () => console.log ("Server Up"))
```

As you can see, it doesn't brodcast messages now and saves them to the database.

To enable the broadcast function, uncomment the line `//io.emit('chat message ', msg);`

API
---
| URL | DESCRIPTION | METHOD |
|----------------|:---------:|:----------------:|
| /api/messages | Returns JSON with all messages | GET |
| /api/init_table | Initializes the messages table(dev) | GET |


Let's add in the future
---
- [ ] Design
    - [ ] HZ
    - [X] HZ
