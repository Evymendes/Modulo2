<template>
	<section>
		<ul>
			<li v-for="resposta in respostas">
			<p><strong>{{resposta.name}}</strong></p>
			<p>{{resposta.email}}</p>	
			</li>
		</ul>
	</section>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'aula11',
		data () {
			return {
				respostas: [],
			}
		},
		created(){
			axios.get('http://jsonplaceholder.typicode.com/users')
			.then(response => {
				this.respostas = response.data
			})
		}
	}

</script>