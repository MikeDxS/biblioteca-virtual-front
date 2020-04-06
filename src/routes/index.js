import VueRouter from 'vue-router';
import Libros from '../components/Libros.vue';
import Login from '../components/Login.vue';
import InfoLibro from '../components/InfoLibros.vue';
import Logout from '../components/Logout.vue';
import EdicionLibro from '../components/EdicionLibro.vue';
import Reserva from '../components/Reserva.vue';
import MisReservas from '../components/MisReservas.vue';
import FormularioLibro from '../components/FormularioLibro.vue';
import FormularioUsuario from '../components/FormularioUsuario.vue';
let routes = [
    {
        path: '/',
        component: Libros
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/libro',
        component: InfoLibro
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/editar',
        component: EdicionLibro
    },
    {
        path: '/reservar',
        component: Reserva
    },
    {
        path: '/reservas',
        component: MisReservas
    },
    {
        path: '/anadir-libro',
        component: FormularioLibro
    },
    {
        path: '/create-user',
        component: FormularioUsuario
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})