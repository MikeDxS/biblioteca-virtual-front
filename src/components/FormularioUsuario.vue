<template>
    <v-card width="350"
    class="mx-auto">
        <v-card-title primary-title>
            Registrarse
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    name="nickname"
                    label="Nickname"
                    id="nNickname"
                    type="text"
                    v-model="nickname"
                ></v-text-field>
                <v-text-field
                    name="correo"
                    label="Correo"
                    id="nCorreo"
                    type="text"
                    v-model="correo"
                ></v-text-field>
                <v-text-field
                    label="Contraseña"
                    :type="showPassword ? 'text': 'password'"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    v-model="password"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="anadir" color="success">Registrarse</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="cancelar" color="error">Cancelar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: 'FormularioUsuario',
    data() {
        return {
            nickname: '',
            correo: '',
            password: '',
            showPassword: false
        }
    },
    methods:{
        anadir(){
            let usuario = {
                nickname: this.nickname,
                email: this.correo,
                password: this.password,
            }
            this.$store.dispatch('createUsuario', usuario);
            this.$router.go(-1);
        },
        cancelar(){
            this.$router.go(-1);
        }
    },
}
</script>