<template>
    <div>
        <v-card width="200">
            <v-card-title primary-title>
                Reservar Libro
            </v-card-title>
            <v-card-text>
                <h2>¿Desea reservar el libro?</h2>
                <v-btn color="success" @click="reservar">Si</v-btn>
                <v-btn color="warning" @click="cancelar">No</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'Reserva',
    data() {
        return {
            user: '',
            libro: {}
        }
    },
    methods: {
        reservar(){
            this.libro = this.$store.getters.getLibro;
            let data = {
                isbn: this.libro.isbn
            }
            this.$store.dispatch('createReserva', data);
            this.$router.go(-1);
        },
        cancelar(){
            this.$router.push('/');
        }
    },
    beforeCreate(){
        if(!this.$store.getters.isThereToken){
            this.$router.push('/');
        }
    }
}
</script>