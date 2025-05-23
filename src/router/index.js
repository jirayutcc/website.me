import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Home from '../views/Home.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Certificate from '../components/Certificate.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/certificate',
    name: 'Certificate',
    component: Certificate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
