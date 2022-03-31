<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>

    <form class="ui form" @submit.prevent="funcion">
      <div class="field">
        <input type="text" placeholder="Correo Electronico" />
      </div>

      <div class="field">
        <input type="password" placeholder="Contraseña" />
      </div>

      <button type="submit" class="ui button positive fluid">Entrar</button>
      <p @click="changeForm">Crear una cuenta</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    changeForm: Function
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
  width: 400px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  form {
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }

  p {
    text-align: center;
    margin-top: 30px;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>