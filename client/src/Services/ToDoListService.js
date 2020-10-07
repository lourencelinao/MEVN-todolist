/* eslint-disable */
const axios = require('axios')
const url = '/api/todolist/'
// using ajax instead of axios
class ToDoListService{
    // get
    static getToDoList(){
        return new Promise( (resolve, reject) => {
            try{
                $.get(url, (data, stats) => {
                    resolve(data)
                })
            } catch(err) {
                reject(err)
            }
        })
    }
    // post
    static postToDoList(todo){
        // i used axios in here because for some reason my ajax post wont work
        return axios.post(url, {
            todo: todo
        })
    }
    // delete
    static deleteToDoList(id){
        // i used axios in here because for some reason my ajax delete wont also work
        return axios.delete(`${url}${id}`)
    }
}

module.exports = ToDoListService;