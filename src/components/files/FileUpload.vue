<template>
  <div class="upload-file">
    <button class="ui button primary fluid">Nuevo Archivo</button>

    <form class="ui form upload-file__form" @submit.prevent="handleSubmit">

      <div class="field">
        <label class="ui button" for="file">
          Subir archivo
          <i class="fa-solid fa-file-arrow-up"></i>
        </label>
        <input id="file" type="file" hidden @change="uploadFile"/>
      </div>

      <div class="field">
        <div class="ui calendar">
          <div class="ui input left icon">
            <input type="date" @change="changeDate"/>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'FileUpload',
  setup() {
    const loading = ref(false);
    const error = ref(null);
    const file = ref(null);
    const date = ref(null);

    const uploadFile = (event) => {
      console.log("Eventos del uploadFile");
      console.log(event.target.files[0]);
      let fileTemp = event.target.files[0];
      // type: "application/pdf"
      if(fileTemp?.type === "application/pdf") {
        console.log('correcto es de tipo PDF');
        // Si ese es el caso guardamos en esta referencia todo el objeto completo
        file.value = fileTemp;
      } else {
        file.value = null;
        console.log("ey!! no es de tipo PDF!");
        error.value = "Fichero con extensión no válida."
      }
    };

    const changeDate = (event) => {
      console.log("Eventos del la fecha");
      console.log(event.target.value);
      date.value = event.target.value;
    };

    const handleSubmit = () => {
      console.log('Subiendo archivo...');
    };

    return {
      uploadFile,
      changeDate,
    }
  }
}
</script>

<style>

</style>