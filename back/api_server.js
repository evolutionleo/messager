const express = require('express')
const db_Worker = require('./DataBase_Worker')
const crypto = require('crypto')

const app = express()
const router = express.Router()
const port = 8080
const hostname = "0.0.0.0"

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000'
}
router.use(cors(corsOptions));


const DataWorker = new db_Worker("db.db")

router.get('/api/init_table', (req, res) => {
    DataWorker.excute_request("CREATE TABLE messages (id int, msg text, frequency int);")
    res.sendStatus(200);
})

router.get('/api/messages', (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    let id = (req.query.id == undefined) ? 0 : req.query.id
    DataWorker.excute_request_all(`SELECT * FROM messages WHERE chat_id=${id}`).then(rows => {
        res.send({ messages: rows })
    })
})

router.post('/api/new_message', (req,res) => {
    var msg = req.query.msg
    var id = crypto.randomBytes(8).toString('hex');
    DataWorker.excute_request(`INSERT OR IGNORE INTO messages VALUES ("${id}", "${msg}", 0);`)
    res.sendStatus(200)
})

router.post('/api/delete_message/:id', (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    DataWorker.excute_request_all(`DELETE FROM messages WHERE id='${req.params.id}'`)
    res.sendStatus(200)
})

app.use('/', router)
app.listen(port, hostname, () => console.log("Api Up on port: "+port))