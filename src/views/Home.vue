<template>
<HomeComponent />
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue'

export default {
  name: "Home",
  data() {
    return {
      datos: []
    }
  },
  components: {
    HomeComponent
  },
  
};
</script>
