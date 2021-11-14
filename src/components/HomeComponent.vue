<template>
<div class="container">
    <h1>Peliculas para Alquilar</h1>
    <div v-for="(dato, index) in datos" :key="index" class="card" style="width: 18rem;">
      <router-link to="/peliculas">  <img class="card-img-top" :src="dato.poster" />  </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ dato.title }}</h5>
        <p class="card-text">{{dato.plot}}</p>
        </div> 
     </div> 
  </div>
</template>

<script>
import axios from "axios";
import { computed } from "@vue/reactivity";
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      datos: []
    }
  },
  components: {},
  computed: {
    ...mapState(["peliculas"]),
  },
  methods: {
    getData: function () {
      axios
        .get("https://tp2videort.herokuapp.com/api/movies")
        .then((response) => {
          this.datos = response.data;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
