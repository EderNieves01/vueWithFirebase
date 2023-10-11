<template>

<h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
            <span class="card-title">{{ data.title }}</span>
          <p>{{ data.description }}</p>
          <!-- recorremos cada langs en el parrafo, ponemos -1 para eliminar la ultima coma
          que los separa -->
          <p>Tecnologias: <span v-for="(lang, i) in data.langs" :key="i">
          {{ data.langs.length - 1 <= i ? lang : ` ${ lang},  `}}
          </span></p>
        </div>
        <div class="card-action">
            <div class="row">
             <router-link to="/edit" class="col s6 waves-effect waves-light btn amber darken-3">
            
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