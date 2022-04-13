<template>
  <form class="ui form change-email" @submit.prevent="onChangeEmail">
    <div class="field">
      <label for="email"> Nuevo Email </label>
      <input 
        id="email"
        type="text" 
        placeholder="Nuevo email"
        v-model="formData.email"
      />
    </div>

    <div class="field">
      <label for="password">Contraseña Actual </label>
      <input
        id="password" 
        type="password"
        placeholder="Contraseña Actual"
        v-model="formData.password"
        />
    </div>
    <!-- <span> error </span> -->
    <div class="btn-block">
      <button class="ui button primary" type="submit">Actualizar</button>
    </div>

  </form>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
// import { auth } from '../../utils/firebase';
import { auth } from '@/utils/firebase';

export default {
  name: 'ChangeEmail',
  setup() {
    let formData = {};
    const formError = ref({});
    const messageError = ref("");
    const loading = ref(false);

    // Reglas de validación 
    const schemaForm = Yup.object().shape({

    })

    const onChangeEmail = () => {
     
      const { email, password } = formData;
      console.log(email);
      console.log(password);
    }
    return {
      formData,
      onChangeEmail
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui.form.change-email {
    margin: 5px 0px;
    .btn-block {
      display: flex;
      justify-content: center;
    }
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
</style>