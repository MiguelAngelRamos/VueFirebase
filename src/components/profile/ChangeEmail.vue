<template>
  <form class="ui form change-email">

    <div class="field">
      <label for="email"> Nuevo Email </label>
      <input 
        id="email"
        type="text" 
        name="email" 
        placeholder="Nuevo email"
      >
    </div>

    <div class="field">
      <label for="">Contraseña Actual </label>
      <input 
        type="password"
        name="password"
        placeholder="Contraseña Actual"
        >
    </div>
    <!-- <span> error </span> -->
    <div class="btn-block">
      <button class="ui button primary" type="submit">Actualizar</button>
    </div>

  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>