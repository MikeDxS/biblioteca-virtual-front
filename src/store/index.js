import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libros: [],
    apiBase: 'https://vast-citadel-12395.herokuapp.com/api/v1',
    token: '',
    libro: {},
    nickname: '',
    reservas: []
  },
  mutations: {
    getLibros(state){
      fetch(state.apiBase+'/libros/get-all')
      .then(res => res.json())
      .then(data => {
        state.libros = data.message;
      })
      .catch(error => {
        alert('Ha ocurrido un error '+ error.message);
      });
    },
    getReservasByPersona(state){
      let url = state.apiBase+'/reservas/getByPersona';
      const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': state.token
        }
      };
      fetch(url, config)
      .then(res => res.json())
      .then(data => {
        state.reservas = data.message;
      })
      .catch(error => {
        alert(error);
      })
    },
    setToken(state, token){
      state.token = token;
    },
    setLibro(state, libro){
      state.libro = libro;
    },
    setNickname(state, nickname){
      state.nickname = nickname;
    },
    setReservas(state, reservas){
      state.reservas = reservas;
    }
  },
  actions: {
    updateLibro(context, libro){
      let url = context.state.apiBase+'/libros/update';
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('token', context.state.token);
      const config = {
        method: 'PUT',
        body: JSON.stringify(libro),
        headers
      };
      fetch(url, config)
      .then(res => res.json())
      .then(data =>{
        context.commit('getLibros');
        alert(data.message);
      })
      .catch(error => {
        alert('Ha ocurrido un error '+ error.message);
      })
    },
    createReserva(context, data){
      let url = context.state.apiBase + '/reservas/create';
      const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'token': context.state.token
        }
      };
      fetch(url, config)
      .then(res => res.json())
      .then(result => {
        alert(result.message);
        context.commit('getReservasByPersona');
      })
      .catch(error => {
        alert(error);
      })
    },
    createLibro(context, libro){
      let url = context.state.apiBase + '/libros/create';
      const config = {
        method: 'POST',
        body: JSON.stringify(libro),
        headers: {
            'Content-Type': 'application/json',
            'token': context.state.token
        }
      };
      fetch(url, config)
      .then(res => res.json())
      .then(result => {
        alert(result.message);
        context.commit('getLibros');
      })
      .catch(error => {
        alert(error.message);
      })
    },
    createUsuario(context, usuario){
      let url = context.state.apiBase + '/usuarios/create';
      const config = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
      };
      fetch(url, config)
      .then(res => res.json())
      .then(result => {
        alert(result.message);
      })
      .catch(error => {
        alert(error);
      })
    }
  },
  modules: {
  },
  getters: {
    getToken(state){
      return state.token;
    },
    getLibro(state){
      return state.libro;
    },
    isThereToken(state){
      return state.token !== '';
    },
    getReservas(state){
      return state.reservas;
    }
  },
})
