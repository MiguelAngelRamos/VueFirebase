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

<style>

</style>