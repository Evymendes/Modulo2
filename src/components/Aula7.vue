<template>
	<div>
		<h2>Clique no que tem mais haver com você!</h2>
		<p>Clique em uma Cor</p>
		<button v-on:click="corRosaClique">Rosa</button>
		<button v-on:click="corAzulClique">Azul</button>
		<button v-on:click="corVermelhoClique">Vermelho</button>
		<button v-on:click="corVerdeClique">Verde</button>
		<p>Clique em um Animal</p>
		<button v-on:click="corAzulClique">Cavalo</button>
		<button v-on:click="corRosaClique">Leão</button>
		<button v-on:click="corVerdeClique">Tartaruga</button>
		<button v-on:click="corVermelhoClique">Touro</button>
		<p>Clique em um Objeto</p>
		<button v-on:click="corVermelhoClique">Computador</button>
		<button v-on:click="corVerdeClique">Rádio</button>
		<button v-on:click="corRosaClique">Livro</button>
		<button v-on:click="corAzulClique">Celular</button>
		<p>Clique em uma Palavra</p>
		<button v-on:click="corVerdeClique">Ciência</button>
		<button v-on:click="corAzulClique">Deus</button>
		<button v-on:click="corRosaClique">Dinheiro</button>
		<button v-on:click="corVermelhoClique">Amor</button><br><br>

		<button v-on:click=resultado>Resultado: {{resultado}}</button><br><br>

		<div>
			<router-link to='/'> Inicio </router-link><br><br>
			<router-link to='Aula1'> Aula 1 </router-link>
			<router-link to='Aula2'> Aula 2 </router-link>
			<router-link to='Aula3'> Aula 3 </router-link>
			<router-link to='Aula4'> Aula 4 </router-link>
			<router-link to='Aula5'> Aula 5 </router-link>
			<router-link to='Aula6'> Aula 6 </router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Aula7',
		data() {
			return {
				resultado: '',
				corRosa: 0,
				corAzul: 0,
				corVerde: 0,
				corVermelho: 0
			}
		},
		methods: {
			corRosaClique() {
				return this.corRosa = this.corRosa +10
			},
			corAzulClique() {
			return this.corAzul = this.corAzul +20
		},
			corVermelhoClique() {
			return this.corVermelho = this.corVermelho +30
		},
			corVerdeClique() {
			return this.corVerde = this.corVerde +40
		},
		mostrarResultado() {
			if (this.corRosa > 0 && this.CorRosa < 40){
				return this.resultado = '1111111111111111111'
			}
			if (this.corAzul > 41 && this.corAzul > 80){
				return this.resultado = '222222222222'
			}
			if (this.corVerde > 61 && this.corVerde > 120){
				return this.resultado = '33333333333'
			} else {
				return this.resultado = '444444444444'
			}
		}
	}
}
	
</script>

<style>
	
</style>