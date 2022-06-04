<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="4">
			 

			 <v-card>
			 	<v-card-title>
			 		Hijos o dependientes
			 	</v-card-title>
			 	<v-card-text>

			 		<v-data-table :headers="headerhijo" :items="hijos">
			 			
			 		</v-data-table>


			 	</v-card-text>
			 </v-card>
			</v-col>
		</v-row>

	</v-container>
</template>
<script>
export default {
	data(){
		return {
			headerhijo:[
				{
					text:"Nombre",
					value:"nombre"
				},
				{
					text:"Edad",
					value:"edad"
				},
				{
					text:"Editar",
					value:"editar"
				}
			],
			hijos:[]
		}
	},
	methods:{
		
	}
}
</script>