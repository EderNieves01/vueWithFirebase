<template>
  <div class="home">
 
  </div>
   <register/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register.vue'

export default {
  components: { Register },
  name: 'HomeView',
}
</script>
