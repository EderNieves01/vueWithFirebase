<template>
    <div class="container">
          
  <div class="row">
    <div v-if="error" class="col s12 m7">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
         <h5>email / password Invalidos</h5>
        </div>
      </div>
    </div>
  </div>

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
          <input v-model.trim="pass" id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
     <button class="waves-effect waves-light btn" type="submit"> LogIn </button>
    </form>
  </div>
</div>
        
</template>

<script>
export default {
data: () => ({
    email: "",
    pass: "",
    error: false,
}),
 methods: {
  async  validarForm(){
     if (
         this.pass.length >= 6 &&
          this.email != "") {

            try { //obtenemos el apikye generado en firebase
            const APIkey ="AIzaSyDAJrjwFmjewL3HwvpRmNzKW3oQhdUNaBU";
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIkey}`,
           {
            //metodo post para verificar el usuario
            method: "POST",
            //mandando los input a firebase
            body: JSON.stringify({
                email: this.email,
                password: this.pass,
                //permite obtener el id
                returnSecureToken: true,
            }),
           }
           );
           const data = await res.json();

           if(data.error){
            this.error = true;
           }else{
            this.error = false;
            console.log(data);
           }
                
            } catch (error) {} 
        }
       else {
            return;
        }
    }
 } 
}
</script>