<template>
<div >
	<h1>Vai na Web</h1>
  <h2>Modulo 2</h2>
  <Gato> </Gato>
<router-link to="Aula1"> Aula 1</router-link>
<router-link to="Aula2"> Aula 2</router-link>
<router-link to="Aula3"> Aula 3</router-link>
<router-link to="Aula4"> Aula 4</router-link>
<router-link to="Aula5"> Aula 5 </router-link>
<router-link to="Aula6"> Aula 6 </router-link>
<router-link to="Aula7"> Aula 7 </router-link>
<router-link to="Aula8"> Aula 8 </router-link>
<router-link to="Aula9"> Aula 9 </router-link>
<router-link to="Aula10"> Aula 10 </router-link>

</div>	
</template>

<script>
import Gato from './Gato'

export default {
  name: 'Ola',
  components: {Gato},
  data () {
    return {
      nome: '',
      idade: ''
    }
  }
}
</script>

<style scoped>
</style>