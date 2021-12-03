<template>
  <div class="nav navbar-dark bg-dark" style="margin-bottom: 50px" data-toggle="affix">
    <router-link to="/" class="navbar-brand ml-auto">Home</router-link>
    <router-link to="/peliculas" class="navbar-brand">Peliculas</router-link>
    <router-link to="/contacto" class="navbar-brand">Contacto</router-link>
    <div class="ml-auto" id="wsite-nav-cart-a">
    <router-link class="btn btn-dark" to="/carritopre">Carrito ({{peliculas.length}})</router-link>
    </div>
    </div>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['peliculas'])
  },

};
</script>

<style>
#wsite-nav-cart-a {
    position: relative;
    background: url(http://www.clker.com/cliparts/U/D/n/G/6/h/white-shopping-cart-md.png) 2px 8px no-repeat;
    background-size: 20px;
    padding-left: 30px;
}
</style>