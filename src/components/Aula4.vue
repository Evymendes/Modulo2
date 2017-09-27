<template>
	<div>
		<h1>Campeonato Brasileiro</h1>
		<h2><img class="fla" src="https://www.fabricadebandeiras.com.br/img/products/bandeira-flamengo_1_630.jpg"> Flamengo VS Corinthians <img class="cor" src="https://s-media-cache-ak0.pinimg.com/originals/ef/8d/48/ef8d488ef6395ee1fc2303533e530c13.jpg"></h2>
		<div>
			<button v-on:click="golflaclique()">+</button>
			<button v-on:click="anulaflaclique()">-</button>
			<button v-on:click="novojogoflaclique()">Novo Jogo</button>
			<p> Fla: {{cliquefla}}</p>
		</div>
		<div>
			<button v-on:click="golcorclique()">+</button>
			<button v-on:click="anulacorclique()">-</button>
			<button v-on:click="novojogocorclique()">Novo Jogo</button><br>
			<p> Cor: {{cliquecor}}</p>
		</div>
		<div>
			<button v-on:click="mostraGanhador()">Resultado:</button>
			<p>{{ganhador}}</p>
		</div>
		

		<router-link to="/">Inicio</router-link><br>
		<router-link to="Aula1"> Aula 1 </router-link>
		<router-link to="Aula2"> Aula 2 </router-link>
		<router-link to="Aula3"> Aula 3 </router-link>
		<router-link to="Aula5"> Aula 5 </router-link>
		<router-link to="Aula6"> Aula 6 </router-link>
	</div>
		
</template>

<script>
	export default {
  name: 'Campeonato Brasileiro',
  data () {
    return {
      titulo: 'Futebol',
      cliquefla: 0,
      cliquecor: 0,
      ganhador: ''

    }
  },
	methods: {
		golflaclique() {
			return this.cliquefla++
		},
		anulaflaclique() {
			return this.cliquefla--
		},
		novojogoflaclique() {
			return this.cliquefla = 0
		},
		golcorclique() {
			return this.cliquecor++
		},
		anulacorclique() {
			return this.cliquecor--
		},
		novojogocorclique() {
			return this.cliquecor = 0
		},
		mostraGanhador() {
			if (this.cliquefla > this.cliquecor){
				return this.ganhador = 'Flamengo Venceu'
			}
			if (this.cliquefla == this.cliquecor){
				return this.ganhador = 'Empate'
			} else {
				return this.ganhador = 'Corinthians Venceu'
			}
		}
	}
}
</script>

<style>

.fla {
	width: 4%;
}

.cor {
	width: 4%;
}
	
</style>