import Login from '@/components/Login.vue';
<template>
  <div class="nav">
    <nav>
    <div class="nav-wrapper light-blue">
        <router-link class="brand-logo" to="/">Proyectos</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
        <i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li>
            <router-link v-if="!sesion" to="/">Register</router-link> 
        </li>
        <li>
            <router-link v-if="!sesion" to="/login">Log in</router-link> 
        </li>
        <li>
            <router-link to="/created">Create</router-link> 
        </li>
        <li>
            <router-link class="waves-effect waves-light btn red lighten-2" v-if="sesion" to="/login">
                Proyectos
            </router-link> 
        </li>
        <li>
            <router-link
             class="waves-effect waves-light btn red lighten-2" 
            v-if="sesion" 
            @click="cerrarSesion"
            to="/">
                Cerrar sesion
            </router-link> 
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li>
            <router-link v-if="!sesion" to="/">
              Register
            </router-link> 
        </li>
        <li>
            <router-link v-if="!sesion" to="/login">
              Log in
            </router-link> 
        </li>
        <li>
            <router-link v-if="sesion"  to="/proyectos">
                Proyectos
            </router-link> 
        </li>
        <li>
            <router-link to="/created">
              Create
            </router-link> 
        </li>
        <li>
            <router-link class="waves-effect waves-light btn red lighten-2" 
            v-if="sesion"
            @click="cerrarSesion"
             to="/login">
                Cerrar sesion
            </router-link> 
        </li>
  </ul>
  </div>
</template>

<script>
export default {

mounted(){
    M.AutoInit();
},
methods: {
  cerrarSesion(){
     localStorage.removeItem("user");
  }
},
computed: {
  //eliminacion todo el local storage
  sesion(){
    const user = localStorage.getItem("user");

    if(user){
      return true
    }
    return false
  }

}
}
</script>
