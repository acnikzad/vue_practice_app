import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import newTask from '../views/NewView.vue'
import quiz from '../views/QuizView.vue'
import gradesapp from '../views/GradesView.vue'
import apiapp from '../views/APIFetch.vue'
import ContactApp from '../views/ContactFormView.vue'
import CarsView  from '../views/CarsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newtask',
    name: 'newtask',
    component: newTask
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: quiz
  },
  {
    path: '/gradesapp',
    name: 'gradesapp',
    component: gradesapp
  },
  {
    path: '/apifetch',
    name: 'apiapp',
    component: apiapp
  },
  {
    path: '/contactapp',
    name: 'contactview',
    component: ContactApp
  },
  {
    path: '/carsapp',
    name: 'carsview',
    component: CarsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
