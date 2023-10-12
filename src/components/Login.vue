<template>
    <div class="container">
  <div class="row">
    <form @submit.prevent="" class="col s12">
      <div class="row">
        <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div> 
      </div>
     
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="passwordConfirmation" type="password" class="validate">
          <label for="passwordConfirmation">Confirm Password</label>
        </div>
      </div>
     <button class="waves-effect waves-light btn" type="submit"> Register </button>
    </form>
  </div>
</div>
        
</template>

<script>
export default {

}
</script>

<style>

</style>