<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-title primary-title>
            <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    label="Username"
                    prepend-icon="mdi-account-circle"
                    v-model="user"
                ></v-text-field>
                <v-text-field
                    label="Password"
                    :type="showPassword ? 'text': 'password'"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    v-model="pass"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn @click="registrar" color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="login" color="info">Login</v-btn>        
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false,
            user: '',
            pass: '',
            token: '',
            error: ''
        }
    },
    computed: {
    },
    methods: {
        login(){
            const data = {
                nickname: this.user,
                password: this.pass
            }
            const config = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(this.$store.state.apiBase+'/usuarios/login', config)
            .then(res => res.json())
            .then(result => {
                this.token=result.data.token;
                this.$store.commit('setToken',this.token);
                this.$store.commit('setNickname', this.user);
                this.$store.commit('getReservasByPersona');
                this.$router.push('/');
            })
            .catch(error => this.error = error.message);
        },
        registrar(){
            this.$router.push('/create-user');
        }
    },
}
</script>

<style>

</style>