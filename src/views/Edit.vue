<template>
    <div class="container">
        <div class="row">
            
                <router-link to="/proyectos"
                class="col s12 waves-effect waves-light btn amber darken-3">
                    <i class="material-icons">arrow_back</i>
                Regresar a los proyectos
                </router-link>
             
        </div>
       
    
       <div class="row">
        
        <form class="col s12" @submit.prevent="updateProjects">
          <div class="row">
            <div class="input-field col s12">
                <input id="first_name" type="text" class="validate"
                placeholder="Nombre del proyecto"
              v-model="project.title"> 
              <label for="first_name"></label>
            </div>
            <div class="input-field col s12">
              <input id="last_name" type="text" class="validate"
              placeholder="Descripcion del proyecto"
              v-model="project.description">
              <label for="last_name"></label>
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
        <i class="material-icons right" to="/proyectos">send</i>
        
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
                project: { }, //colocamos el objeto vacio para llenarlo con el objeto obtenido
                //de la respuesta en getProjects
                //creamos el id del objeto a editar
                id: this.$route.params.id
            }
        },
        mounted(){
          this.getProjects();
        },
        methods: {
           
            async getProjects() {
              // con esto this.$route.params.id obtenemos la ruta los parametros y el id que necesitamos
            //mandamos el id como string en la ruta ${id} usando ``
              
                const data = await fetch(
               `https://crud-vue-5a4b5-default-rtdb.firebaseio.com/projects/${this.id}.json`);

           const res = await data.json();
           
           this.project = res;
           
             },

             async updateProjects() {
          
          await fetch(`https://crud-vue-5a4b5-default-rtdb.firebaseio.com/projects/${this.id}.json`,//projects.json crea en firebase,
          {
      
           method: "PATCH", //actualiza los datos en firebase
           //mandamos el objeto en formato objeto json de javascript
           body: JSON.stringify(this.project)
           // project: this.project
          }
          );
       },
        },
    };
    </script>