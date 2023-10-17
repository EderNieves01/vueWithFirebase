<template>
    <div class="container">
  <div class="row">
    <form @submit.prevent="validarForm()" class="col s12">
      <div class="row">
        <div class="row">
        <div class="input-field col s12">
            <!-- el .trim no lee los espacios al inicio -->
          <input v-model.trim="email" id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div> 
      </div>
     
      <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="pass1" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input v-model.trim="pass2" id="passwordConfirmation" type="password" class="validate">
          <label for="passwordConfirmation">Confirm Password</label>
        </div>
      </div>
     <button class="waves-effect waves-light btn" type="submit"> Register </button>
    </form>
  </div>
</div>
        
</template>

<script>
//importamos las rutas
import router from "../router/index"

export default {
data: () => ({
    email: "",
    pass1: "",
    pass2: ""
}),
 methods: {
  async  validarForm(){
     if (this.pass1 === this.pass2 &&
         this.pass1.length >= 6 &&
          this.email != "") {
            //obtenemos el apikye generado en firebase
            const APIkey ="AIzaSyDAJrjwFmjewL3HwvpRmNzKW3oQhdUNaBU";
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIkey}`,
           {
            //metodo post para agregar usuarios
            method: "POST",
            //mandando los input a firebase
            body: JSON.stringify({
                email: this.email,
                password: this.pass1,
                //permite obtener el id
                returnSecureToken: true,
            }),
           }
           )
           console.log(await res.json());
           //llamamos la importacion y le hacemos un push del nombre de la rutagit add .
           
           router.push("/login")
        }
       else {
            return console.log("contrasenas invalidas")
        }
    }
 }
}
</script>

