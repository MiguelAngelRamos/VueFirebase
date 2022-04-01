<template>
  <Layout>
    <h1>Esta es la Home</h1>
    <button @click="logout">Cerrar Sesión</button>
  </Layout>
</template>

<script>
// @ is an alias to /src

import {  userSignOut } from "../utils/firebase";
import Layout from "../layout/Layout.vue";
export default {
  name: 'HomeView',
  components: {
    Layout
  },
  setup() {
    const logout = () => userSignOut();

    return {
      logout
    }
  }
}
</script>
