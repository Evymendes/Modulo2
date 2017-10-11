import Vue from 'vue'
import Router from 'vue-router'
import Ola from '@/components/Ola'
import Aula1 from '@/components/Aula1'
import Aula2 from '@/components/Aula2'
import Aula3 from '@/components/Aula3'
import Aula4 from '@/components/Aula4'
import Aula5 from '@/components/Aula5'
import Aula6 from '@/components/Aula6'
import Aula7 from '@/components/Aula7'
import Aula8 from '@/components/Aula8'
import Aula9 from '@/components/Aula9'
import Aula10 from '@/components/Aula10'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ola',
      component: Ola
    },

     {
      path: '/Aula1',
      name: 'Aula1',
      component: Aula1
    },

	{
      path: '/Aula2',
      name: 'Aula2',
      component: Aula2
    }, 

    {
     path: '/Aula3',
     name: 'Aula3',
     component: Aula3
    },

    {
     path: '/Aula4',
     name: 'Aula4',
     component: Aula4 
    },

    {
     path: '/Aula5',
     name: 'Aula5',
     component: Aula5 
    },

    {
     path: '/Aula6',
     name: 'Aula6',
     component: Aula6 
    },  

    {
      path: '/Aula7',
      name: 'Aula7',
      component: Aula7
    },

    {
      path: '/Aula8',
      name: 'Aula8',
      component: Aula8
    },

    {
      path: '/Aula9',
      name: 'Aula9',
      component: Aula9
    },

    {
      path: '/Aula10',
      name: 'Aula10',
      component: Aula10
    }
  
  ]
})
