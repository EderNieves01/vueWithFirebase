<template>

  <div id="nav">
    <navbar/>
     <router-view/>
  </div>


</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar }
}
</script>

