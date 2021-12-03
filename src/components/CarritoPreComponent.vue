<template>
  <div class="card container" style="margin: 10%">
      <table class="table">
    <thead>
      <tr>
        <th scope="col">Codigo Compra</th>
        <th scope="col">ID</th>
        <th scope="col">Titulo</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in peliculas" :key="index">
        <th scope="row">{{ item.codComp }}</th>
        <td>{{ item.id }}</td>
        <td>{{ item.titulo }}</td>
        <td> $200 </td>
      </tr>
    </tbody>
    <td></td>
    <td></td>
    <td></td>
    <td class="">Total: ${{ peliculas.length*200 }} <router-link class="btn btn-success ml-2 btn-sm" to="/PaginaPago">Pagar</router-link><router-link class="btn btn-warning ml-2 btn-sm" to="/Carrito">Editar</router-link></td>
  </table>
        </div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['peliculas'])
    }

}
</script>

<style>

</style>