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
	</div>
</div>

	
</template>

<script>
	export default {
		name: 'Aula8',
		data () {
			return {
				usuario: {
					photo: 'https://s-media-cache-ak0.pinimg.com/originals/42/42/71/4242711fb15eb51be1ea9b2f136b159f.jpg',
					nome: 'Melk Laurindo Mendes',
					descricao:[
					  'Dar Racão',
					  'Repor Água',
					  'Limpar onde faz as necessidades',
					  'Dar Banho / Limpar',
					  'Dar algo para mastigar',
					  'Passear'
					  ]
					}
				}
			}
		}
</script>

<style>

.principal{
	display: flex;
	justify-content: center;
	align-items: center;
}

.header {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;	
	color: rgba(67, 86, 123, 0.97);
	width: 100%;
	margin: 0;

}

	img {
		width: 51%;
		margin: 2%;
	}

.main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: rgba(67, 86, 123, 0.97);
	width: 100%;
}

.main h2 {
	background-color: rgba(63, 81, 181, 0.32);
	padding: 1%;
	font-size: 1.25em;
	padding: 2%;
}

	ul {

		list-style: none;
		display: flex;
		justify-content: right;
		align-items: right; 
	 	margin: 0.75% ;
		/*
		display: flex;
		justify-content: center;
		border: 2% auto black;*/
	}

	li {
	 box-shadow: 2px 2px 2px 2px black;
	 border-width: 50%;
	 padding: 5px 40px 5px 40px;
	 text-align: left;
	}

.footer {
	display: flex;
	flex-flow: wrap;

}
	
</style>