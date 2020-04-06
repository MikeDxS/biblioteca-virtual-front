<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link class="d-flex align-center white--text"
      to='/'
      style="text-decoration:none">
        <v-img
          alt="Logo Libreria"
          class="shrink mr-2"
          contain
          src="https://image.flaticon.com/icons/png/512/29/29202.png"
          transition="scale-transition"
          width="40"
        />

        <h2
          alt="Biblioteca Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="100"
          color="success"
        >Biblioteca Virtual</h2>
      </router-link>

      <v-spacer></v-spacer>
      <router-link v-if="!isAuth" to="/login" class="white--text" style="text-decoration:none">
        Login
      </router-link>
      <router-link v-if="isAuth" to="/anadir-libro" class="white--text" style="text-decoration:none">
        Añadir Libro
      </router-link>
      <router-link v-if="isAuth" to="/reservas" class="white--text ml-10" style="text-decoration:none">
        Mis Reservas
      </router-link>
      <router-link v-if="isAuth" to="/logout" class="white--text ml-10" style="text-decoration:none">
        Logout
      </router-link>
    </v-app-bar>
    <v-content>
      <HelloWorld/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

// let routes = [
//     {
//         path: '/',
//         name: 'home',
//         component: this
//     },
//     {
//         path: '/login',
//         name: 'login',
//         component: Login
//     },
// ]
export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
  }),
  methods: {
    logout(){
      this.$store.commit('setToken','');
    }
  },
  computed: {
    isAuth(){
      return this.$store.getters.getToken !== '';
    }
  },
  beforeMount(){
  }
};
</script>
