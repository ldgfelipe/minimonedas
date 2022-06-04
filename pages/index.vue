<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="5">
       <v-card>
        <v-card-text class="text-center">
            <v-row>
              <v-col cols="12" md="6">
                <v-icon size="100">mdi-hand-coin</v-icon>
                </v-col>
              <v-col cols="12" md="6">
                <h3>Bienvenidos al Sistema </h3>
                <h1 class="Heading 1">Minimonedas</h1>
            </v-col>
            <v-col cols="12" md="12">
              <v-btn class="primary white--text" to="login">Iniciar</v-btn>
              </v-col>
            </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
