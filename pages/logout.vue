<template>
<v-main>
	Cerrando Sesión
</v-main>
</template>
<script>
export default {
	data(){
		return {

		}
	},
	mounted(){
		this.cerrandoSesion()
	},
	methods:{
		cerrandoSesion(){
			this.$fire.auth.signOut()
			this.$router.push("/")
		}
	}

}
</script>
