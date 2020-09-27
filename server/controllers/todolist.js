const mongodb = require('mongodb')


// get
const getToDoList = async (req, res) => {
    const todolist = await connectDB()
    res.status(200).send(await todolist.find({}).toArray())
}
// post
const postToDoList = async (req, res) => {
    const todolist = await connectDB()
    await todolist.insertOne({
        todo: req.body.todo,
        created_at: new Date()
    })
    res.status(201).send()
}
// delete
const deleteToDoList = async (req, res) => {
    const todolist = await connectDB()
    await todolist.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send()
}
// mongodb


// 0EHtPKh9v4TAAlAs
async function connectDB(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/local', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('local').collection('todo_list')
}

/* this is for the mongodb atlas
async function connectDB(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://lourence:0EHtPKh9v4TAAlAs@cluster0.qllvf.mongodb.net/todolist?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('todolist').collection('todolist')
}
*/

module.exports = {
    getToDoList,
    postToDoList,
    deleteToDoList
}