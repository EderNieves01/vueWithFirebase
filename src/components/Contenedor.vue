<template>
  <div class="row">
    <div class="col s12 m7">
    <Cardsproject :data="projects"/>
  </div>
  </div>
</template>

<script>
import Cardsproject from './Cardsproject.vue';

export default {
    data: () =>({
      projects: [],
    }),
    components: { Cardsproject },
    mounted(){
        this.getProjects();
    },
    methods: {
     async getProjects() {
           const data = await fetch("https://crud-vue-5a4b5-default-rtdb.firebaseio.com/projects.json")
           const res = await data.json()
          
             console.log(data)
        }
    }
}
</script>

<style>

</style>