<template>
  <div class="auth">
    <Register />
    <!-- <button ref="buttonRef">boton de referencia</button> -->
  </div>
</template>

<script>

import { ref, watch } from "vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

export default {
  name: "AuthView",
  components: {
    Login,
    Register
  },
  setup() {
    // const buttonRef = ref(null);
    // watch(buttonRef, (value) => {
    //   console.log(value);
    // })
    return {
      // buttonRef
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    background: linear-gradient(0deg, rgb(119, 118, 118) 0%,rgb(197, 193, 193) 100%)
  }
</style>