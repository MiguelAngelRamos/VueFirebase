<template>
  <div class="register">
    <h2>Crear cuenta</h2>
    <!-- ui, form, field son clases de sematic -->
    <form class="ui form" @submit.prevent="onRegister">
      <div class="field">
        <input 
          type="text"
          placeholder="Correo electronico"
          v-model="formData.email"
          :class="{error: formError.email}"
        />
      </div>
      <div class="field">
        <input
          type="password"
          placeholder="Contraseña"
          v-model="formData.password"
          :class="{error: formError.password}"
        />
      </div>
      <div class="field">
        <input 
          type="password"
          placeholder="Repetir Contraseña"
          v-model="formData.repeatPassword"
          :class="{error: formError.repeatPassword}"
        />
      </div>
      <button
        type="submit"
        class="ui button positive fluid loading"
      >
        Registrar
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import { userCreated } from "../../utils/firebase";
export default {
  name: "Register",
  setup() {
    const formData = {};
    const formError= ref({});
    const loading = ref(false);
  
    // Tomando las propiedades del objeto formData
    const schemaForm = Yup.object().shape({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], true)
    });
    // Metodos
    const onRegister = async () => {
      console.log(formData)
      formError.value = {};
      try {
        await schemaForm.validate(formData, { abortEarly: false});
        console.log('TODO SALIO BIEN VALIDACIONES OK!!')
        try {
          const {email, password} = formData;
          await userCreated(email, password);
        } catch (error) {
          console.log(error)
        }
      } catch(err) {
        console.log(err)
        err.inner.forEach((error) => {
          formError.value[error.path] = error.message
          // console.log(formError.value);
        })
      }
    }
    return {
      onRegister,
      formData,
      formError
    }
  }
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