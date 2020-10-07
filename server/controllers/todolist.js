const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_list'
})

db.connect( (err) => {
    if(err){
        throw err
    }
    console.log('Connected to the database')
})

// get
const getToDoList =  async (req, res) => {
    let sql = `SELECT * FROM todo`
    await db.query(sql, (err, data) => {
        if(err){
            throw err
        }
        res.status(200).send(data)
    })
}
// post
const postToDoList = async (req, res) => {
    let sql = `INSERT INTO todo(todo) VALUES('${req.body.todo}')`
    await db.query(sql, (err) => {
        if(err){
            throw err
        }
        res.status(201).send()
    })
}
// delete
const deleteToDoList = async (req, res) => {
    let sql = `DELETE FROM todo WHERE id = '${req.params.id}'`
    await db.query(sql, (err) => {
        if(err){
            throw err
        }
        res.status(200).send()
    })
}



module.exports = {
    getToDoList,
    postToDoList,
    deleteToDoList
}