import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
    filter: 'all',
  },
  getters:{
    filterTodos(state){
      if (state.filter == 'all'){
          return state.todos
      }else if(state.filter == 'active'){
          return state.todos.filter(todo => !todo.completed)
      }else if(state.filter == 'completed'){
          return state.todos.filter(todo => todo.completed)
      }
      return state.todos
    },
    anyTodo(state){
      return state.todos.length > 0 
    },
    activeTodos(state){
      return state.todos.filter(todo => todo.completed === false).length
    },
    anyCompleted(state){
        return state.todos.filter(todo => todo.completed===true).length > 0
    },
    filter(state){
      return state.filter
    }
  
  },
  mutations: {
    deleteTodo(state, id){
      state.todos = state.todos.filter(todo => todo.id != id)
    },
    addTodo(state, todo){
      todo.id = Date.now();
      todo.completed = false
      state.todos.push(todo)
    },
    editTodo(state, todo){
      const index = state.todos.findIndex(item => item.id === todo.id)
      state.todos.splice(index,1, todo)
    },
    updateFilter(state, filter){
      state.filter = filter
    },
    clearCompleted(state){
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
  actions: {
    addTodo(contex,todo){
      contex.commit('addTodo',todo);
    },
    deleteTodo(contex,id){
      contex.commit('deleteTodo',id);
    },
    editTodo(contex, todo){
      contex.commit('editTodo', todo)
    },
    updateFilter(context, filter){
      context.commit('updateFilter',filter)
    },
    clearCompleted(contex){
      contex.commit('clearCompleted')
    }
  },
  modules: {
  }
})
