<template>
  <div class="files-list">
    <p class="file-list__not-found">
      No existen archivos en la base datos
    </p>

    <div class="files-list__filesdb" v-for="file of filesList" :key="file.id">
      <p>{{ file.dateString }}</p>
      <!-- <p>info</p> -->
      <div class="action">
        <!-- borrar
        descargar -->
      </div>
    </div>


  </div>

</template>

<script>
import moment from "moment";
import {db, auth} from "@/utils/firebase"; // firebase
export default {
  name: 'FileList',
  props: {
    filesList: Array
  },
  setup() {
    const formatDate = date  => moment(date).format('D [de] MMMM YYYY');

    return {
      formatDate
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