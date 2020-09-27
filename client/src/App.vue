<template>
  <div id="app" class="">
    <div class="container mt-5">
      <div class="w-1/2 flex mx-auto p-5">
        <div class="w-4/5 bg-yellow-100">
          <input type="text" placeholder="Add new item..." class="py-2 px-4 w-full bg-gray-200 
          focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-300" v-model="todo">
        </div>
        <div class="w-1/6 ml-auto">
          <button class="w-full h-full font-bold bg-teal-500 text-white 
          rounded focus:outline-none focus:shadow-outline"
          v-on:click="postToDoList()" :disabled="disabled" :class="{ 'hover:bg-teal-600': !disabled }"> 
            Add
          </button>
        </div>
      </div>
      <div class="w-1/2 mx-auto px-5">
            <div class="bg-orange-200 py-2 px-4">
              <span class="font-semibold text-orange-700">Note: </span>
              <span class="text-orange-700">
                Double click to remove
              </span>
          </div>
      </div>
      <div class="w-1/2 mx-auto mt-5 px-5">
        <ul>
          <li v-for="todo in todos" :key="todo._id" v-on:dblclick="deleteToDoList(todo._id)" 
          class="py-2 px-4 hover:bg-gray-100 hover:line-through cursor-pointer">
            {{ todo.todo }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoListService from './Services/ToDoListService'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      todos: [],
      todo: ''
    }
  },
  created: async function(){
    try{
      // retrieve todo
      this.todos = await ToDoListService.getToDoList()
    }catch(err) {
      console.log(err)
    }
  },
  methods: {
    postToDoList: async function(){
      await ToDoListService.postToDoList(this.todo)
      this.todos = await ToDoListService.getToDoList()
      this.todo = ''
    },
    deleteToDoList: async function(id){
      await ToDoListService.deleteToDoList(id)
      this.todos = await ToDoListService.getToDoList()
    }
  },
  computed: {
    disabled: function() {
      return this.todo.length === 0
    }
  }
}
</script>

<style>
  @import './css/output.css';
</style>
