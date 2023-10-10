<template>
<div class="container">
    <div class="row">
        
            <router-link to="/proyectos"
            class="col s12 waves-effect waves-light btn amber darken-3">
                <i class="material-icons">arrow_back</i>
            Regresar a la lista
            </router-link>
         
    </div>
   

   <div class="row">
    
    <form class="col s12" @submit.prevent="createdProjects">
      <div class="row">
        <div class="input-field col s12">
            <input id="first_name" type="text" class="validate"
            v-model="project.title">
          <label for="first_name">Nombre del proyecto</label>
        </div>
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate"
          v-model="project.description">
          <label for="last_name">Descripcion del proyecto</label>
        </div>
        <p>
            <label>
        <input type="checkbox"  v-model="project.langs" value="Html"/>
        <span>Html</span>
      </label> 
    </p>
    <p>
            <label>
        <input type="checkbox" v-model="project.langs" value="Css"/>
        <span>Css</span>
      </label> 
    </p>
    <p>
            <label>
        <input type="checkbox" v-model="project.langs" value="Javascript"/>
        <span>Javascript</span>
      </label> 
    </p>
    <p>
        
            <label>
        <input type="checkbox" v-model="project.langs" value="Vue"/>
        <span>Vue</span>
      </label> 
    </p>
       
        <button class="btn waves-effect waves-light col s12" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            project:{
                title: " ",
                description: " ",
                langs: [],
                status: true
            }
        }
    },
    methods: {
       
        async createdProjects() {
          
           const data = await fetch("https://crud-vue-5a4b5-default-rtdb.firebaseio.com/projects.json",//projects.json crea en firebase,
           {
            //creamos el metodo post para ingresar datos en firebase
            method: "POST",
            //mandamos el objeto en formato objeto json de javascript
            body: JSON.stringify(this.project)
            // project: this.project
           }
           )
           console.log(data)
        //    const res = await data.json()
           
            
        }
    }
}
</script>