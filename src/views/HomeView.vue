<template>
  <Layout>
    <div class="files">
      <h1>Sistema de registro de archivos</h1>

      <!-- Necesitamos componente para cargar un archivos -->
      <FileUpload />
      <!-- Mostrar los archivos -->
      <FilesList :filesList="showFiles"/>
    
    </div>
  </Layout>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import { onMounted } from "vue";
import Layout from "../layout/Layout.vue";
import FileUpload from "@/components/files/FileUpload.vue";
import FilesList from "@/components/files/FilesList.vue";
import {db, auth} from "@/utils/firebase"; // firebase
export default {
  name: 'HomeView',
  components: {
    Layout,
    FileUpload,
    FilesList
  },
  setup() {
    const showFiles = ref(null);
    onMounted( () => {
      // llamar una funcion que obtenga la informacion desde BD
      getFiles();
    });

    // FUNCION QUE TRAE LA INFO
    const getFiles = async () => {
      const response = await db.collection(auth.currentUser.uid).orderBy("date", "desc").get();
      // console.log(response)
      const result = [];

      response.docs.forEach( doc => {
        console.log(typeof doc.data()); // es un objeto
        console.log(doc.id);

        // un objeto llamado data
        const data = doc.data();
        data.id = doc.id;
        result.push(data);
      })
      console.log(result);
      showFiles.value = result; // arreglo
    }
    return {
      showFiles
    }
  }
}
</script>

<style lang="scss" scoped>
  .files {
    width: 400px;
    margin: 50px auto;
  }
</style>