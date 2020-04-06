<template>
    <v-card class="mx-auto"
    width="500">
        <v-card-title primary-title>
            Editar libro
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    name="isbn"
                    label="ISBN"
                    id="isbn"
                    type="number"
                    v-model="isbn"
                ></v-text-field>
                <v-text-field
                    name="titulo"
                    label="Titulo"
                    id="titulo"
                    type="text"
                    v-model="libro.titulo"
                ></v-text-field>
                <v-text-field
                    name="autor"
                    label="Autor"
                    id="autor"
                    type="text"
                    v-model="libro.autor"
                ></v-text-field>
                <v-text-field
                    name="portada"
                    label="Link portada"
                    id="portada"
                    type="text"
                    v-model="libro.portada"
                ></v-text-field>
                <v-text-field
                    name="stock"
                    label="Cantidad de libros"
                    id="stock"
                    type="number"
                    v-model="stock"
                ></v-text-field>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="success" @click="confirmar">Aplicar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="warning" @click="cancelar">Cancelar</v-btn>
            </v-card-actions>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            libro: {},
            token: '',
            isbn: '',
            stock: ''
        }
    },
    methods: {
        confirmar(){
            this.libro.isbn = parseInt(this.isbn);
            this.libro.stock = parseInt(this.stock);
            this.$store.dispatch('updateLibro', this.libro);
            this.$router.push('/libro');
        },
        cancelar(){
            this.$router.push('/libro');
        }
    },
    beforeMount(){
        this.token = this.$store.getters.getToken;
        this.libro = this.$store.getters.getLibro;
        this.isbn = this.libro.isbn.toString();
        this.stock = this.libro.stock.toString();
    },
    beforeCreate() {
        if (!this.$store.getters.isThereToken) {
            this.$router.push('/');
        }
    },
}
</script>