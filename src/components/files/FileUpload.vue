<template>
  <div class="upload-file">
    <button class="ui button primary fluid" @click="showCloseOpenForm">Nuevo Archivo</button>

    <form 
    class="ui form upload-file__form" 
    @submit.prevent="handleSubmit"
    :class="{open: showForm}"
    >

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

      <button class="ui button positive fluid" type="submit" :class="{loading}">Subir archivo</button>
      <p v-if="error">{{error}}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { auth, storage, db } from "@/utils/firebase";

export default {
  name: 'FileUpload',
  setup() {
    let showForm = ref(false);
    const loading = ref(false);
    const error = ref(null);
    const file = ref(null);
    const date = ref(null);

    // mostrar o ocultar el formulario
    const showCloseOpenForm = () => {
      console.log('llamando')
      showForm.value = !showForm.value;
    }
    const uploadFile = (event) => {
      error.value = null;
      // console.log("Eventos del uploadFile");
      // console.log(event.target.files[0]);
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

    const handleSubmit = async () => {
      // console.log('Subiendo archivo...');
      if(file.value && date.value) {
        loading.value = true;
        try {
          const nameFile = uuidv4(); // nos devuelve un identificador unico
          /**
           * ref = es la carpeta donde vamos a guardar el archivo
           * child = el nombre del archivo que va estar dentro de la carpeta.
           * put = aqui vamos a indentificar el archivo que vamos subir
           */
          // Se sube el archivo
          await storage.ref(auth.currentUser.uid).child(`${nameFile}.pdf`).put(file.value);
          // Obtener la url del fichero
          const fileUrl = await storage.ref(`${auth.currentUser.uid}/${nameFile}.pdf`).getDownloadURL();
          console.log(fileUrl);
          // Crear un documento en la base de datos
          await db.collection(auth.currentUser.uid).add({
            fileUrl: fileUrl,
            date: new Date(date.value), // va estar en formato de javascript
            dateString: date.value
          })

        } catch (error) {
          console.log(error);
        }
        // el archivo ya se subio a la base de datos
        loading.value = false;
        // resetear el formulario
        file.value = null;
        date.value = null;
      } else {
        console.log('Suba un archivo pdf y seleccione la fecha');
      }
    };

    return {
      uploadFile,
      changeDate,
      handleSubmit,
      error,
      showCloseOpenForm,
      showForm
    }
  }
}
</script>

<style lang="scss" scoped>
  .upload-file {
    &__form {
      border: 1px solid #d4d4d4;
      border-radius: 10px;
      height: 0px;
      overflow: hidden;
      transition: 0.5s ease;

      &.open{
        height: 200px;
        margin-top: 20px;
        padding: 20px;
      }
    }
  }

</style>