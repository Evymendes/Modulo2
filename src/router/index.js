import Vue from 'vue'
import Router from 'vue-router'
import Ola from '@/components/Ola'
import Aula1 from '@/components/Aula1'
import Aula2 from '@/components/Aula2'
import Aula3 from '@/components/Aula3'
import Aula4 from '@/components/Aula4'
import Aula5 from '@/components/Aula5'
import Aula6 from '@/components/Aula6'

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
    }  
  
  ]
})
