<template>
  <div>
    <h1>Esta es la Home</h1>
    <button @click="logout">Cerrar Sesión</button>
  </div>
</template>

<script>
// @ is an alias to /src

import {  userSignOut } from "../utils/firebase";
export default {
  name: 'HomeView',
  components: {
   
  },
  setup() {
    const logout = () => userSignOut();

    return {
      logout
    }
  }
}
</script>
