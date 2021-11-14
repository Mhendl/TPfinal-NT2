<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Codigo Compra</th>
        <th scope="col">ID</th>
        <th scope="col">Titulo</th>
        <th scope="col">Precio</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in peliculas" :key="index">
        <th scope="row">{{ item.codComp }}</th>
        <td>{{ item.id }}</td>
        <td>{{ item.titulo }}</td>
        <td> $50 </td>
        <td>
            <button class="btn btn-danger btn-sm" @click="deletePelicula(item.codComp)">Eliminar</button>
        </td>
      </tr>
    </tbody>
    <td></td>
    <td></td>
    <td></td>
    <td>Total: ${{ peliculas.length*50 }} </td>
    <td><router-link class="btn btn-success ml-2 btn-sm" to="/PaginaPago">Pagar</router-link><router-link class="btn btn-primary ml-2 btn-sm" to="/CarritoPre">Volver</router-link> </td>
  </table>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
    data() {
        return {
            precio: 0
        }
    },
  computed: {
    ...mapState(['peliculas']),
  },
  methods: {
      ...mapActions(['deletePelicula']),
  }
};
</script>