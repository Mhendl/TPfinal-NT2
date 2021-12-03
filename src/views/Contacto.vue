<template>
<h2 style="text-align: center"><span class="badge badge-primary">Formulario de Contacto</span></h2>
  <div class="border" style="padding: 50px">
    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea" />
    </form>
    <hr />
    <ListaTareas />
  </div>
</template>

<script>
import ListaTareas from "../components/ListaTareas.vue";
import Input from "../components/Input.vue";
import { mapActions } from "vuex";
const shortid = require("shortid");

export default {
  name: "Contacto",
  components: {
    Input,
    ListaTareas,
  },
  data() {
    return {
      tarea: {
        id: "",
        nombre: "",
        apellido: "",
        email: "",
        categorias: [],
        estado: "",
        mensaje: "",
      },
    };
  },
  methods: {
    ...mapActions(["setTareas"]),
    procesarFormulario() {
      console.log(this.tarea);
      if (this.tarea.nombre.trim() === "") {
        console.log("Campo vacio");
        return;
      }
      console.log("no esta vacio");

      this.tarea.id = shortid.generate();
      console.log(this.tarea.id);

      this.setTareas(this.tarea);

      this.tarea = {
        id: "",
        nombre: "",
        apellido: "",
        email: "",
        categorias: [],
        estado: "",
        mensaje: "",
      };
    },
  },
};
</script>

<style>
</style>