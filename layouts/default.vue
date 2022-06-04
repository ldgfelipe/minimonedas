<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          v-if="validmenuses(item.login)"
        >
          <v-list-item-action >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>


    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>


      <v-btn  to="/" >{{title}}</v-btn>
      <v-spacer />
  
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
 
    
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Inicio',
          to: '/',
          login:{
            validar:false,
            is_login:false
          },
             permiso:0
        },
        {
          icon: 'mdi-account',
          title: 'Login',
          to: '/login',
          login:{
            validar:true,
            is_login:false
          },
          permiso:0
        },
        {
          icon: 'mdi-file-tree',
          title: 'Tablero',
          to: '/dashboard',
          login:{
            validar:true,
            is_login:true
          },
             permiso:0
        },
        {
          icon: 'mdi-file-tree',
          title: 'Tareas',
          to: '/tareas',
          login:{
            validar:true,
            is_login:true
          },
             permiso:0
        },
         {
          icon: 'mdi-cog-outline',
          title: 'Configuración',
          to: '/config',
          login:{
            validar:true,
            is_login:true
          },
             permiso:0
        },
        {
          icon: 'mdi-logout',
          title: 'Cerrar Sesión',
          to: '/logout',
          login:{
            validar:true,
            is_login:true
          },
             permiso:0
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Minimonedas',
    }
    
  },
   computed:{
      ...mapState(['is_login'])
    },
    methods:{
      validmenuses(tip){
        var ret=false
        if(tip.validar===true){

              if(this.is_login===tip.is_login){
                ret=true
              }else{
                ret=false
              }
       
        } else{
          ret=true
        }

        return ret;
      }
    }
 
}
</script>
