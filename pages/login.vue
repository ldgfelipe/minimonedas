<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-card>
                <v-card-title>
                    Login
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="loginData.user" label="Usuario"></v-text-field>
                    <v-text-field v-model="loginData.pass" type="password" label="Contraseña"></v-text-field>
                    <v-select v-model="loginData.tipo" :items="['Padre o Tutor','Hijo o Dependiente']"></v-select>
                    <v-btn class="primary white--text" @click="loginuser()">Ingresar</v-btn>
                </v-card-text>
                </v-card>
            </v-col>
             <v-col cols="12" md="6">
            <v-card>
                <v-card-title>
                 Registro
                </v-card-title>
                <v-card-text>
                    <v-text-field  v-model="regdata.nombre" label="Nombre Padre o Tutor"></v-text-field>
                    <v-text-field v-model="regdata.correo" label="Correo" ></v-text-field>
                    <v-text-field  v-model="regdata.password" type="password" label="Contraseña"></v-text-field>
                    <v-btn class="primary white--text" @click="registrouser()">Registro</v-btn>
                </v-card-text>
                </v-card>
                <v-dialog v-model="alerta" max-width="300">
                    <v-card>
                    <v-card-title class="primary white--text">
                   <v-icon class="white--text" size="50">mdi-alert</v-icon> Alerta
                    </v-card-title>
                        <v-card-text class="text-center">
                           <h3> {{mensaje}}</h3>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
    </v-row>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
    data(){
        return {
            regdata:{},
            loginData:{},
            mensaje:"",
            alerta:false
        }
    },
    computed:{
        ...mapState(['is_login'])
    },
    methods:{
        ...mapMutations(['isloginData','datosUsuario']),
      loginuser(){
        this.$fire.auth.signInWithEmailAndPassword(this.loginData.user,this.loginData.pass)
        .then((user)=>{
            this.mensaje="Acceso Correcto"
            this.alerta=true
            this.isloginData(true)
            this.cargaDatosUsuario()
            this.$router.push('/dashboard')
        })
        .catch((error)=>{
            this.mensaje="Acceso Incorrecto verifique sus datos"
            this.alerta=true
        })

        },
      registrouser(){

        this.$fire.auth.createUserWithEmailAndPassword(this.regdata.correo,this.regdata.password)
        .then((reg)=>{
            console.log(reg)
            this.mensaje="Registro Correcto"
            this.alerta=true
            this.isloginData(true)
            this.registroNuevoUsuario()

        })
        .catch((err)=>{
            console.log(err)
            this.mensaje="Registro incorrecto"
            this.alerta=true
        })


        },
        registroNuevoUsuario(){
                this.$fire.firestore.collection('usuarios').add(this.regdata)
                .then((res)=>{
                    this.regdata.id=res.id
                    this.$fire.firebase.collection('usuarios').doc(res.id)
                    .update(this.regdata)
                    .then((res)=>{
                        this.$router.push('/dashboard')
                    })
                })
        }
    },

}
</script>