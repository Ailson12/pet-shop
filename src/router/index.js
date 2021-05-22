import Vue from 'vue'
import VueRouter from 'vue-router'

const Funcionario = () => import("../components/funcionarios/Funcionario");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/funcionarios',
    name: 'funcionarios',
    component: Funcionario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
