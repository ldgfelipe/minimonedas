import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

    const store=()=>{ return new Vuex.Store({
        state:{
            is_login:false,
            datosUsuario:{}
        },
        actions:{
            onAuthStateChangedAction: (ctx, { authUser, claims }) => {
                      if (!authUser) {
                        // claims = null
                        // Perform logout operations
                      } else {
                        // Do something with the authUser and the claims object...
                      }
                    }
        },
        mutations:{
            isloginData(state, data){
                state.is_login=data
            },
            cargaDatosUsuario(state, data){
                state.datosUsuario=data
            },
             ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
                if(authUser){
                    state.is_login=true
                }else{
                   state.is_login=false
                }
            }
        }   
    })
}

export default store