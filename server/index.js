const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// middleware
app.use(bodyParser.json())
app.use(cors())

// api route
const todolist = require('./routes/api/todolist')
app.use('/api/todolist', todolist)


// port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})
