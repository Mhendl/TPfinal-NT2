<template>
  <div class="card-body container " style="text-align: center; width: 44rem; margin-bottom: 20px; border: black 1px solid" v-for="(dato, index) in datos" :key="index"> 
    <div class="card container badge badge-danger"><h3> ID Pelicula: {{ dato._id }}</h3> <h3> Titulo: {{ dato.title }} </h3></div>
  <div class="card container" style="width: 50%; margin: 20px auto; padding: 15px"><img :src="dato.poster" width="300" height="300"><p>"{{dato.plot}}"</p></div>
  <button v-on:click="setDato(dato)" class="btn btn-primary">Alquilar</button>
  
   </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'
import ListaPeliculas from '../components/ListaPeliculas.vue'
import axios from 'axios'
const shortid = require("shortid");
export default {
  components:{
  },
  computed: {
      ...mapState(['peliculas'])
    },
  data() {
    return {
      datos: [],
      pelicula: {
        codComp: '',
        id: '',
        titulo: '',
        poster: ''
      }
    }
  },
  methods: {
    getData: function(){
      axios.get('https://tp2videort.herokuapp.com/api/movies').then( response => {
        this.datos = response.data
      })
    },
    ...mapActions(["setPeliculas"]),
    setDato(dato){
      this.pelicula.codComp = shortid.generate();
      this.pelicula.id = dato._id
      this.pelicula.titulo = dato.title
      this.pelicula.poster = dato.poster
      this.setPeliculas(this.pelicula)
      console.log(this.peliculas)
      this.pelicula = {
        codComp: '',
        id: '',
        titulo: '',
        poster: ''
      }

    },
    
    getDato(dato){
      console.log(dato)
    }
  },
  created(){
    this.getData();
  }
  }
</script>

<style>
</style>