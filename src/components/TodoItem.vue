<template>
    <div class="todo-item animated bounce fast">
    <div class="todo-items">
        <input type="checkbox" class="todo-check" v-model="completed" @change="doneEdit">
        <div v-if="!editing" class="todo-item-label" v-bind:class="{completed : completed}" @dblclick="editTodo">{{todo.name}}</div>
        <input v-else v-focus class="todo-item-edit" type="text" v-model="name" @blur="doneEdit"  @keyup.enter="doneEdit">
    </div>
    <div @click="removeTodo(todo.id)" class="remove-item">&times;</div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props:{
        todo:{
            type: Object,
            required: true
        }
    },
    data(){
        return {
            id: this.todo.id,
            name: this.todo.name,
            completed: this.todo.completed,
            editing: false,
            oldTodo: '',
        }
    },
    watch:{
        todo(){
            this.id = this.todo.id,
            this.name = this.todo.name,
            this.completed = this.todo.completed
        }
    },
    methods:{
       removeTodo(id) {
                this.$store.dispatch('deleteTodo',id)
            },
        editTodo(){
            this.oldTodo = this.name
            this.editing=!this.editing
            },
        doneEdit(){
           if (this.name.trim().length === 0){
                this.name = this.oldTodo
            }
            this.editing = false
            this.$store.dispatch('editTodo', {
            id: this.id,
            name: this.name,
            completed: this.completed,
            })
        },
        cancelEdit(){
            this.title = this.beforeEdit
            this.editing = false
        },
    },
    directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
}
</script>

<style lang="scss">
    .todo-item{
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .remove-item{
        opacity: 0;
    }
    &:hover{
        .remove-item{
        cursor: pointer;
        /*margin-left: 14px;*/
        font-size: 22px;
        opacity: 100%;
        &:hover{
        font-size: 26px;
            color: red;
        }
    }
    }
     .todo-items{
        display: flex;
        align-items: center;
    }
    .todo-item-label{
        padding: 10px;
        border: 1px solid seashell;
        margin-left: 12px;
        font-size: 20px;
    }
    .todo-item-edit{
        width: 100%;
        font-size: 22px;
        margin-left: 12px;
        padding: 10px;
        border: 1px solid blue;
        &focus{
            outline: none;
        }
    }
    .completed{
        text-decoration: line-through;
    }
    .todo-check{ 
        margin-left: 10px;
    } 

}
</style>