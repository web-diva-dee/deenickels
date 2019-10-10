import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Web from './views/Web.vue'
import Skills from './views/Skills.vue'
import Resume from './views/Resume.vue'
import PatientEd from './views/PatientEd.vue'
import EarlyBird from './views/EarlyBird.vue'
import LeadGen from './views/LeadGen.vue'
import MastersWorkshops from './views/MastersWorkshops.vue'
import JoinClub from './views/JoinClub.vue'
import Trixie from './views/Trixie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/web',
      name: 'Web',
      component: Web
    },


    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },

    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
    ,
    {
      path: '/patientEd',
      name: 'PatientEd',
      component: PatientEd
    },

    {
      path: '/leadGen',
      name: 'LeadGen',
      component: LeadGen
    },
 
    {
      path: '/earlyBird',
      name: 'EarlyBird',
      component: EarlyBird
    },

    {
      path: '/mastersWorkshops',
      name: 'MastersWorkshops',
      component: MastersWorkshops
    },

    {
      path: '/joinClub',
      name: 'JoinClub',
      component: JoinClub
    },

    {
      path: '/trixie',
      name: 'Trixie',
      component: Trixie
    },

    {
      path: '/*',
      name: 'Home',
      component: Home
    }
  ]
})