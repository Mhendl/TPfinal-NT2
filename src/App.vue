<template>
  <Navbar />
  <div class="container">
  <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarLocalStorage', 'cargarLocalStorageP'])
  },
  created(){
    this.cargarLocalStorage()
    this.cargarLocalStorageP()
  }
}
</script>

