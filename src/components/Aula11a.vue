<template>
	<section>
		<ul>
			<li v-for= "resposta of respostas">
				<p><strong>{{resposta.nome}}</strong></p>
				<p>{{resposta.email}}</p>
			</li>
		</ul>
	</section>
</template>

<script>
	import axios from 'axios';

	export default {,
		name: 'Aula11a',
		data (){
			return {
				respostas: [],
			}
		},
		created() {
			axios.get('http://jsonplaceholder.typicode.com/users')
			.then(response => {
				this.respostas = response.data
			})
		}
	}

</script>

<style></style>