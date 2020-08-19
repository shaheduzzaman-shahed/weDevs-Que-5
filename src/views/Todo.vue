<template>
  <div >
    <div class="todo-header">todos</div>
    <div class="todo-container">
    <input type="text" class="todo-input" placeholder="what needs to be done?" v-model="newTodo" @keyup.enter="addTodo"/>

    <TodoItem v-for="(todo, index) in filterTodos" :key="index" :todo="todo"></TodoItem>

    <hr>
    <TodoFooter v-if="anyTodo"></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import TodoFooter from '../components/TodoFooter'
export default {
    name: 'Todo',
    components:{
        TodoItem,
        TodoFooter
    },
    data() {
        return{
            newTodo: '',
            name: '',
        }
   },
   methods:{
       addTodo(){
           if(this.newTodo.trim().length === 0){
               return
            }else{
               this.$store.dispatch('addTodo',{name: this.newTodo})
           }
           this.newTodo=''
       }
   },
   computed:{
       filterTodos(){
           return this.$store.getters.filterTodos
       },
       anyTodo(){
           return this.$store.getters.anyTodo
       },       
   }

};
</script>

<style lang="scss">
.todo-container {
  background-color: whitesmoke;
  width: 550px;
  padding: 10px;
}
.todo-header {
  color: red;
  opacity: 25%;
  font-size: 60px;
}
.todo-input{
    width: 500px;
    padding: 10px 16px;
    font-size: 16px;
    margin-bottom: 14px;
    &:focus{
        box-shadow: 5px 5px 2px lavender;
        outline: 0;
    }
}
</style>