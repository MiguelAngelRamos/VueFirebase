<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>

    <form class="ui form" @submit.prevent="onLogin">
      <div class="field">
        <input
          type="text"
          placeholder="Correo Electronico"
          v-model="formData.email"
        />
      </div>

      <div class="field">
        <input
          type="password"
          placeholder="Contraseña"
          v-model="formData.password"
        />
      </div>

      <button type="submit" class="ui button positive fluid">Entrar</button>
      <p @click="changeForm">Crear una cuenta</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { login } from "../../utils/firebase";
import * as Yup from "yup";
export default {
  name: "Login",
  props: {
    changeForm: Function,
  },
  setup() {
    const formData = {};
    const formError = ref({}); // formError.value
    const loading = ref(false);

    // LAS VALIDACIONES
    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true).min(6, true).max(12, true),
    });

    const onLogin = async () => {
      // console.log(formData)
      formError.value = {};
      try {
        await schemaForm.validate(formData, { abortEarly: false});
        console.log("TODO OK DATOS CORRECTOS")
      } catch (error) {
        console.log(error)
      }
    };
    return {
      formData,
      onLogin
    };
  },
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