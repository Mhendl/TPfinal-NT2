import { compileTemplate } from '@vue/compiler-sfc'
import { createStore } from 'vuex'
import router from '../router'


export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    },
    peliculas: [],
    pelicula: {
      codComp: '',
      id: '',
      titulo: '',
      poster: ''
    }
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload){
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload){
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
      router.push('/contacto')
    },
    cargarP(state, payload){
      state.peliculas = payload
    },
    setP(state, payload){
      state.peliculas.push(payload)
      localStorage.setItem('peliculas', JSON.stringify(state.peliculas))
    },
    eliminarP(state, payload){
      state.peliculas = state.peliculas.filter(item => item.codComp !== payload)
      localStorage.setItem('peliculas', JSON.stringify(state.peliculas))
    },
    finalizarC(){
      localStorage.removeItem('peliculas')
      location. reload() 
    },
  },
  actions: {
    cargarLocalStorage({ commit }){
      if(localStorage.getItem('tareas')){
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }
      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({ commit }, tarea){
      commit('set', tarea)
    },
    deleteTareas({ commit }, id){
      commit('eliminar', id)
    },
    setTarea({ commit }, id){
      commit('tarea', id)
    },
    updateTarea({ commit}, tarea){
      commit('update', tarea)
    },
    cargarLocalStorageP({ commit }){
      if(localStorage.getItem('peliculas')){
        const peliculas = JSON.parse(localStorage.getItem('peliculas'))
        commit('cargarP', peliculas)
        return
      }
      localStorage.setItem('peliculas', JSON.stringify([]))
    },
    setPeliculas({ commit }, pelicula){
      commit('setP', pelicula)
    },
    deletePelicula({ commit }, id){
      commit('eliminarP', id)
    },
    finalizarCompra({ commit }){
      commit('finalizarC')
      console.log('Estoy haciendo algo')
    },
  },
  modules: {
  }
})
