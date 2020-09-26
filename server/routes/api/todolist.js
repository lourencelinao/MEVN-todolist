const express = require('express')
const router = express.Router()

// import controller
const { getToDoList, postToDoList, deleteToDoList} = require('../../controllers/todolist')
// get
router.get('/', getToDoList)
// post
router.post('/', postToDoList)
//delete
router.delete('/:id', deleteToDoList)

module.exports = router;