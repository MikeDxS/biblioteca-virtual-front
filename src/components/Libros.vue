<template>
    <v-container>
        <v-row no-gutters>
            <Libro v-for="(item, index) in libros" :key="index"
            :isbn="parseInt(item.k_isbn)"
            :titulo="item.n_titulo"
            :autor="item.n_autor"
            :portada="item.n_portada"
            :stock="parseInt(item.v_stock)"/>
        </v-row>
    </v-container>
</template>
<script>
import Libro from "./Libro";
export default {
    name: 'Libros',
    data() {
        return {
            isLogin: false
        }
    },
    computed: {
        libros(){
            return this.$store.state.libros;
        }
    },
    beforeMount() {
        this.$store.commit('getLibros');
    },
    components: {
        Libro,
    }
}
</script>