require('dotenv').config({path:__dirname+'/./../config/.env'})

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const logRouter = require('./routers/log')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    // res.statusCode = 200;
	// res.setHeader('Content-Type', 'text/plain')
	// res.end('Node API v1.0')
	res.send({'status':'OK'})
});

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(logRouter)

module.exports = app