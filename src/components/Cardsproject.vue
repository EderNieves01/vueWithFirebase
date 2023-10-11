<template>

<h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
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
             <a class="col s6 waves-effect waves-light btn red lighten-1">
               
                 <i class="material-icons">delete</i>
             </a>
            
            </div>
          </div>
      </div>
    </div>      
    
</template>

<script>
export default{
    props: {
        data: Object
    }
}
</script>