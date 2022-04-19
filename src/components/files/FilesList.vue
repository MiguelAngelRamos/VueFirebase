<template>
  <div class="files-list">
    <p v-if="filesList?.length == 0" class="file-list__not-found">
      No existen archivos en la base datos
    </p>

    <div class="files-list__filesdb" v-for="file of filesList" :key="file.id">
      <p>{{  formatDate(file.dateString) }}</p>
      <!-- <p>{{file.fileUrl}}</p> -->
      <!-- <p>info</p> -->
      <div class="action">
        <!-- borrar descargar -->
        <a :href="file.fileUrl" class="ui button positive" target="_blank">Descargar</a>
        <button class="ui button red" @click="deleteFile(file.id)">Eliminar</button>
      </div>
    </div>


  </div>

</template>

<script>
import moment from "moment";
import "moment/locale/es";
import {db, auth} from "@/utils/firebase"; // firebase

export default {
  name: 'FileList',
  props: {
    filesList: Array,
    getFiles: Function
  },
  setup(props) {
    // const { getFiles } = props;
    const formatDate = date  => moment(date).format('D [de] MMMM YYYY');

    // borrar de la base de datos
    const deleteFile = async (id) => {
      console.log('Eliminando archivo' + id);
      try {
        await db.collection(auth.currentUser.uid).doc(id).delete();
        // getFiles();
        props.getFiles();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      formatDate,
      deleteFile
    }
    
  }
}
</script>

<style lang="scss" scoped>
  .files-list {
    &__not-found {
      text-align: center;
      font-size: 20px;
    }

    &__filesdb {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 15px 0;
      p {
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

  }
</style>