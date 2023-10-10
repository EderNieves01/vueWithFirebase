<template>

<h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
            <span class="card-title">{{ data.name }}</span>
          <p>{{ data.description }}</p>
          <p>Tecnologias: {{ data.langs }}</p>
        </div>
        <div class="card-action">
            <div class="row">
             <router-link to="/created" class="col s6 waves-effect waves-light btn amber darken-3">
            
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
        data: Object,
    }
}
</script>