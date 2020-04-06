<template>
    <div>
        <h2>{{libro.titulo}}</h2>
        <v-img
        :src="libro.portada"
        class="float-left"
        width="200"
        />
        <p>Autor: {{libro.autor}}</p>
        <p>ISBN: {{libro.isbn}}</p>
        <p>Cantidad de libros: {{libro.stock}}</p>
        <div v-if="isAuth">
            <v-btn color="success" @click="reservar">Reservar</v-btn>
            <v-btn color="success" @click="editar">Editar</v-btn>
        </div>

   </div>
</template>
<script>
export default {
    name: 'InforLibro',
    data() {
        return {
            libro: {},
            token: ''
        }
    },
    computed: {
        isAuth(){
            return this.$store.getters.getToken !== '';
        }
    },
    methods: {
        reservar(){
            this.$router.push('/reservar');
        },
        editar(){
            this.$router.push('/editar');
        }
    },
    beforeMount(){
        this.libro = this.$store.getters.getLibro;
        this.token = this.$store.getters.getToken;
    }
}
</script>