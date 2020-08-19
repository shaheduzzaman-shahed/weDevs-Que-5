<template>
  <div class="todo-footer">
    <p>{{activeTodos}} {{activeTodos > 1 ? this.item = 'items' : this.item = 'item'}} left</p>

    <div>
        <button :class="{active : filter=='all'}" @click="changeFilter('all')">All</button>
        <button :class="{active : filter=='active'}" @click="changeFilter('active')">Active</button>
        <button :class="{active : filter=='completed'}" @click="changeFilter('completed')">Completed</button>
    </div>
    <div>
    <button v-if="anyCompleted" @click="clearCompleted">Clear Completed</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    data(){
        return{
            item: ''
        }
    },


    methods:{
        changeFilter(data){
            this.$store.dispatch('updateFilter', data)
        },
        clearCompleted(){
            this.$store.dispatch('clearCompleted')
        }
    },
    computed:{
        activeTodos(){
           return this.$store.getters.activeTodos
       },
       filter(){
           return this.$store.getters.filter
       },
       anyCompleted(){
           return this.$store.getters.anyCompleted
       }
    }
}
</script>

<style lang="scss">
    .todo-footer{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .active{
        background-color: seashell;
    }
    button{
        padding: 2px;
    }
</style>