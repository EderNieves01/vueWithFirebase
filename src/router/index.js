import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    //dejamos esta parte publica para que puedan acceder libremente
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    //dejamos esta parte publica para que puedan acceder libremente esta tambien
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue'),
    meta: { protect: true } //protect puede llamarse como queramos
  },
  {
    path: '/created',
    name: 'created',
    // route level code-splitting
    // this generates a separate chunk (created.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "created" */ '../views/Created.vue'),
    meta: { protect: true } //protect puede llamarse como queramos
  }
  ,
  {
    //creando rutas dinamicas con parametros : + parametro (id)
    path: '/edit-project/:id',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (edit-project.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
    meta: { protect: true } //protect puede llamarse como queramos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
//protegiendo las rutas
router.beforeEach((to, from, next) => {
  if(to.meta.protect){ //to.meta.protect accediento a la direccion para dar condicion
    if(localStorage.getItem("user")){
      next();
    }else{
      next("/login"); //nos redirige a login en caso de que no cumpla con la condicion ni nos permisos
    }
  }else{
    next();
  }
})

export default router
