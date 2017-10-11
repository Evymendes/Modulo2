<template>
	<div>
		<div>
		<h1>Aula 6</h1>
			<h1>Quadribol</h1>
			<!-- <h2>Escolhe seu Time</h2> -->
			<h2>Grifinória VS Sonserina</h2>
			<!-- <button v-on:click="grifinoria()">Grifinória</button>
			<button v-on:click="sonserina()">Sonserina</button>
			<button v-on:click="lufalufa()">Lufa-Lufa</button>
			<button v-on:click="corvinal()">Corvinal</button> -->
		</div>
		<div>	
			<!-- <h3>Que comece os JOGOS!!!</h3> -->
			<p> Grifinória {{primeirotime}}</p>
			<button v-on:click="golprimeirotimeclique()">Gol</button>
			<button v-on:click="golprimeirotimepombodeouroclique()">Pombo de Ouro</button>
			<button v-on:click="anulaprimeirotimeclique()">Anula Gol</button>		
			<button v-on:click="anulapomboouroprimeirotimeclique()">Anula Pombo de Ouro</button>
			<button v-on:click="novojogoprimeirotimeclique()">Novo Jogo</button>
		</div>
		<div><br>
			<p>Sonserina {{segundotime}}</p>
			<button v-on:click="golsegundotimeclique()">Gol</button>
			<button v-on:click="golpombodeourosegundotimeclique()">Pombo de Ouro</button>
			<button v-on:click="anulasegundotimeclique()">Anula Gol</button>
			<button v-on:click="anulapombodeourosegundotimeclique()">Anula Pombo de Ouro</button>
			<button v-on:click="novojogosegundotimeclique()">Novo Jogo</button>
		</div>
		<div><br>
			<button v-on:click="mostraGanhador()">Resultado:</button>
			<p>{{ganhador}}</p>
		</div>



		<br><br><br><br><router-link to="/">Inicio</router-link><br>
		<router-link to="Aula1"> Aula 1 </router-link>
		<router-link to="Aula2"> Aula 2 </router-link>
		<router-link to="Aula3"> Aula 3 </router-link>		
		<router-link to="Aula4"> Aula 4 </router-link>
		<router-link to="Aula5"> Aula 5 </router-link>
		<router-link to="Aula7"> Aula 7 </router-link>
		<router-link to="Aula8"> Aula 8 </router-link>
		<router-link to="Aula9"> Aula 9 </router-link>
		<router-link to="Aula10"> Aula 10 </router-link>

	</div>
	
</template>

<script>
	export default {
	  name: 'Quadribol',
	  data () {
	    return {
	      titulo: 'Quadribol',
	      primeirotime: 0,
	      segundotime: 0,	      
    	  cliqueprimeirotime: 0,
	      cliquesegundotimeclique: 0,
	      ganhador: ''
    }
},
		methods: {
		golprimeirotimeclique() {
			return this.primeirotime = this.primeirotime +10
		},
		golprimeirotimepombodeouroclique() {
			return this.primeirotime = this.primeirotime +150
		},
		anulaprimeirotimeclique() {
			return this.primeirotime = this.primeirotime -10
		},
		anulapomboouroprimeirotimeclique() {
			return this.primeirotime = this.primeirotime -150
		},
		novojogoprimeirotimeclique() {
			return this.primeirotime = 0
		},
		golsegundotimeclique() {
			return this.segundotime = this.segundotime +10
		},
		golpombodeourosegundotimeclique() {
			return this.segundotime = this.segundotime +150
		},
		anulasegundotimeclique() {
			return this.segundotime = this.segundotime  -10
		},
		anulapombodeourosegundotimeclique() {
			return this.segundotime = this.segundotime -150
		},
		novojogosegundotimeclique() {
			return this.segundotime = 0
		},
		mostraGanhador() {
			if (this.primeirotime > this.segundotime){
				return this.ganhador = 'Grifinória Venceu!!!'
			}
			if (this.primeirotime == this.segundotime){
				return this.ganhador = 'Empate'
			} else {
				return this.ganhador = 'Sonserina Venceu!!!'
			}
		}
	}
}
  
</script>

<style>
	
</style>
