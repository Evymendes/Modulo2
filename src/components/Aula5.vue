<template>
	<div>
		<div>
			<h1>Eu já posso casar??</h1>
			<label>Qual a sua idade?</label>
			<input v-model="idade" v-on:keyup.enter='possocasar'><br>
			<button v-on:click="possocasar()"> Posso casar? </button>
		<p v-if = "idade != 0">Você tem {{idade}} anos. {{resposta}}</p>
		</div><br>
		<router-link to="/">Inicio</router-link><br>
		<router-link to="Aula1"> Aula 1 </router-link>
		<router-link to="Aula3"> Aula 3 </router-link>
		<router-link to="Aula4"> Aula 4 </router-link>
		<router-link to="Aula5"> Aula 5 </router-link>
		<router-link to="Aula6"> Aula 6 </router-link>
		<router-link to="Aula7"> Aula 7 </router-link>
		<router-link to="Aula8"> Aula 8 </router-link>
	</div>
	
</template>

<script>
export default {
  name: 'Casamento',
  data () {
    return {
      idade: '',
      resposta: ''
          }
  },


      methods:{
      		possocasar() {
			if (this.idade >= 16 && this.idade < 18){
				return this.resposta = 'Só pode casar somente com assinatura do responsável'
			}
			if (this.idade >= 18){
				return this.resposta = 'Você pode se casar'
			} else {
				return this.resposta = 'Você não pode casar no Brasil'
			}
  		}
	}
}

</script>

<style>
	
</style>