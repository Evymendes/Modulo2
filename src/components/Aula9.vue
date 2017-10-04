<template>
<div class="principal">	
	<div class="header">
		<h1>{{usuario.nome}}</h1>
		<img :src="usuario.photo">
	</div>
	<div class="main">
		<h2>A fazer:</h2>
		<ul v-for="rotina in usuario.descricao">
			<li>
				{{rotina}}			
			</li>	
		</ul>
		<label>
			<span>Digite a rotina:</span>
			<input v-model="recado" v-on:keyup.enter="addRecado">
		</label>
	</div>
	<div class="Footer">
		<router-link to="/">Inicio</router-link><br>
		<router-link to="Aula1"> Aula 1 </router-link>
		<router-link to="Aula2"> Aula 2 </router-link>
		<router-link to="Aula3"> Aula 3 </router-link>		
		<router-link to="Aula4"> Aula 4 </router-link>
		<router-link to="Aula5"> Aula 5 </router-link>
		<router-link to="Aula6"> Aula 6 </router-link>
		<router-link to="Aula7"> Aula 7 </router-link>
		<router-link to="Aula8"> Aula 8 </router-link>

	</div>
</div>

	
</template>

<script>
	export default {
		name: 'Aula8',
		data () {
			return {
				recado: "",
				usuario: {
					photo: 'https://s-media-cache-ak0.pinimg.com/originals/42/42/71/4242711fb15eb51be1ea9b2f136b159f.jpg',
					nome: 'Melk Laurindo Mendes',
					descricao:[]
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

.principal{
	display: flex;
	justify-content: center;
	align-items: center;	
	flex-flow: wrap;
}

.header {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;	
	color: rgba(67, 86, 123, 0.97);
	width: 50%;

}

.header img {
		width: 42%;
		margin: 2%;
	}

.main {
	display: flex;
	flex-direction: column;
	color: rgba(67, 86, 123, 0.97);
	width:50%;
}

.main h2 {
	font-size: 1.25em;
	padding: 2%;
	margin-right: 45%;
}

.main ul {

		list-style: none;
	 	margin: 0.75% ;
	 	width: 40%;
	}

	li {
	 box-shadow: 2px 2px 2px 2px black;
	 border-width: 50%;
	 padding: 5px 40px 5px 40px;
	 text-align: left;
	}
.main label {
	margin: 5%;
	margin-right: 50%;
}

.Footer {
	margin: 5%;
	width: 100%;
}
	
</style>