<template>

  <div>
  <h2><span class="badge badge-primary" style="text-align: center">Datos del usuario</span></h2>

  <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese nombre..."
    v-model.trim="tarea.nombre"
  />

  <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese apellido..."
    v-model.trim="tarea.apellido"
  />

  <input
    type="email"
    class="form-control my-2"
    placeholder="nombre@example.com..."
    v-model.trim="tarea.email"
  />

  </div>

  <h2><span class="badge badge-primary" style="text-align: center">Consulta por: </span></h2>

  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-1"
      class="form-check-input"
      v-model="tarea.categorias"
      value="agregarPelicula"
    />
    <label for="check-1" class="form-check-label">Agregar peliculas</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="FalloPago"
    />
    <label for="check-2" class="form-check-label">Fallo en el pago</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check-2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="ConsultasVarias"
    />
    <label for="check-2" class="form-check-label">Consultas varias</label>
  </div>
  <h2><span class="badge badge-primary" style="text-align: center">Urgencia de la solicitud</span></h2>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        type="radio"
        id="radio-1"
        class="form-check-input"
        value="urgente"
        v-model="tarea.estado"
      />
      <label for="radio-1" class="form-check-label">Urgente</label>
      
    </div>
    <div class="form-check form-check-inline">
      <input
        type="radio"
        id="radio-2"
        class="form-check-input"
        value="no-urgente"
        v-model="tarea.estado"
      />
      <label for="radio-2" class="form-check-label">No urgente</label>
    </div>
  </div>
  <h2><span class="badge badge-primary" style="text-align: center">Ingrese descripcion</span></h2>
  <div class="mt-2">
    <input type="text" class="form-control" placeholder="Ingrese mensaje..." v-model.number="tarea.mensaje" />
  </div>
  <button
    class="btn btn-dark mt-2 btn-block"
    type="submit"
    :disabled="bloquear"
  >
    Procesar
  </button>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>
