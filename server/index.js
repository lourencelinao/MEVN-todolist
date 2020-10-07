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

if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname + '/public/'))

    // SPA handler
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

// port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(__dirname)
})
