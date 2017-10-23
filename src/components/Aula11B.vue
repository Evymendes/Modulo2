<template>
	<div>
		<div v-for="usuario in usuarios">
			<h2>{{usuario.name}}</h2>
			<p>{{usuario.username}}</p>
			<p>{{usuario.phone}}</p>
			<p>{{usuario.email}}</p>
			<p>{{usuario.website}}</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Aula11B',
		data () {
			return {
				usuarios: []
			}
		},

		created(){
			axios.get(`http://jsonplaceholder.typicode.com/users`)
			.then(response => {
				this.usuarios = response.data
			})
		}
	} 
</script>