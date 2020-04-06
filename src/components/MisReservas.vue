<template>
    <v-simple-table>
        <thead>
            <tr>
                <th>Usuario</th>
                <th>Libro(ISBN)</th>
                <th>Fecha de Reserva</th>
                <th>Fecha de Devolucion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(reserva, index) in reservas" :key="index">
                <td>{{reserva.k_nickname}}</td>
                <td>{{reserva.k_isbn}}</td>
                <td>{{reserva.d_fecha_reserva}}</td>
                <td>{{reserva.d_fecha_devolucion}}</td>
            </tr>
        </tbody>
    </v-simple-table>
</template>
<script>
export default {
    name: 'MisReservas',
    data() {
        return {
            reservas: []
        }
    },
    beforeMount(){
        if(!this.$store.getters.isThereToken){
            this.$router.go(-1);
        }
        this.reservas=this.$store.getters.getReservas;
    },
    created(){
        this.reservas=this.$store.getters.getReservas;
    }
}
</script>