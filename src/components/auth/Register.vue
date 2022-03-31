<template>
  <div class="register">
    <h2>Crear cuenta</h2>
    <!-- ui, form, field son clases de sematic -->
    <form class="ui form">

      <div class="field">
        <input 
          type="text"
          placeholder="Correo electronico"
        />
      </div>

      <div class="field">
        <input 
          type="password"
          placeholder="Contraseña"
        />
      </div>

      <div class="field">
        <input 
          type="password"
          placeholder="Repetir Contraseña"
        />
      </div>

      <button
        type="submit"
        class="ui button positive fluid"
      >
        Registrar
      </button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .register {
    background-color: white;
    padding: 30px;
    width:400px;
    border-radius: 10px;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }

    // cuando el usuario no ingrese un dato correcto cambiar el input a rojo
    
    form {
      input.error {
        border-color: #faa;
        background-color: #ffeded;
      }
    }
  }
</style>