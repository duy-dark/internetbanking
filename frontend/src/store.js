import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ttcn: null,
        history: null,
        dsnn: null,
        taikhoan: null
    },
    mutations: {
        LOADALL(state,payload) {
            var self = this;
            var o={
            	USERNAME:payload
            };
            axios.post('http://localhost:3000/accountbank',o)
                .then(res => {
                   state.ttcn=res.data.TTCN;
                   state.history=res.data.H;
                   state.dsnn=res.data.DSNN;
                   state.taikhoan=res.data.TK;
                   console.log(state);
                }).catch(err => {
                    console.log(err);
                });
        }
    },
    actions: {
    	loadAll(ctx,payload){
    		ctx.commit('LOADALL',payload);
    	}
    }
})