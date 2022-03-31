<template>
  <div class="auth">
    <Register />
  </div>
</template>

<script>

import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

export default {
  name: "AuthView",
  components: {
    Login,
    Register
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