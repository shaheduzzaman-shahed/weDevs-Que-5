<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/weDevs.png" height="250" width="250">
    <HelloWorld msg="weDevs Assignment Que:5"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
