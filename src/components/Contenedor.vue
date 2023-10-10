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
          
           //recorremos el array projects y le agregamos la respuesta con su indice
            for(let i in res){
              this.projects.push(res[i])
            }
            
        }
    }
}
</script>

<style>

</style>