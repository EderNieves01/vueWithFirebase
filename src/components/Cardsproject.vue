<template>
    <div class="card horizontal" v-if="data.res.status">
      <div class="card-stacked">
        <div class="card-content">
          <!-- cambiamos el metodo de entra de data.title por data.res.title ya
          que ahora se trata de un objeto dentro de array que en este caso
          es la prop data del array project -->
            <span class="card-title">{{ data.res.title }}</span>
          <p>{{ data.res.description }}</p>
          <!-- recorremos cada langs en el parrafo, ponemos -1 para eliminar la ultima coma
          que los separa -->
          <p>Tecnologias: <span v-for="(lang, i) in data.res.langs" :key="i">
          {{ data.res.langs.length - 1 <= i ? lang : ` ${ lang},  `}}
          </span></p>
        </div>
        <div class="card-action">
            <div class="row">
              <!-- dos puntos para que lo interprete como template `` string -->
             <router-link 
             :to="`/edit-project/${data.id}`"
              class="col s6 waves-effect waves-light btn amber darken-3">
            
                <i class="material-icons">edit</i>
                
            </router-link>
            <!-- cambiamos a button para poder hacer un evento aqui -->
             <button @click="deleteProjects" class="col s6 waves-effect waves-light btn red lighten-1">
               
                 <i class="material-icons">delete</i>
             </button>
            
            </div>
          </div>
      </div>
    </div>      
    
</template>

<script>
export default{
    props: {
        data: Object,
    },
    methods: {
       async deleteProjects() {
        const user = JSON.parse(localStorage.getItem("user"));
        //normativa de los programadores: no se eliminan datos solo se actualizar colocando true a false
        //para mostrar la informacion
        // /${user.localId} after projects para poder acceder a su propio repositorio 
        const id = this.data.id;
     const respuesta = await fetch(`https://crud-vue-5a4b5-default-rtdb.firebaseio.com/projects/${user.localId}/${id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify( { status: false} )
        }
        ); 
        //con esto podemos actualizar la pagina sin necesidad de recargarla
        //elimininando asi los elementos 
        const data = await respuesta.json();
        this.data.res.status = data["status"];
     
        console.log(data)
      }
    }
}
</script>