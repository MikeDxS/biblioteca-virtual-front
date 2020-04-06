<template>
    <div>
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title primary-title>
                Logout
            </v-card-title>
            <v-card-text>
                <p>¿Seguro desea salir?</p>
            </v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="salir" class="mx-auto">Si</v-btn>
                <v-btn color="error" @click="noSalir" class="mx-auto">No</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    methods: {
        salir(){
            this.$store.commit('setToken','');
            this.$router.push('/');
        },
        noSalir(){
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