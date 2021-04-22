const express = require('express')
const db_Worker = require('./DataBase_Worker');

const app = express()
const router = express.Router()
const port = 8080
const hostname = "0.0.0.0"

const cors = require('cors')
const corsOptions = {
    origin: 'localhost:3000'
}
router.use(cors(corsOptions));


const DataWorker = new db_Worker("db.db")

router.get('/api/init_table', (req, res) => {
    DataWorker.excute_request("CREATE TABLE messages (msg text);")
    res.sendStatus(200);
})

router.get('/api/messages', (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    DataWorker.excute_request_all(`SELECT * FROM messages`).then(rows => {
        res.send({ messages: rows })
    })
})

app.use('/', router)
app.listen(port, hostname, () => console.log("Api Up on port: "+port))