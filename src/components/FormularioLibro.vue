<template>
    <v-card width="350"
    class="mx-auto">
        <v-card-title primary-title>
            Añadir Libro
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    name="isbn"
                    label="ISBN"
                    id="nISBN"
                    type="number"
                    v-model="isbn"
                ></v-text-field>
                <v-text-field
                    name="titulo"
                    label="Titulo"
                    id="nTitulo"
                    type="text"
                    v-model="titulo"
                ></v-text-field>
                <v-text-field
                    name="portada"
                    label="Portada"
                    id="nPortada"
                    type="text"
                    v-model="portada"
                ></v-text-field>
                <v-text-field
                    name="autor"
                    label="Autor"
                    id="nAutor"
                    type="text"
                    v-model="autor"
                ></v-text-field>
                <v-text-field
                    name="stock"
                    label="Cantidad"
                    id="nStock"
                    type="number"
                    v-model="stock"
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" @click="anadir">Añadir</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="cancelar">Cancelar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            isbn: '',
            titulo: '',
            portada: '',
            autor: '',
            stock: ''
        }
    },
    methods:{
        anadir(){
            let libro = {
                isbn: parseInt(this.isbn),
                titulo: this.titulo,
                portada: this.portada,
                autor: this.autor,
                stock: parseInt(this.stock)
            }
            this.$store.dispatch('createLibro', libro);
            this.$router.go(-1);
        },
        cancelar(){
            this.$router.go(-1);
        }
    },
    beforeMount(){
        if(!this.$store.getters.isThereToken){
          
          this.$router.go(-1);
        }
    }
}
</script>