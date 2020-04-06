<template>
    <v-col cols="3">
        <v-card
        width="350" @click="seleccionar">
            <v-img :src="portada"
            class="white--text align-end"
            content
            height="200">
            <v-card-title primary-title>
                {{titulo}}
            </v-card-title>
        </v-img>
        <v-card-text>
            <p>Autor: {{autor}}</p>
            <p>ISBN: {{isbn}}</p>
            <p>Cantidad Libros: {{stock}}</p>
        </v-card-text>
    </v-card>
    </v-col>
</template>
<script>
export default {
    props: {
        isbn: {
            type: Number,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        autor: {
            type: String,
            required: true
        },
        portada: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
    },
    methods: {
        seleccionar(){
            let libro = {
                isbn: this.isbn,
                titulo: this.titulo,
                autor: this.autor,
                portada: this.portada,
                stock: this.stock
            }
            this.$store.commit('setLibro', libro);
            this.$router.push('/libro')
        }
    },
}
</script>