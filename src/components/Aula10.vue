<template>
	<div class="inicio">
		<h1> To Do List </h1>
		<div  class="header" >
			<div class="header-fazer">
				<h2>A fazer:</h2>
				<ul class="fazer">
					<li class="fazerli">Arrumar Quarto</li>
					<li class="fazerli">Estudar Enem</li>
					<li class="fazerli">Passear com o Tótó</li>
					<li class="fazerli">Ler o Livro</li>
					<li class="fazerli">Deixar de Assistir Televisão</li>
					<li class="fazerli">Estudar Vai Na Web </li>
				</ul>
			</div>
			<div class="header-fazendo">
				<h2>Fazendo:</h2>
				<ul class="fazendo">
					<li>Estudar Enem</li>
					<li>Estudar Vai Na Web</li>
					<li>Ler o Livro</li>
				</ul>
			</div>
			<div class="header-feito">
				<h2>Feito:</h2>
				<ul class="feito" v-for="rotina in usuario.descricao">
					<li>
						{{rotina}}
					</li>
				</ul>
				<label><!-- 
					<span>Digite o que já concluiu:</span> -->
					<input v-model="recado" v-on:keyup.enter="addRecado">
				</label>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Aula10',
		data () {
			return {
				recado: "",
				RecadoSegundo: "",
				usuario: {
					descricao: []
				}
				}
			},
				methods: {
					addRecado(recado) {
						return this.usuario.descricao.push(this.recado),
							this.recado = ""
						}
			}
		}
</script>

<style>

.inicio {
	text-align: center;
}
.header {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.header-fazer {
	width: 33.33%;
	height: 50%;
	background-color: black;

}
.fazer li{
	list-style: none;
}

.header-fazendo{
	width: 33.33%;
	background-color: yellow;
	height: 191.5px;
}

.fazendo li{
	list-style: none;
}

.header-feito {
	width: 33.33%;
	background-color: black;
	height: 191.5px;
}

.feito li{
	list-style: none;
}

</style>